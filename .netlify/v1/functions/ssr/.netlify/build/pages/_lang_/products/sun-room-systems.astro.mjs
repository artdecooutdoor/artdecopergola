import { g as getLangFromUrl, u as useTranslations } from '../../../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent, i as renderComponent, k as renderScript, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/layout_IUZppg3b.mjs';
import { $ as $$Hero } from '../../../chunks/hero_BoyH551G.mjs';
import { $ as $$TechnicalInformation } from '../../../chunks/technical-information_ByimTQvc.mjs';
import { $ as $$Coloroptions } from '../../../chunks/coloroptions_Dw9BajHA.mjs';
import { $ as $$Button } from '../../../chunks/button_wkzz6C9-.mjs';
/* empty css                                                  */
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
const $$SunRoomSystems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SunRoomSystems;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const technicalData = {
    title: t("sunRoomSystems.technicalTitle"),
    description: t("sunRoomSystems.technicalDesc"),
    diagramUrl: "/images/products/sun-room-systems/RAL90162.webp",
    features: [
      {
        title: t("sunRoomSystems.heaterTitle"),
        desc: t("sunRoomSystems.heaterDesc")
      },
      {
        title: t("sunRoomSystems.fanTitle"),
        desc: t("sunRoomSystems.fanDesc")
      },
      {
        title: t("sunRoomSystems.lightTitle"),
        desc: t("sunRoomSystems.lightDesc")
      }
    ],
    components: [
      { id: 1, name: "Support Post", img: "/images/products/sun-room-systems/details/support-post.webp", x: 42, y: 48.5 },
      { id: 2, name: "Rafter Hub", img: "/images/products/sun-room-systems/details/rafter-hub.webp", x: 89, y: 37 },
      { id: 3, name: "Curved Eave", img: "/images/products/sun-room-systems/details/curved-eave-profile.webp", x: 24, y: 43.5 }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("sunRoomSystems.title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- HERO SECTION --> ${renderComponent($$result2, "Hero", $$Hero, { "title": t("sunRoomSystems.heroTitle"), "description": [
    t("sunRoomSystems.heroDesc1"),
    t("sunRoomSystems.heroDesc2")
  ], "image": "/images/products/sun-room-systems.webp", "imageAlt": "Sun Room Systems showcase", "buttonText": t("sunRoomSystems.orderNow"), "buttonHref": `/${lang}/contact`, "buttonVariant": "premium" })} <!-- Technical Information Component --> ${renderComponent($$result2, "TechnicalInformation", $$TechnicalInformation, { "title": technicalData.title, "description": technicalData.description, "diagramUrl": technicalData.diagramUrl, "features": technicalData.features, "components": technicalData.components })} <!-- IDEAS FOR YOUR SUN ROOM SECTION --> <section class="section-models" id="models-section"> <div class="section-wrap"> <div class="models-grid"> <!-- Left Column --> <div class="models-info" id="info-animate"> <h1 class="models-hero-title">${unescapeHTML(t("sunRoomSystems.ideasTitle"))}</h1> <div class="ideas-list"> <div class="idea-item"> <h3>${t("sunRoomSystems.idea1Title")}</h3> <p>${t("sunRoomSystems.idea1Desc")}</p> </div> <div class="idea-item"> <h3>${t("sunRoomSystems.idea2Title")}</h3> <p>${t("sunRoomSystems.idea2Desc")}</p> </div> <div class="idea-item"> <h3>${t("sunRoomSystems.idea3Title")}</h3> <p>${t("sunRoomSystems.idea3Desc")}</p> </div> <div class="idea-item"> <h3>${t("sunRoomSystems.idea4Title")}</h3> <p>${t("sunRoomSystems.idea4Desc")}</p> </div> <div class="idea-item"> <h3>${t("sunRoomSystems.idea5Title")}</h3> <p>${t("sunRoomSystems.idea5Desc")}</p> </div> </div> ${renderComponent($$result2, "Button", $$Button, { "variant": "cta", "text": t("sunRoomSystems.orderNow"), "href": "#", "onclick": "event.preventDefault(); document.querySelector('footer').scrollIntoView({behavior: 'smooth', block: 'start'}); " })} </div> <!-- Right Column --> <div class="models-visual" id="visual-animate"> <div class="visual-box"> <img src="/images/products/sun-room-systems/RAL90163.webp" alt="Sun Room Model Showcase"> </div> </div> </div> </div> </section> <!-- Color Options Component --> ${renderComponent($$result2, "ColorOptions", $$Coloroptions, { "images": {
    "9016": "/images/products/sun-room-systems/RAL9016.webp",
    "1013": "/images/products/sun-room-systems/RAL1013.webp",
    "8014": "/images/products/sun-room-systems/RAL8014.webp",
    "8019": "/images/products/sun-room-systems/RAL8019.webp",
    "9005": "/images/products/sun-room-systems/RAL9005.webp",
    "7016": "/images/products/sun-room-systems/RAL7016.webp"
  } })} </main> ` })} ${renderScript($$result, "/home/thevfxeye/artdeco/src/pages/[lang]/products/sun-room-systems.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/thevfxeye/artdeco/src/pages/[lang]/products/sun-room-systems.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/[lang]/products/sun-room-systems.astro";
const $$url = "/[lang]/products/sun-room-systems";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$SunRoomSystems,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
