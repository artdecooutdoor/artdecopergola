import { d as defaultLang } from '../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent } from '../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://artdecopergola.com");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return Astro2.redirect(`/${defaultLang}/projects`);
}, "/home/thevfxeye/artdeco/src/pages/projects.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
