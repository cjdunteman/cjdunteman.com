import { c as createComponent, r as renderHead, a as renderSlot, b as renderTemplate } from './astro/server_DHHhUw9b.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/src/styles/global.css"><title>CJ Dunteman</title>${renderHead()}</head> <body> <main style="max-width: 600px; margin: 0 auto; padding: 20px;"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/cjdunteman/repos/cjdunteman.com/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
