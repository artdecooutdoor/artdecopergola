import { g as getLangFromUrl, u as useTranslations } from '../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/layout_IUZppg3b.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://artdecopergola.com");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found", "description": "The page you're looking for doesn't exist", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="error-page" data-astro-cid-zetdm5md> <div class="container" data-astro-cid-zetdm5md> <div class="error-content" data-astro-cid-zetdm5md> <h1 class="error-title" data-astro-cid-zetdm5md>404</h1> <h2 class="error-subtitle" data-astro-cid-zetdm5md>${t("common.notFound")}</h2> <p class="error-description" data-astro-cid-zetdm5md>
The page you're looking for doesn't exist or has been moved.
</p> <a href="/" class="btn btn-primary btn-lg" data-astro-cid-zetdm5md> ${t("common.goHome")} </a> </div> </div> </section> ` })} `;
}, "/home/thevfxeye/artdeco/src/pages/404.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
