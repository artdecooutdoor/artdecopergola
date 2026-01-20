import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, u as unescapeHTML, k as renderScript, r as renderTemplate } from './astro/server_wM0AnVyo.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                      */
import { g as getLangFromUrl, u as useTranslations } from './index_fDmi9p0u.mjs';

const $$Astro = createAstro("https://artdecopergola.com");
const $$SafetyStrength = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SafetyStrength;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const { image = "/images/products/lift-sliding-doors/details/glass-options.webp", imageAlt = "Premium Glass Solution" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="glass-section"> <div class="section-wrap"> <div class="glass-grid"> <div class="visual-side js-reveal"> <div class="main-image-wrapper"> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} class="glass-photo"> <div class="glass-label-badge">${t("safetyStrength.glassLabel")}</div> </div> </div> <div class="content-side js-reveal"> <div class="content-inner"> <span class="eyebrow">${t("safetyStrength.eyebrow")}</span> <h2 class="title">${t("safetyStrength.title")}</h2> <div class="accent-line"></div> <p class="lead-text">${unescapeHTML(t("safetyStrength.leadText"))}</p> <div class="features-stack"> <div class="feature-card"> <div class="icon-holder"> <!-- icon --> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 16.326c2.28.51 5.845.674 6 .674.155 0 3.72-.163 6-.674V7L12 4 6 7v9.326Z"></path> <path d="M12 8v5"></path> <path d="M10 10.5h4"></path> </svg> </div> <div class="feature-text"> <h3>${t("safetyStrength.temperedTitle")}</h3> <p>${t("safetyStrength.temperedDesc")}</p> </div> </div> <div class="feature-card"> <div class="icon-holder"> <!-- icon --> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4"></path> </svg> </div> <div class="feature-text"> <h3>${t("safetyStrength.securityTitle")}</h3> <p>${t("safetyStrength.securityDesc")}</p> </div> </div> </div> <div class="action-row"> <a href="#" onclick="event.preventDefault(); document.querySelector('footer').scrollIntoView({behavior: 'smooth', block: 'start'}); " class="cta-button primary">${t("safetyStrength.learnMore")}</a> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "/home/thevfxeye/artdeco/src/components/safety-strength.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/thevfxeye/artdeco/src/components/safety-strength.astro", void 0);

export { $$SafetyStrength as $ };
