import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

export const email = {
  send: defineAction({
    accept: 'form',
    input: z.object({
      msg: z.string().max(200),
    }),
    handler: async ({ msg }) => {
      if (!apiKey) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Email service is not configured.',
        });
      }

      const resend = new Resend(apiKey);
      
      const { data, error } = await resend.emails.send({
        from: 'Contact Form <contact@cjdunteman.com>',
        to: ['cj@cjdunteman.com'],
        subject: 'New Contact Form Submission',
        html: `<strong>Message:</strong><br>${msg.replace(/\n/g, '<br>')}`,
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