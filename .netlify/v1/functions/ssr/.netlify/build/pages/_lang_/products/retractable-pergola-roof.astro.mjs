import { g as getLangFromUrl, u as useTranslations } from '../../../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, k as renderScript, j as defineScriptVars, i as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/layout_IUZppg3b.mjs';
import { $ as $$Hero } from '../../../chunks/hero_BoyH551G.mjs';
/* empty css                                                          */
import { $ as $$Button } from '../../../chunks/button_wkzz6C9-.mjs';
import { $ as $$Somfy } from '../../../chunks/somfy_sPeqL7hD.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://artdecopergola.com");
function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "ru" } },
    { params: { lang: "az" } }
  ];
}
const $$RetractablePergolaRoof = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RetractablePergolaRoof;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n	window.pergolaTranslations = {\n		barTone: barToneDescText,\n		tenor: tenorDescText,\n		soprano: sopranoDescText,\n		alto: altoDescText\n	};\n})();<\/script> ", ""])), renderComponent($$result, "Layout", $$Layout, { "title": t("retractablePergolaRoof.title") }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": t("retractablePergolaRoof.heroTitle"), "description": [
    t("retractablePergolaRoof.heroDesc1"),
    t("retractablePergolaRoof.heroDesc2")
  ], "image": "/images/products/retractable-pergola-roofs.webp", "imageAlt": "Retractable Pergola Roof System", "buttonText": t("retractablePergolaRoof.orderNow"), "buttonHref": `/${lang}/contact`, "buttonVariant": "premium" })} ${maybeRenderHead()}<main> <!-- PERGOLA CONFIGURATOR SECTION --> <div class="main-container"> <!-- HEADER --> <header class="section-header"> <h1>${unescapeHTML(t("retractablePergolaRoof.sectionTitle"))}</h1> </header> <!-- SECTION 1: MODEL SELECTOR --> <section id="model-selector" class="model-selector-grid"> <!-- Injected via JS --> </section> <!-- SECTION 2: STRUCTURAL DETAILS --> <section id="structural-section" class="structural-section"> <div class="layout"> <!-- Left: Info & Components --> <div class="structural-info"> <h2 id="model-title">BARITONE</h2> <p id="model-desc" class="structural-desc"> ${t("retractablePergolaRoof.barToneDesc")} </p> <div id="component-list" class="grid-cards"> <!-- Component Cards Injected via JS --> </div> </div> <!-- Right: Diagram --> <div class="vis-container"> <div class="vis-frame"> <div class="vis-frame-img"> <img id="diagram-image" class="diagram-img" src="" alt="Technical Diagram"> <div id="marker-container" class="marker-layer"> <!-- Markers Injected via JS --> </div> </div> </div> </div> </div> </section> </div> <!-- SECTION 1: MECHANICAL DATA --> <section class="pergola-section mechanical-section"> <div class="col col-image"> <img src="/images/products/retractable-pergola-roof/details/membrane.webp" alt="Mechanical Detail" class="bg-image anim-fade-in"> </div> <div class="col col-text padding-right"> <a href="https://www.sergeferrari.com" class="serge-ferrari-logo"> <img src="/images/logos/serge-ferrari.svg" alt="Serge Ferrari Logo" class="logo-products"> <div class="item-block anim-fade-up delay-100"> <h3 class="item-title">${t("retractablePergolaRoof.durabilityTitle")}</h3> <p class="item-text"> ${t("retractablePergolaRoof.durabilityText")} </p> </div> <div class="item-block anim-fade-up delay-200"> <h3 class="item-title">${unescapeHTML(t("retractablePergolaRoof.soundAbsorptionTitle"))}</h3> ${t("retractablePergolaRoof.soundAbsorptionText")}  </div> <div class="item-block anim-fade-up delay-300"> <h3 class="item-title">${t("retractablePergolaRoof.aestheticTitle")}</h3> <p class="item-text"> ${t("retractablePergolaRoof.aestheticText")} </p> </div> <div class="item-block anim-fade-up delay-300"> <h3 class="item-title">${t("retractablePergolaRoof.sustainabilityTitle")}</h3> <p class="item-text"> ${t("retractablePergolaRoof.sustainabilityText")} </p> </div> ${renderComponent($$result2, "Button", $$Button, { "variant": "cta", "text": t("retractablePergolaRoof.orderNow"), "href": "#", "onclick": "event.preventDefault(); document.querySelector('footer').scrollIntoView({behavior: 'smooth', block: 'start'}); " })} </a></div> </section> <!-- SECTION 2: SOMFY --> ${renderComponent($$result2, "Somfy", $$Somfy, {})} <div class="main-container"> <!-- SECTION 3: COLOR OPTIONS --> <section class="color-options-section" id="color-options-component"> <div class="co-title-wrapper"> <h2 class="co-title"> <span>${t("retractablePergolaRoof.colorOptionsTitle")}</span> </h2> </div> <div class="co-desc-wrapper"> <p class="co-description"> ${t("retractablePergolaRoof.colorDesc")} </p> </div> <div class="co-swatches-wrapper"> <div id="swatch-list" class="co-swatches-container"></div> </div> <div class="co-btn-wrapper"> ${renderComponent($$result2, "Button", $$Button, { "variant": "premium", "text": t("retractablePergolaRoof.orderNow"), "href": `/${lang}/contact` })} </div> <div class="co-image-wrapper"> <div class="co-glow-container"> <img id="product-display" class="co-product-image" src="" alt="Pergola Color Visualization"> </div> </div> </section> </div> </main> ` }), defineScriptVars({
    barToneDescText: t("retractablePergolaRoof.barToneDesc"),
    tenorDescText: t("retractablePergolaRoof.tenorDesc"),
    sopranoDescText: t("retractablePergolaRoof.sopranoDesc"),
    altoDescText: t("retractablePergolaRoof.altoDesc")
  }), renderScript($$result, "/home/thevfxeye/artdeco/src/pages/[lang]/products/retractable-pergola-roof.astro?astro&type=script&index=0&lang.ts"));
}, "/home/thevfxeye/artdeco/src/pages/[lang]/products/retractable-pergola-roof.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/[lang]/products/retractable-pergola-roof.astro";
const $$url = "/[lang]/products/retractable-pergola-roof";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$RetractablePergolaRoof,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
