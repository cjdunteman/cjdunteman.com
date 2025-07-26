import { c as createComponent, e as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DHHhUw9b.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CdDy_X5B.mjs';
/* empty css                                 */
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="font-size: 24px; margin-bottom: 1.5rem; color: #111827; font-weight: 300;" data-astro-cid-j7pv25f6>
CJ Dunteman
</h1> <ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6> <a href="https://www.linkedin.com/in/cjdunteman" data-astro-cid-j7pv25f6><p data-astro-cid-j7pv25f6>linkedIn</p></a> </li> <li data-astro-cid-j7pv25f6> <a href="https://www.github.com/cjdunteman" data-astro-cid-j7pv25f6><p data-astro-cid-j7pv25f6>github</p></a> </li> <li data-astro-cid-j7pv25f6> <a href="mailto:hello@cjdunteman.com" data-astro-cid-j7pv25f6><p data-astro-cid-j7pv25f6>contact</p></a> </li> </ul> ` })} `;
}, "/Users/cjdunteman/repos/cjdunteman.com/src/pages/index.astro", void 0);

const $$file = "/Users/cjdunteman/repos/cjdunteman.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
