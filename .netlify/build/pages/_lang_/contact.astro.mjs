import { g as getLangFromUrl, u as useTranslations } from '../../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, j as defineScriptVars, f as addAttribute, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/layout_IUZppg3b.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://artdecopergola.com");
async function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "ru" } },
    { params: { lang: "az" } }
  ];
}
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("contact.title"), "description": t("contact.subtitle") }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="master-container"> <header class="page-header"> <span class="pre-title">', '</span> <h1 class="main-title">', '</h1> </header> <div class="nav-tabs-container"> <nav class="nav-tabs" id="navTabs"> <button class="nav-tab active" data-city="baku">', '</button> <button class="nav-tab" data-city="washington">', '</button> <button class="nav-tab" data-city="toronto">', '</button> <button class="nav-tab" data-city="ankara">', '</button> </nav> </div> <section class="showroom-card" id="card"> <!-- Success Modal --> <div class="success-overlay" id="successOverlay" role="status" aria-live="polite"> <div class="success-icon-wrap"> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> </div> <h2 style="font-weight: 900; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 1px;">', '</h2> <p style="opacity: 0.6; max-width: 300px; font-size: 15px; line-height: 1.6;" id="successMessage"></p> <button id="closeSuccessBtn" onclick="closeSuccess()" class="submit-btn" style="width: auto; padding: 16px 45px; margin-top: 30px;">', '</button> </div> <!-- Left: Visual Side --> <section class="pane-visual" id="paneVisual"> <img id="cityImg" class="city-bg" src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1600&auto=format&fit=crop" alt="Baku"> <div class="visual-content"> <span class="city-label">', '</span> <h2 class="city-name" id="dispCity">', '</h2> <div class="info-row"> <span class="row-label">', '</span> <p class="row-value" id="dispAddr">', '</p> </div> <div class="info-row"> <span class="row-label">', '</span> <p class="row-value" id="dispHours">', '</p> </div> <div class="info-row"> <span class="row-label">', '</span> <p class="row-value" style="font-weight: 800; font-size: 1.2em;" id="dispPhone">', '</p> <p class="row-value" style="opacity: 0.7; font-size: 0.9em;" id="dispEmail">', '</p> </div> </div> </section> <!-- Right: Form Side --> <section class="pane-form"> <div class="form-header"> <h3>', "</h3> <p>", '</p> </div> <form id="contactForm"> <div class="form-grid"> <div class="field"> <span class="field-label">', '</span> <input type="text" name="firstName" id="fname" class="input-box"', ' required> </div> <div class="field"> <span class="field-label">', '</span> <input type="text" name="lastName" id="lname" class="input-box"', ' required> </div> <div class="field full"> <span class="field-label">', '</span> <input type="tel" name="phone" id="phone" class="input-box"', ' required> </div> <div class="field full"> <span class="field-label">', '</span> <input type="email" name="email" id="email" class="input-box"', ' required> </div> <div class="field full"> <span class="field-label">', '</span> <textarea name="message" id="message" class="input-box" style="min-height: 100px; resize: none; border-radius: 20px;"', ' required></textarea> </div> <div class="field full" style="display: none;"> <input type="hidden" name="city" id="cityHidden" value="baku"> </div> </div> <button type="submit" class="submit-btn"> ', ' <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </button> </form> </section> <script src="/scripts/contact.js" defer><\/script> </section> </div>  <script>(function(){', "\n		window.contactTranslations = translations;\n	})();<\/script>"])), maybeRenderHead(), t("contact.globalNetwork"), t("contact.showroomsTitle"), t("contact.cityBaku"), t("contact.cityWashington"), t("contact.cityToronto"), t("contact.cityAnkara"), t("contact.messageSent"), t("contact.close"), t("contact.globalFlagship"), t("contact.bakuOffice"), t("contact.addressLabel"), unescapeHTML(t("contact.bakuAddress")), t("contact.workingHoursLabel"), unescapeHTML(t("contact.workingHours")), t("contact.directContactLabel"), t("contact.bakuPhone"), t("contact.emailAddress"), t("contact.quickInquiry"), t("contact.inquirySubtitle"), t("contact.firstName"), addAttribute(t("contact.firstName"), "placeholder"), t("contact.lastName"), addAttribute(t("contact.lastName"), "placeholder"), t("contact.contactPhone"), addAttribute(t("contact.phonePlaceholder"), "placeholder"), t("contact.email"), addAttribute(t("contact.emailPlaceholder"), "placeholder"), t("contact.message"), addAttribute(t("contact.messagePlaceholder"), "placeholder"), t("contact.sendMessage"), defineScriptVars({
    translations: {
      baku: {
        office: t("contact.bakuOffice"),
        flagship: t("contact.globalFlagship"),
        address: t("contact.bakuAddress"),
        hours: t("contact.workingHours"),
        phone: t("contact.bakuPhone"),
        email: t("contact.emailAddress"),
        cityName: t("contact.cityBaku"),
        image: "/images/backgrounds/baku.webp"
      },
      washington: {
        office: t("contact.washingtonOffice"),
        flagship: t("contact.globalFlagship"),
        address: t("contact.washingtonAddress"),
        hours: t("contact.workingHours"),
        phone: t("contact.washingtonPhone"),
        email: t("contact.emailAddress"),
        cityName: t("contact.cityWashington"),
        image: "/images/backgrounds/washington.webp"
      },
      toronto: {
        office: t("contact.torontoOffice"),
        flagship: t("contact.globalFlagship"),
        address: t("contact.torontoAddress"),
        hours: t("contact.workingHours"),
        phone: t("contact.torontoPhone"),
        email: t("contact.emailAddress"),
        cityName: t("contact.cityToronto"),
        image: "/images/backgrounds/toronto.webp"
      },
      ankara: {
        office: t("contact.ankaraOffice"),
        flagship: t("contact.globalFlagship"),
        address: t("contact.ankaraAddress"),
        hours: t("contact.workingHours"),
        phone: t("contact.ankaraPhone"),
        email: t("contact.emailAddress"),
        cityName: t("contact.cityAnkara"),
        image: "/images/backgrounds/ankara.webp"
      },
      successMessage: t("contact.successMessage")
    }
  })) })}`;
}, "/home/thevfxeye/artdeco/src/pages/[lang]/contact.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/[lang]/contact.astro";
const $$url = "/[lang]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
