import { g as getLangFromUrl, u as useTranslations } from '../../../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/layout_IUZppg3b.mjs';
import { $ as $$TechnicalInformation } from '../../../chunks/technical-information_ByimTQvc.mjs';
import { $ as $$Hero } from '../../../chunks/hero_BoyH551G.mjs';
import { $ as $$Button } from '../../../chunks/button_wkzz6C9-.mjs';
import { $ as $$SafetyStrength } from '../../../chunks/safety-strength_wHmIkBsm.mjs';
import { $ as $$Coloroptions } from '../../../chunks/coloroptions_Dw9BajHA.mjs';
/* empty css                                                    */
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
const $$LiftSlidingDoors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LiftSlidingDoors;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const technicalData = {
    title: t("liftSlidingDoors.technicalTitle"),
    description: t("liftSlidingDoors.technicalDesc"),
    diagramUrl: "/images/products/lift-sliding-doors/RAL9016.webp",
    features: [
      {
        title: t("liftSlidingDoors.doubleGlassTitle"),
        desc: t("liftSlidingDoors.doubleGlassDesc")
      },
      {
        title: t("liftSlidingDoors.railTitle"),
        desc: t("liftSlidingDoors.railDesc")
      },
      {
        title: t("liftSlidingDoors.heatInsulatedTitle"),
        desc: t("liftSlidingDoors.heatInsulatedDesc")
      }
    ],
    components: [
      { id: 1, name: "Tempered Glass", img: "/images/products/lift-sliding-doors/details/tempered-glass.webp", x: 35, y: 45 },
      { id: 2, name: "Bottom Track", img: "/images/products/lift-sliding-doors/details/bottom-track.webp", x: 15, y: 71 },
      { id: 3, name: "Pull Handle", img: "/images/products/lift-sliding-doors/details/d-pull-handle.webp", x: 13, y: 52 },
      { id: 4, name: "Gearbox Lock", img: "/images/products/lift-sliding-doors/details/gearbox-lock.webp", x: 90.5, y: 48 }
    ]
  };
  const colorImagesMap = {
    "9016": "/images/products/lift-sliding-doors/RAL9016.webp",
    "1013": "/images/products/lift-sliding-doors/RAL1013.webp",
    "8014": "/images/products/lift-sliding-doors/RAL8014.webp",
    "8019": "/images/products/lift-sliding-doors/RAL8019.webp",
    "9005": "/images/products/lift-sliding-doors/RAL9005.webp",
    "7016": "/images/products/lift-sliding-doors/RAL7016.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("liftSlidingDoors.title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- HERO SECTION --> ${renderComponent($$result2, "Hero", $$Hero, { "title": t("liftSlidingDoors.heroTitle"), "description": [
    t("liftSlidingDoors.heroDesc1"),
    t("liftSlidingDoors.heroDesc2"),
    t("liftSlidingDoors.heroDesc3")
  ], "image": "/images/products/lift-sliding-doors.webp", "imageAlt": "Lift & Sliding Doors System", "buttonText": t("liftSlidingDoors.orderNow"), "buttonHref": `/${lang}/contact`, "buttonVariant": "premium" })} <!-- Technical Information Component --> ${renderComponent($$result2, "TechnicalInformation", $$TechnicalInformation, { "title": technicalData.title, "description": technicalData.description, "diagramUrl": technicalData.diagramUrl, "features": technicalData.features, "components": technicalData.components })} <!-- SECTION 1: MECHANICAL DATA --> <section class="pergola-section mechanical-section"> <div class="section-content"> <div class="col col-image"> <div class="image-container"> <img src="/images/products/lift-sliding-doors/details/door-profiles.webp" alt="Door profiles detail" class="bg-image anim-fade-in"> </div> </div> <div class="col col-text padding-right"> <a href="https://www.cuhadaroglualuminyum.com.tr" class="cuhadaroglu-logo"> <img src="/images/logos/cuhadaroglu.svg" alt="Cuhadaroglu Logo" class="logo-products"> </a> <div class="item-block anim-fade-up delay-100"> <h3 class="item-title">${t("liftSlidingDoors.durabilityTitle")}</h3> <p class="item-text"> ${t("liftSlidingDoors.durabilityDesc")} </p> </div> <div class="item-block anim-fade-up delay-200"> <h3 class="item-title">${unescapeHTML(t("liftSlidingDoors.aestheticTitle"))}</h3> <p class="item-text"> ${t("liftSlidingDoors.aestheticDesc")} </p> </div> <div class="item-block anim-fade-up delay-300"> <h3 class="item-title">${t("liftSlidingDoors.sustainabilityTitle")}</h3> <p class="item-text"> ${t("liftSlidingDoors.sustainabilityDesc")} </p> </div> ${renderComponent($$result2, "Button", $$Button, { "variant": "cta", "text": t("liftSlidingDoors.orderNow"), "href": "#", "onclick": "event.preventDefault(); document.querySelector('footer').scrollIntoView({behavior: 'smooth', block: 'start'}); " })} </div> </div></section> ${renderComponent($$result2, "SafetyStrength", $$SafetyStrength, {})} <!-- SECTION 2: MECHANICAL DATA (DUPLICATE) --> <section class="pergola-section mechanical-section"> <div class="section-content"> <div class="col col-image"> <div class="image-container"> <img src="/images/products/lift-sliding-doors/details/accessories-siegenia.webp" alt="Mechanical Detail" class="bg-image anim-fade-in"> </div> </div> <div class="col col-text padding-right"> <a href="https://shop.siegenia.com/siegenia/en/" class="siegenia-logo"> <img src="/images/logos/siegenia.svg" alt="Siegenia Logo" class="logo-products"> </a> <div class="item-block anim-fade-up delay-100"> <h3 class="item-title">${t("liftSlidingDoors.slidingMechTitle")}</h3> <p class="item-text"> ${t("liftSlidingDoors.slidingMechDesc")} </p> </div> <div class="item-block anim-fade-up delay-200"> <h3 class="item-title">${t("liftSlidingDoors.handlesTitle")}</h3> <p class="item-text"> ${t("liftSlidingDoors.handlesDesc")} </p> </div> <div class="item-block anim-fade-up delay-300"> <h3 class="item-title">${unescapeHTML(t("liftSlidingDoors.aestheticTitle"))}</h3> <p class="item-text"> ${t("liftSlidingDoors.aestheticDesc")} </p> </div> <div class="item-block anim-fade-up delay-300"> <h3 class="item-title">${t("liftSlidingDoors.lockingTitle")}</h3> <p class="item-text"> ${t("liftSlidingDoors.lockingDesc")} </p> </div> ${renderComponent($$result2, "Button", $$Button, { "variant": "cta", "text": t("liftSlidingDoors.orderNow"), "href": "#", "onclick": "event.preventDefault(); document.querySelector('footer').scrollIntoView({behavior: 'smooth', block: 'start'}); " })} </div> </div> </section> <!-- COLOR OPTIONS COMPONENT --> ${renderComponent($$result2, "ColorOptions", $$Coloroptions, { "images": colorImagesMap })} </main> ` })}`;
}, "/home/thevfxeye/artdeco/src/pages/[lang]/products/lift-sliding-doors.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/[lang]/products/lift-sliding-doors.astro";
const $$url = "/[lang]/products/lift-sliding-doors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$LiftSlidingDoors,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
