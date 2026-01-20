import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, k as renderScript, r as renderTemplate } from './astro/server_wM0AnVyo.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */
import { u as useTranslations } from './index_fDmi9p0u.mjs';

const $$Astro = createAstro("https://artdecopergola.com");
const $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Newsletter;
  const { locale = "en" } = Astro2.props;
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<section class="newsletter-section" id="newsletterRef"> <div class="newsletter__container"> <!-- Left Side: Pergola Image --> <div class="newsletter__left-spacer"> <img src="/images/hero/pergola-white.webp" alt="Pergola" class="newsletter__pergola-image"> </div> <!-- Right Side: Content Block --> <div class="newsletter__content"> <h2 class="newsletter__title">${t("newsletter.title")}</h2> <p class="newsletter__subtitle"> ${t("newsletter.subtitle")} </p> <form id="newsletterForm" class="newsletter__form"> <div class="newsletter__input-wrapper"> <input id="newsletterEmail" name="email" type="email" class="newsletter__input"${addAttribute(t("newsletter.emailPlaceholder"), "placeholder")} required${addAttribute(t("newsletter.emailLabel"), "aria-label")}> </div> <button type="submit" class="newsletter__btn"> <span>${t("newsletter.subscribe")}</span> </button> </form> <!-- Success overlay (shown after submit) --> <div class="newsletter__success-overlay" id="newsletterSuccess" role="status" aria-live="polite" aria-hidden="true"> <div class="newsletter__success-icon" aria-hidden="true">✓</div> <h3 class="newsletter__success-title">${t("newsletter.thankYouTitle")}</h3> <p class="newsletter__success-msg">${t("newsletter.thankYouMessage")}</p> <button type="button" class="newsletter__success-close" id="newsletterSuccessClose">Close</button> </div> </div> </div> </section> ${renderScript($$result, "/home/thevfxeye/artdeco/src/components/newsletter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/thevfxeye/artdeco/src/components/newsletter.astro", void 0);

export { $$Newsletter as $ };
