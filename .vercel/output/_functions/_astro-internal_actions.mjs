import './chunks/_astro_actions_DjRt0y17.mjs';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_w8eVhhbB.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_Km9BVrgr.mjs';

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
