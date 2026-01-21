// This file is deprecated - projects are served via Astro API at /api/projects.json
export default {
  async fetch() {
    return new Response('Not Found', { status: 404 });
  },
};
