import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, l as renderSlot, r as renderTemplate } from './astro/server_wM0AnVyo.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://artdecopergola.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "premium",
    href = "#",
    text,
    icon = true,
    class: customClass = "",
    ariaLabel,
    target,
    onclick
  } = Astro2.props;
  const variantClassMap = {
    premium: "btn-premium",
    cta: "cta-button",
    standard: "btn-standard",
    hero: "hero-button",
    "read-more": "read-more-btn",
    ideas: "btn-ideas"
  };
  const buttonClass = `${variantClassMap[variant]} ${customClass}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(buttonClass, "class")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(target, "target")}${addAttribute(onclick, "onclick")}> ${text && renderTemplate`<span>${text}</span>`} ${icon && variant === "premium" && renderTemplate`<div class="btn-icon-circle"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <line x1="7" y1="17" x2="17" y2="7"></line> <polyline points="7 7 17 7 17 17"></polyline> </svg> </div>`} ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/thevfxeye/artdeco/src/components/button.astro", void 0);

export { $$Button as $ };
