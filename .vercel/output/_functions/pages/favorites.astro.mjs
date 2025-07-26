import { c as createComponent, e as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DHHhUw9b.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CdDy_X5B.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Favorites = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>some things I've found of interest on the world wide web</p> <p>articles</p> <p>these are not endorsements, just things I found interesting / thought-provoking</p> <ul> <li> <a href="https://balajis.com/p/americas-175-trillion-problem">America's $175 Trillion Problem
</a> </li> <li> <a href="https://stephango.com/remove">What Can We Remove</a> </li> <li> <a href="https://projects.kwon.nyc/internet-is-fun/">The Internet Use to Be Fun</a> </li> <li> <a href="https://paulgraham.com/talk.html">Write Like You Talk</a> </li>
</ul</ul>` })}`;
}, "/Users/cjdunteman/repos/cjdunteman.com/src/pages/favorites.astro", void 0);

const $$file = "/Users/cjdunteman/repos/cjdunteman.com/src/pages/favorites.astro";
const $$url = "/favorites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Favorites,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
