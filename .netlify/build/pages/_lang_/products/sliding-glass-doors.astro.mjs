import { g as getLangFromUrl, u as useTranslations } from '../../../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/layout_IUZppg3b.mjs';
import { $ as $$Hero } from '../../../chunks/hero_BoyH551G.mjs';
import { $ as $$TechnicalInformation } from '../../../chunks/technical-information_ByimTQvc.mjs';
import { $ as $$Button } from '../../../chunks/button_wkzz6C9-.mjs';
import { $ as $$SafetyStrength } from '../../../chunks/safety-strength_wHmIkBsm.mjs';
import { $ as $$Coloroptions } from '../../../chunks/coloroptions_Dw9BajHA.mjs';
/* empty css                                                     */
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
const $$SlidingGlassDoors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SlidingGlassDoors;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const technicalData = {
    title: t("slidingGlassDoors.technicalTitle"),
    description: t("slidingGlassDoors.technicalDesc"),
    diagramUrl: "/images/products/sliding-glass-doors/RAL9016.webp",
    features: [
      {
        title: t("slidingGlassDoors.smoothSlidingTitle"),
        desc: t("slidingGlassDoors.smoothSlidingDesc")
      },
      {
        title: t("slidingGlassDoors.insulationTitle"),
        desc: t("slidingGlassDoors.insulationDesc")
      },
      {
        title: t("slidingGlassDoors.weatherResistantTitle"),
        desc: t("slidingGlassDoors.weatherResistantDesc")
      }
    ],
    components: [
      { id: 1, name: "Buttom Rail", img: "/images/products/sliding-glass-doors/details/bottom-rail.webp", x: 16, y: 72 },
      { id: 2, name: "Sash Stile", img: "/images/products/sliding-glass-doors/details/sash-stile.webp", x: 29, y: 72 },
      { id: 3, name: "Side Jamb", img: "/images/products/sliding-glass-doors/details/side-jamb.webp", x: 19, y: 32 }
    ]
  };
  const colorImagesMap = {
    "9016": "/images/products/sliding-glass-doors/RAL9016.webp",
    "1013": "/images/products/sliding-glass-doors/RAL1013.webp",
    "8014": "/images/products/sliding-glass-doors/RAL8014.webp",
    "8019": "/images/products/sliding-glass-doors/RAL8019.webp",
    "9005": "/images/products/sliding-glass-doors/RAL9005.webp",
    "7016": "/images/products/sliding-glass-doors/RAL7016.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("slidingGlassDoors.heroTitle") }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": t("slidingGlassDoors.heroTitle"), "description": [
    t("slidingGlassDoors.heroDesc1"),
    t("slidingGlassDoors.heroDesc2")
  ], "image": "/images/products/sliding-glass-doors.webp", "imageAlt": "Sliding Glass Doors System", "buttonText": t("slidingGlassDoors.orderNow"), "buttonHref": `/${lang}/contact`, "buttonVariant": "premium" })} ${maybeRenderHead()}<main> <!-- Technical Information Component --> ${renderComponent($$result2, "TechnicalInformation", $$TechnicalInformation, { "title": technicalData.title, "description": technicalData.description, "diagramUrl": technicalData.diagramUrl, "features": technicalData.features, "components": technicalData.components })} <!-- SECTION 2: MECHANICAL DATA (DUPLICATE) --> <section class="pergola-section mechanical-section"> <div class="mechanical-container"> <div class="col col-image"> <div class="image-frame"> <img src="/images/products/sliding-glass-doors/details/sliding-advantages.webp" alt="Window mechanisms detail"> </div> </div> <div class="col col-text"> <div class="content-wrapper"> <h1 class="main-title anim-fade-up">${t("slidingGlassDoors.advantagesTitle")}</h1> <div class="item-block anim-fade-up delay-100"> <h3 class="item-title">${t("slidingGlassDoors.spaceEfficiencyTitle")}</h3> <p class="item-text"> ${t("slidingGlassDoors.spaceEfficiencyDesc")} </p> </div> <div class="item-block anim-fade-up delay-200"> <h3 class="item-title">${t("slidingGlassDoors.easeOfAccessTitle")}</h3> <p class="item-text"> ${t("slidingGlassDoors.easeOfAccessDesc")} </p> </div> <div class="item-block anim-fade-up delay-300"> <h3 class="item-title">${t("slidingGlassDoors.naturalLightTitle")}</h3> <p class="item-text"> ${t("slidingGlassDoors.naturalLightDesc")} </p> </div> <div class="item-block anim-fade-up delay-300"> <h3 class="item-title">${t("slidingGlassDoors.aestheticAppealTitle")}</h3> <p class="item-text"> ${t("slidingGlassDoors.aestheticAppealDesc")} </p> </div> ${renderComponent($$result2, "Button", $$Button, { "variant": "cta", "text": t("slidingGlassDoors.orderNow"), "href": "#", "onclick": "event.preventDefault(); document.querySelector('footer').scrollIntoView({behavior: 'smooth', block: 'start'});" })} </div> </div> </div> </section> ${renderComponent($$result2, "SafetyStrength", $$SafetyStrength, {})} <!-- COLOR OPTIONS COMPONENT --> ${renderComponent($$result2, "ColorOptions", $$Coloroptions, { "images": colorImagesMap })}</main>` })}`;
}, "/home/thevfxeye/artdeco/src/pages/[lang]/products/sliding-glass-doors.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/[lang]/products/sliding-glass-doors.astro";
const $$url = "/[lang]/products/sliding-glass-doors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$SlidingGlassDoors,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
