import { g as getLangFromUrl, u as useTranslations } from '../../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent, i as renderComponent, k as renderScript, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/layout_IUZppg3b.mjs';
import { $ as $$Button } from '../../chunks/button_wkzz6C9-.mjs';
import { $ as $$Newsletter } from '../../chunks/newsletter_CJlPYGj-.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://artdecopergola.com");
async function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "ru" } },
    { params: { lang: "az" } }
  ];
}
const $$Dealer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dealer;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("dealer.title"), "description": t("dealer.subtitle") }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="dealer-section"> <div class="container"> <!-- TEXT BLOCK (LEFT) --> <div class="content-side"> <h1 class="dealer-title">${t("dealer.title")}</h1> <div class="dealer-description"> <p>${t("dealer.subtitle")}</p> <p>${t("dealer.ctaText")}</p> <p class="cta-line">${t("dealer.ctaLine")}</p> </div> ${renderComponent($$result2, "Button", $$Button, { "variant": "cta", "text": t("dealer.requestBtn"), "href": "#partnership-section" })} </div> <!-- IMAGE (IN FRAME) --> <div class="image-side"> <div class="photo-frame"> <img src="/images/hero/dealer.webp" alt="Business Partnership"> </div> </div> </div> </section>  <section class="advantages-section"> <div class="advantages-container"> <h2 class="advantages-title">${t("dealer.advantagesTitle")}</h2> <div class="advantages-grid"> <!-- CARD 1 --> <div class="advantage-card"> <div class="card-header"> <h3>${t("dealer.advantage1Title")}</h3> </div> <div class="card-body"> <p>${t("dealer.advantage1Desc")}</p> </div> </div> <!-- CARD 2 --> <div class="advantage-card"> <div class="card-header"> <h3>${t("dealer.advantage2Title")}</h3> </div> <div class="card-body"> <p>${t("dealer.advantage2Desc")}</p> </div> </div> <!-- CARD 3 --> <div class="advantage-card"> <div class="card-header"> <h3>${t("dealer.advantage3Title")}</h3> </div> <div class="card-body"> <p>${t("dealer.advantage3Desc")}</p> </div> </div> <!-- CARD 4 --> <div class="advantage-card"> <div class="card-header"> <h3>${t("dealer.advantage4Title")}</h3> </div> <div class="card-body"> <p>${t("dealer.advantage4Desc")}</p> </div> </div> </div> </div> </section>  <section class="partnership-section" id="partnership-section"> <div class="partnership-wrapper"> <header class="partnership-header" id="appHeader"> <span class="pre-title">${t("dealer.partnerPreTitle")}</span> <h2 class="partnership-title">${t("dealer.partnerTitle")}</h2> <p class="partnership-subtitle"> ${t("dealer.partnerSubtitle")} </p> </header> <div class="form-card" id="formCard"> <!-- Success Message Overlay --> <div class="success-overlay" id="successOverlay"> <div class="success-icon"> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> </div> <h2 class="success-title">${t("dealer.successTitle")}</h2> <p class="success-msg">${t("dealer.successMsg")}</p> </div> <span class="section-label">${t("dealer.profileLabel")}</span> <form id="partnerForm" class="partnership-form"> <div class="form-grid"> <!-- NAME --> <div class="input-container col-3"> <input type="text" id="firstName" name="firstName" class="floating-input"${addAttribute(t("dealer.firstName"), "placeholder")} required> <label for="firstName" class="input-label">${t("dealer.firstName")}</label> </div> <div class="input-container col-3"> <input type="text" id="lastName" name="lastName" class="floating-input"${addAttribute(t("dealer.lastName"), "placeholder")} required> <label for="lastName" class="input-label">${t("dealer.lastName")}</label> </div> <!-- CONTACTS --> <div class="input-container col-3"> <input type="tel" id="phone" name="phone" class="floating-input"${addAttribute(t("dealer.phone"), "placeholder")} required> <label for="phone" class="input-label">${t("dealer.phone")}</label> </div> <div class="input-container col-3"> <input type="email" id="email" name="email" class="floating-input"${addAttribute(t("dealer.email"), "placeholder")} required> <label for="email" class="input-label">${t("dealer.email")}</label> </div> <!-- LOCATION --> <div class="input-container col-2"> <input type="text" id="country" name="country" class="floating-input"${addAttribute(t("dealer.country"), "placeholder")} required> <label for="country" class="input-label">${t("dealer.country")}</label> </div> <div class="input-container col-2"> <input type="text" id="city" name="city" class="floating-input"${addAttribute(t("dealer.city"), "placeholder")} required> <label for="city" class="input-label">${t("dealer.city")}</label> </div> <div class="input-container col-2"> <input type="text" id="postal" name="postal" class="floating-input"${addAttribute(t("dealer.postal"), "placeholder")}> <label for="postal" class="input-label">${t("dealer.postal")}</label> </div> <!-- ORGANIZATION --> <div class="input-container col-3"> <input type="text" id="companyName" name="companyName" class="floating-input"${addAttribute(t("dealer.company"), "placeholder")}> <label for="companyName" class="input-label">${t("dealer.company")}</label> </div> <div class="input-container col-3"> <input type="url" id="website" name="website" class="floating-input"${addAttribute(t("dealer.website"), "placeholder")}> <label for="website" class="input-label">${t("dealer.website")}</label> </div> </div> <div class="form-footer"> <p class="legal-text">${t("dealer.legalText")}</p> <button type="submit" class="submit-button"> ${t("dealer.submitBtn")} <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </button> </div> </form> </div> </div> </section>  ${renderComponent($$result2, "Newsletter", $$Newsletter, { "locale": locale })} ` })} ${renderScript($$result, "/home/thevfxeye/artdeco/src/pages/[lang]/dealer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/thevfxeye/artdeco/src/pages/[lang]/dealer.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/[lang]/dealer.astro";
const $$url = "/[lang]/dealer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dealer,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
