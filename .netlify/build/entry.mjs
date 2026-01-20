import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_B0Zi-QOG.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/debug-projects.json.astro.mjs');
const _page4 = () => import('./pages/api/projects.json.astro.mjs');
const _page5 = () => import('./pages/api/sendemail.json.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/dealer.astro.mjs');
const _page8 = () => import('./pages/privacy.astro.mjs');
const _page9 = () => import('./pages/products.astro.mjs');
const _page10 = () => import('./pages/projects.astro.mjs');
const _page11 = () => import('./pages/_lang_/about.astro.mjs');
const _page12 = () => import('./pages/_lang_/contact.astro.mjs');
const _page13 = () => import('./pages/_lang_/dealer.astro.mjs');
const _page14 = () => import('./pages/_lang_/privacy.astro.mjs');
const _page15 = () => import('./pages/_lang_/products/lift-sliding-doors.astro.mjs');
const _page16 = () => import('./pages/_lang_/products/retractable-louvered-roof.astro.mjs');
const _page17 = () => import('./pages/_lang_/products/retractable-pergola-roof.astro.mjs');
const _page18 = () => import('./pages/_lang_/products/sliding-glass-doors.astro.mjs');
const _page19 = () => import('./pages/_lang_/products/sun-room-systems.astro.mjs');
const _page20 = () => import('./pages/_lang_/products/vertiglass-window.astro.mjs');
const _page21 = () => import('./pages/_lang_/products.astro.mjs');
const _page22 = () => import('./pages/_lang_/projects.astro.mjs');
const _page23 = () => import('./pages/_lang_.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/debug-projects.json.ts", _page3],
    ["src/pages/api/projects.json.ts", _page4],
    ["src/pages/api/sendemail.json.ts", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/dealer.astro", _page7],
    ["src/pages/privacy.astro", _page8],
    ["src/pages/products.astro", _page9],
    ["src/pages/projects.astro", _page10],
    ["src/pages/[lang]/about.astro", _page11],
    ["src/pages/[lang]/contact.astro", _page12],
    ["src/pages/[lang]/dealer.astro", _page13],
    ["src/pages/[lang]/privacy.astro", _page14],
    ["src/pages/[lang]/products/lift-sliding-doors.astro", _page15],
    ["src/pages/[lang]/products/retractable-louvered-roof.astro", _page16],
    ["src/pages/[lang]/products/retractable-pergola-roof.astro", _page17],
    ["src/pages/[lang]/products/sliding-glass-doors.astro", _page18],
    ["src/pages/[lang]/products/sun-room-systems.astro", _page19],
    ["src/pages/[lang]/products/vertiglass-window.astro", _page20],
    ["src/pages/[lang]/products.astro", _page21],
    ["src/pages/[lang]/projects.astro", _page22],
    ["src/pages/[lang]/index.astro", _page23],
    ["src/pages/index.astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "af8061bc-04db-4f74-b66c-5185f9082621"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
