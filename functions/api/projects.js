/**
 * Cloudflare Worker for fetching projects from Sanity in real-time
 * Separates concerns: sendemail.js handles email, projects.js handles projects
 */

const SANITY_PROJECT_ID = "py6y7j4v";
const SANITY_DATASET = "production";

/**
 * CORS headers for the Projects API
 */
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://artdecopergola.com",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

/**
 * Handle CORS preflight
 */
function handleCors() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

/**
 * Build Sanity image URL
 */
function buildImageUrl(imageAsset) {
  if (!imageAsset || !imageAsset._ref) {
    return "";
  }
  
  const [, , , width, height, format] = imageAsset._ref.split("-");
  const assetId = imageAsset._ref.split("-").slice(1, 4).join("-");
  
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${assetId}-${width}x${height}.${format}`;
}

/**
 * Fetch projects from Sanity API
 */
async function fetchProjectsFromSanity(token, locale = 'en') {
  try {
    const query = `*[_type == "project"] | order(order asc) {
      _id,
      content,
      mainImage,
      gallery,
      videoUrl
    }`;

    const encodedQuery = encodeURIComponent(query);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2024-01-01/data/query/${SANITY_DATASET}?query=${encodedQuery}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error(`Sanity API error: ${response.status}`);
      const error = await response.text();
      console.error("Error details:", error);
      throw new Error(`Sanity API returned ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.result || !Array.isArray(data.result)) {
      console.error("Invalid Sanity response:", data);
      return [];
    }

    // Transform Sanity data to frontend format
    const projects = data.result.map((p, idx) => {
      const content = p.content?.[locale] || p.content?.en || {};
      
      return {
        id: idx + 1,
        title: content.title || "Untitled",
        location: content.location || "",
        type: content.type || "",
        description: content.description || "",
        videoUrl: p.videoUrl || "",
        mainImg: p.mainImage ? buildImageUrl(p.mainImage) : "",
        gallery: (p.gallery || []).map(img => buildImageUrl(img)).filter(url => url),
      };
    });

    return projects;
  } catch (error) {
    console.error("[Projects Worker] Sanity fetch error:", error);
    throw error;
  }
}

/**
 * Main handler for the projects endpoint
 */
export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return handleCors();
    }

    // Only allow GET requests
    if (request.method !== "GET") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

    try {
      // Get locale from query params
      const url = new URL(request.url);
      const locale = url.searchParams.get("lang") || "en";

      console.log(`[Projects Worker] Fetching projects for locale: ${locale}`);

      // Check if SANITY_API_TOKEN is set
      if (!env.SANITY_API_TOKEN) {
        console.error("[Projects Worker] SANITY_API_TOKEN not configured");
        return new Response(
          JSON.stringify({
            success: false,
            error: "API not configured",
            data: [],
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      }

      // Fetch from Sanity
      const projects = await fetchProjectsFromSanity(
        env.SANITY_API_TOKEN,
        locale
      );

      console.log(
        `[Projects Worker] Successfully fetched ${projects.length} projects`
      );

      // Return successful response with CORS headers
      return new Response(
        JSON.stringify({
          success: true,
          data: projects,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "max-age=60", // Cache for 1 minute to reduce Sanity API calls
            ...corsHeaders,
          },
        }
      );
    } catch (error) {
      console.error("[Projects Worker] Error:", error);

      return new Response(
        JSON.stringify({
          success: false,
          error: error.message || "Internal server error",
          data: [],
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }
  },
};
