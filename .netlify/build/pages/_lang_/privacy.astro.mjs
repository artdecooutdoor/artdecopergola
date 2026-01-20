import { g as getLangFromUrl, u as useTranslations } from '../../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/layout_IUZppg3b.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://artdecopergola.com");
async function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "ru" } },
    { params: { lang: "az" } }
  ];
}
const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacy;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("footer.privacyPolicy"), "description": "Privacy Policy for Art Deco", "data-astro-cid-hsq7wpoz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="privacy-page py-3xl" data-astro-cid-hsq7wpoz> <div class="container-narrow" data-astro-cid-hsq7wpoz> <h1 data-astro-cid-hsq7wpoz>${t("footer.privacyPolicy")}</h1> <div class="content" data-astro-cid-hsq7wpoz> <p data-astro-cid-hsq7wpoz>Last updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString(locale)}</p> <h2 data-astro-cid-hsq7wpoz>Information We Collect</h2> <p data-astro-cid-hsq7wpoz>We collect information that you provide directly to us through our contact forms and inquiries.</p> <h2 data-astro-cid-hsq7wpoz>How We Use Your Information</h2> <p data-astro-cid-hsq7wpoz>We use the information we collect to respond to your inquiries and provide you with information about our products and services.</p> <h2 data-astro-cid-hsq7wpoz>Contact Us</h2> <p data-astro-cid-hsq7wpoz>If you have any questions about this Privacy Policy, please contact us.</p> </div> </div> </section> ` })} `;
}, "/home/thevfxeye/artdeco/src/pages/[lang]/privacy.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/[lang]/privacy.astro";
const $$url = "/[lang]/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
