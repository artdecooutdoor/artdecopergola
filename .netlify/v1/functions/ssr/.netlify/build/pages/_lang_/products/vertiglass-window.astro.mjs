import { g as getLangFromUrl, u as useTranslations } from '../../../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent, i as renderComponent, k as renderScript, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/layout_IUZppg3b.mjs';
import { $ as $$Hero } from '../../../chunks/hero_BoyH551G.mjs';
import { $ as $$TechnicalInformation } from '../../../chunks/technical-information_ByimTQvc.mjs';
import { $ as $$Button } from '../../../chunks/button_wkzz6C9-.mjs';
import { $ as $$SafetyStrength } from '../../../chunks/safety-strength_wHmIkBsm.mjs';
import { $ as $$Coloroptions } from '../../../chunks/coloroptions_Dw9BajHA.mjs';
import { $ as $$Somfy } from '../../../chunks/somfy_sPeqL7hD.mjs';
/* empty css                                                   */
/* empty css                                                    */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://artdecopergola.com");
function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "ru" } },
    { params: { lang: "az" } }
  ];
}
const $$VertiglassWindow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VertiglassWindow;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const technicalData = {
    title: t("vertiglassWindow.technicalTitle"),
    description: t("vertiglassWindow.technicalDesc"),
    diagramUrl: "/images/products/vertiglass-window/RAL9016.webp",
    features: [
      {
        title: t("vertiglassWindow.doubleGlassTitle"),
        desc: t("vertiglassWindow.doubleGlassDesc")
      },
      {
        title: t("vertiglassWindow.remoteControlTitle"),
        desc: t("vertiglassWindow.remoteControlDesc")
      },
      {
        title: t("vertiglassWindow.movementOptionTitle"),
        desc: t("vertiglassWindow.movementOptionDesc")
      }
    ],
    components: [
      { id: 1, name: "Interpane brush", img: "/images/products/vertiglass-window/details/interpane-brush.webp", x: 14, y: 32 },
      { id: 2, name: "Drip edge", img: "/images/products/vertiglass-window/details/drip-edge.webp", x: 50, y: 36 },
      { id: 3, name: "Top brush", img: "/images/products/vertiglass-window/details/top-brush.webp", x: 14, y: 72 }
    ]
  };
  const colorImagesMap = {
    "9016": "/images/products/vertiglass-window/RAL9016.webp",
    "1013": "/images/products/vertiglass-window/RAL1013.webp",
    "8014": "/images/products/vertiglass-window/RAL8014.webp",
    "8019": "/images/products/vertiglass-window/RAL8019.webp",
    "9005": "/images/products/vertiglass-window/RAL9005.webp",
    "7016": "/images/products/vertiglass-window/RAL7016.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("vertiglassWindow.heroTitle") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- HERO SECTION --> ${renderComponent($$result2, "Hero", $$Hero, { "title": t("vertiglassWindow.heroTitle"), "description": [
    t("vertiglassWindow.heroDesc1"),
    t("vertiglassWindow.heroDesc2"),
    t("vertiglassWindow.heroDesc3")
  ], "image": "/images/products/vertiglass-window.webp", "imageAlt": "VertiGlass Window System showcase", "buttonText": t("vertiglassWindow.orderNow"), "buttonHref": `/${lang}/contact`, "buttonVariant": "premium" })} <!-- Technical Information Component --> ${renderComponent($$result2, "TechnicalInformation", $$TechnicalInformation, { "title": technicalData.title, "description": technicalData.description, "diagramUrl": technicalData.diagramUrl, "features": technicalData.features, "components": technicalData.components })} <!-- SECTION 2: MECHANICAL DATA (DUPLICATE) --> <section class="pergola-section mechanical-section"> <div class="mechanical-container"> <div class="col col-image"> <div class="image-frame"> <img src="/images/products/vertiglass-window/details/benefits-vertiglass-window.webp" alt="Window mechanisms detail"> </div> </div> <div class="col col-text"> <div class="content-wrapper"> <h1 class="main-title anim-fade-up">${unescapeHTML(t("vertiglassWindow.benefitsTitle"))}</h1> <div class="item-block anim-fade-up delay-100"> <h3 class="item-title">${t("vertiglassWindow.spaceEfficiencyTitle")}</h3> <p class="item-text"> ${t("vertiglassWindow.spaceEfficiencyDesc")} </p> </div> <div class="item-block anim-fade-up delay-200"> <h3 class="item-title">${t("vertiglassWindow.ventilationTitle")}</h3> <p class="item-text"> ${t("vertiglassWindow.ventilationDesc")} </p> </div> <div class="item-block anim-fade-up delay-300"> <h3 class="item-title">${t("vertiglassWindow.aestheticsTitle")}</h3> <p class="item-text"> ${t("vertiglassWindow.aestheticsDesc")} </p> </div> <div class="item-block anim-fade-up delay-300"> <h3 class="item-title">${t("vertiglassWindow.viewsTitle")}</h3> <p class="item-text"> ${t("vertiglassWindow.viewsDesc")} </p> </div> <div class="item-block anim-fade-up delay-300"> <h3 class="item-title">${t("vertiglassWindow.lockingSystemsTitle")}</h3> <p class="item-text"> ${t("vertiglassWindow.lockingSystemsDesc")} </p> </div> ${renderComponent($$result2, "Button", $$Button, { "variant": "cta", "text": t("vertiglassWindow.orderNow"), "href": "#", "onclick": "event.preventDefault(); document.querySelector('footer').scrollIntoView({behavior: 'smooth', block: 'start'});" })} </div> </div> </div> </section> ${renderComponent($$result2, "SafetyStrength", $$SafetyStrength, { "image": "/images/products/vertiglass-window/details/glass-options-one.webp", "imageAlt": "VertiGlass Glass Options" })} <!-- CHOOSE YOUR PROFILE SECTION --> <section class="models-section"> <div class="models-container"> <header class="models-header js-reveal"> <span class="models-eyebrow">${t("vertiglassWindow.profilesEyebrow")}</span> <h2 class="models-title">${t("vertiglassWindow.profilesTitle")}</h2> </header> <div class="models-grid"> <!-- 2 Panel --> <div class="models-card js-reveal" style="transition-delay: 0.1s;"> <div class="models-photo-frame"> <img src="/images/products/vertiglass-window/details/2-panel.webp" alt="2 Panel System"> </div> <div class="models-card-info"> <h3 class="models-card-title">${t("vertiglassWindow.panel2Title")}</h3> <p class="models-card-desc">${t("vertiglassWindow.panel2Desc")}</p> </div> </div> <!-- 3 Panel --> <div class="models-card js-reveal" style="transition-delay: 0.2s;"> <div class="models-photo-frame"> <img src="/images/products/vertiglass-window/details/3-panel.webp" alt="3 Panel System"> </div> <div class="models-card-info"> <h3 class="models-card-title">${t("vertiglassWindow.panel3Title")}</h3> <p class="models-card-desc">${t("vertiglassWindow.panel3Desc")}</p> </div> </div> <!-- 4 Panel --> <div class="models-card js-reveal" style="transition-delay: 0.3s;"> <div class="models-photo-frame"> <img src="/images/products/vertiglass-window/details/4-panel.webp" alt="4 Panel System"> </div> <div class="models-card-info"> <h3 class="models-card-title">${t("vertiglassWindow.panel4Title")}</h3> <p class="models-card-desc">${t("vertiglassWindow.panel4Desc")}</p> </div> </div> </div> <div class="models-bottom-panel js-reveal"> <div class="models-panel-content"> <h4>${t("vertiglassWindow.smartMotionTitle")}</h4> <p>${unescapeHTML(t("vertiglassWindow.smartMotionDesc"))}</p> </div> ${renderComponent($$result2, "Button", $$Button, { "variant": "cta", "text": t("vertiglassWindow.orderNow"), "href": "#", "onclick": "event.preventDefault(); document.querySelector('footer').scrollIntoView({behavior: 'smooth', block: 'start'}); " })} </div> </div> </section> <!-- SECTION 2: SOMFY --> ${renderComponent($$result2, "Somfy", $$Somfy, {})} <!-- COLOR OPTIONS COMPONENT --> ${renderComponent($$result2, "ColorOptions", $$Coloroptions, { "images": colorImagesMap })} </main> ` })} ${renderScript($$result, "/home/thevfxeye/artdeco/src/pages/[lang]/products/vertiglass-window.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/thevfxeye/artdeco/src/pages/[lang]/products/vertiglass-window.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/[lang]/products/vertiglass-window.astro";
const $$url = "/[lang]/products/vertiglass-window";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$VertiglassWindow,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
