import { s as sanityClient, i as imageUrl } from '../../chunks/helpers_Dh_tO31u.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ url }) => {
  try {
    const locale = url.searchParams.get("lang") || "en";
    console.log(`[Projects API] Fetching projects for locale: ${locale}`);
    const sanityProjects = await sanityClient.fetch(
      `*[_type == "project"] | order(order asc) {
				_id,
				content,
				mainImage,
				gallery,
				videoUrl
			}`
    );
    console.log(`[Projects API] Fetched ${sanityProjects?.length || 0} projects from Sanity`);
    if (sanityProjects && sanityProjects.length > 0) {
      const projects = sanityProjects.map((p, idx) => {
        const content = p.content?.[locale] || p.content?.en;
        return {
          id: idx + 1,
          title: content?.title || "Untitled",
          location: content?.location || "",
          type: content?.type || "",
          description: content?.description || "",
          videoUrl: p.videoUrl || "",
          mainImg: p.mainImage ? imageUrl(p.mainImage).url() : "",
          gallery: (p.gallery || []).map((img) => imageUrl(img).url())
        };
      });
      console.log(`[Projects API] Returning ${projects.length} projects`);
      return new Response(JSON.stringify({ success: true, data: projects }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      console.log("[Projects API] No projects found in Sanity");
      return new Response(JSON.stringify({ success: true, data: [] }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("[Projects API] Error:", error);
    return new Response(JSON.stringify({ success: false, error: String(error), data: [] }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
