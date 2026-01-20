import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, k as renderScript, r as renderTemplate } from './astro/server_wM0AnVyo.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://artdecopergola.com");
const $$TechnicalInformation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TechnicalInformation;
  const {
    title = "Technical Information",
    description = "Discover the technical specifications and components of our systems.",
    diagramUrl = "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=1200&auto=format&fit=crop",
    features = [],
    components = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section-structural"> <div class="section-wrap"> <h1 class="tech-title">Technical Information</h1> <!-- Features --> <div class="feature-grid" id="feature-grid"> ${features.map((feature, idx) => renderTemplate`<div class="feature-box"${addAttribute(`--delay: ${idx % 3 + 1}`, "style")}> <div class="feature-header">${feature.title}</div> <p class="feature-text">${feature.desc}</p> </div>`)} </div> <div class="layout"> <!-- Info Panel --> <div class="info-panel"> <h3 id="panel-title">${title}</h3> <p class="info-desc" id="panel-desc"> ${description} </p> <div class="grid-cards" id="cards-grid"> ${components.map((component, idx) => renderTemplate`<div class="card"${addAttribute(component.id, "data-id")}${addAttribute(`--delay: ${idx % 2 + 1}`, "style")}> <div class="card-meta"> <div class="card-id">${component.id}</div> <div class="card-name">${component.name}</div> </div> <div class="card-img"> <img class="card-img-src"${addAttribute(component.img, "src")}${addAttribute(component.name, "alt")}> </div> </div>`)} </div> </div> <!-- Visualizer --> <div class="vis-container"> <div class="vis-frame"> <img id="main-diagram" class="vis-img"${addAttribute(diagramUrl, "src")} alt="Technical Diagram"> <div class="marker-layer" id="markers-layer"> ${components.map((component) => renderTemplate`<div class="marker"${addAttribute(component.id, "data-id")}${addAttribute(`left: ${component.x}%; top: ${component.y}%;`, "style")}> <div class="tooltip">${component.name}</div> </div>`)} </div> </div> </div> </div> </div> </section> ${renderScript($$result, "/home/thevfxeye/artdeco/src/components/technical-information.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/thevfxeye/artdeco/src/components/technical-information.astro", void 0);

export { $$TechnicalInformation as $ };
