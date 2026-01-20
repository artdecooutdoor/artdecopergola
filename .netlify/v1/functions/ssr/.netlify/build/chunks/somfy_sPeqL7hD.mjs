import { c as createAstro, d as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderComponent, r as renderTemplate } from './astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Button } from './button_wkzz6C9-.mjs';
import { g as getLangFromUrl, u as useTranslations } from './index_fDmi9p0u.mjs';
/* empty css                                             */

const $$Astro = createAstro("https://artdecopergola.com");
const $$Somfy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Somfy;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`<!-- SECTION 2: SOMFY -->${maybeRenderHead()}<section class="pergola-section somfy-section reverse-mobile"> <div class="col col-text padding-left"> <a href="https://www.somfy.com" class="somfy-logo"> <img src="/images/logos/somfy.svg" alt="Somfy Logo" class="logo-products"> </a> <h4 class="sub-header anim-fade-up delay-100">${t("somfy.title")}</h4> <p class="somfy-intro anim-fade-up delay-200"> ${t("somfy.intro")} </p> <div class="list-container"> <div class="list-item anim-fade-up delay-300"> <span class="list-num">1.</span> <p class="list-text">${unescapeHTML(t("somfy.item1Text"))}</p> </div> <div class="list-item anim-fade-up delay-400"> <span class="list-num">2.</span> <p class="list-text">${unescapeHTML(t("somfy.item2Text"))}</p> </div> </div> ${renderComponent($$result, "Button", $$Button, { "variant": "cta", "text": t("somfy.buttonText"), "href": "#", "onclick": "event.preventDefault(); document.querySelector('footer').scrollIntoView({behavior: 'smooth', block: 'start'}); " })} </div> <div class="col col-image"> <img src="/images/products/pergola-details/somfy.webp" alt="Smart Home Pergola" class="bg-image anim-fade-in"> <!-- Floating Cards --> <div class="cards-wrapper"> <!-- Card 1 --> <div class="sensor-card anim-float delay-card-1"> <div class="card-left"> <div class="card-badge">1</div> <div class="card-label"> <span class="card-label-text">EOLIS</span> <span class="card-label-text">RTS</span> </div> </div> <div class="card-image-box"> <img src="/images/products/pergola-details/eolis-rts.webp" alt="EOLIS RTS" class="card-icon"> </div> </div> <!-- Card 2 --> <div class="sensor-card anim-float delay-card-2"> <div class="card-left"> <div class="card-badge">2</div> <div class="card-label"> <span class="card-label-text">SOMFY</span> <span class="card-label-text">RTS</span> </div> </div> <div class="card-image-box"> <img src="/images/products/pergola-details/somfy-rts.webp" alt="SOMFY RTS" class="card-icon"> </div> </div> </div> </div> </section>`;
}, "/home/thevfxeye/artdeco/src/components/somfy.astro", void 0);

export { $$Somfy as $ };
