import { c as createComponent, r as renderScript, a as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CLoCg8_I.mjs';
import 'kleur/colors';
import { a as actions } from '../chunks/_astro_actions_DjRt0y17.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CRjL1WgM.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/cjdunteman/repos/cjdunteman.com/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form${addAttribute(actions.send, "action")} method="POST" style="display: flex; flex-direction: column; gap: 1rem;"> <textarea id="msg" required placeholder="your message..." minlength="10" maxlength="500" rows="4" style="font-size: 16px; border: none; outline: none; caret-color: #6a6a6a; color: #6a6a6a; font-style: italic; font-weight: 200;"></textarea> <button type="submit" style="color: #6a6a6a; font-size: 1rem; font-weight: 200; padding: 0.3rem; width: auto; align-self: flex-end; border: none; background: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
send email
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> </button> </form> ` })}`;
}, "/Users/cjdunteman/repos/cjdunteman.com/src/pages/contact.astro", void 0);

const $$file = "/Users/cjdunteman/repos/cjdunteman.com/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
