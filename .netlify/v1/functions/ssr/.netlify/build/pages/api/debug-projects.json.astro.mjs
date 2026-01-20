import { s as sanityClient } from '../../chunks/helpers_Dh_tO31u.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    console.log("[Debug] Starting Sanity query...");
    const sanityProjects = await sanityClient.fetch(
      `*[_type == "project"] {
				_id,
				_type,
				_rev,
				order,
				content,
				mainImage,
				gallery,
				videoUrl
			}`
    );
    console.log("[Debug] Query completed");
    console.log("[Debug] Found projects:", sanityProjects?.length || 0);
    console.log("[Debug] Raw data:", JSON.stringify(sanityProjects, null, 2));
    return new Response(
      JSON.stringify({
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        count: sanityProjects?.length || 0,
        data: sanityProjects || []
      }, null, 2),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("[Debug] Error:", error);
    return new Response(
      JSON.stringify({
        error: String(error),
        stack: error instanceof Error ? error.stack : void 0
      }, null, 2),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
