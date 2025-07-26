import './chunks/_astro_actions_aIhYRNOw.mjs';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_D3SJGLRc.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_tAUPlBNB.mjs';

const resend = new Resend("re_ExJPeGWU_JYWUPKLY9PATwp16KduTHoNX");
const server = {
  send: defineAction({
    accept: "form",
    handler: async () => {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["cjdunteman@gmail.com"],
        subject: "Hello world",
        html: "<strong>It works!</strong>"
      });
      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message
        });
      }
      return data;
    }
  })
};

export { server };
