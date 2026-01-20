import { c as createAstro, d as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderComponent, f as addAttribute, k as renderScript, r as renderTemplate } from './astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Button } from './button_wkzz6C9-.mjs';
/* empty css                         */

const $$Astro = createAstro("https://artdecopergola.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title,
    description,
    image,
    imageAlt,
    buttonText = "Order Now",
    buttonHref = "#",
    buttonVariant = "premium"
  } = Astro2.props;
  const descriptionArray = Array.isArray(description) ? description : [description];
  return renderTemplate`${maybeRenderHead()}<section class="hero-view"> <div class="hero-container"> <div class="hero-grid"> <!-- Text Content Side --> <div class="hero-content" id="heroContent"> <h1 class="hero-title">${unescapeHTML(title)}</h1> <div class="hero-description"> ${descriptionArray.map((text) => renderTemplate`<p>${unescapeHTML(text)}</p>`)} </div> ${renderComponent($$result, "Button", $$Button, { "variant": buttonVariant, "text": buttonText, "href": buttonHref, "icon": buttonVariant === "premium" })} </div> <!-- Image Side --> <div class="hero-image-wrap" id="heroImage"> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} class="hero-main-img"> </div> </div> </div> </section> ${renderScript($$result, "/home/thevfxeye/artdeco/src/components/hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/thevfxeye/artdeco/src/components/hero.astro", void 0);

export { $$Hero as $ };
