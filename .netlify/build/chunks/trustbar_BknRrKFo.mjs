import { c as createAstro, d as createComponent, r as renderTemplate, u as unescapeHTML, m as maybeRenderHead } from './astro/server_wM0AnVyo.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */
import { u as useTranslations } from './index_fDmi9p0u.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://artdecopergola.com");
const $$Trustbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Trustbar;
  const { locale = "en" } = Astro2.props;
  const t = useTranslations(locale);
  return renderTemplate(_a || (_a = __template(["", '<section class="stats-section"> <div class="container"> <!-- LEFT COLUMN --> <div class="stats-left"> <!-- 5000+ PROJECTS --> <div class="stat-block-stacked reveal-item delay-100"> <span class="stat-number-xl">5000+</span> <span class="stat-label-spaced">', '</span> </div> <!-- 15+ EXPERIENCE --> <div class="stat-block-inline reveal-item delay-200"> <span class="stat-number-l">15</span> <div class="stat-text-wrapper"> <span class="plus-sign-inline">+</span> <span class="stat-label-bold">', '</span> </div> </div> <!-- 8 OFFICES --> <div class="stat-block-inline reveal-item delay-300"> <span class="stat-number-l">8</span> <div class="stat-text-wrapper"> <span class="stat-label-bold" style="margin-left: 1rem;">', `</span> </div> </div> <div class="reveal-item delay-400"> <button class="quote-btn" onclick="event.preventDefault(); document.querySelector('footer').scrollIntoView({behavior: 'smooth', block: 'start'});">`, '</button> </div> </div> <!-- RIGHT COLUMN --> <div class="stats-right"> <h2 class="heading-right reveal-item delay-100">', '</h2> <div class="dots-wrapper reveal-item delay-200"> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> </div> <p class="description reveal-item delay-300">', '</p> <p class="description reveal-item delay-400">', "</p> </div> </div> </section> <script>\n  // Intersection Observer \u0434\u043B\u044F \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0438 \u0441\u043A\u0440\u043E\u043B\u043B\u0435\n  const revealItems = document.querySelectorAll('.reveal-item');\n  \n  const observer = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add('reveal-active');\n      }\n    });\n  }, { threshold: 0.1 });\n  \n  revealItems.forEach(item => observer.observe(item));\n<\/script>"])), maybeRenderHead(), t("trustBar.projects"), t("trustBar.experience"), t("trustBar.offices"), t("trustBar.getQuote"), unescapeHTML(t("trustBar.heading")), unescapeHTML(t("trustBar.description1")), unescapeHTML(t("trustBar.description2")));
}, "/home/thevfxeye/artdeco/src/components/trustbar.astro", void 0);

export { $$Trustbar as $ };
