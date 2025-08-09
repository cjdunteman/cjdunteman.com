import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const email = {
  send: defineAction({
    accept: 'form',
    input: z.object({
      msg: z.string().max(200),
    }),
    handler: async ( msg ) => {
      const { data, error } = await resend.emails.send({
        from: 'Contact Form <contact@cjdunteman.com>',
        to: ['cj@cjdunteman.com'],
        subject: 'New Contact Form Submission',
        html: `<strong>Message:</strong><br>${msg}`,
      })

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),
};