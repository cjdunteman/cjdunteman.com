---
title: How I Built This Website and Lessons Learned
date: 2022-05-14
description: An overly detailed documentation of how I built this website, including everything I learned during the process.
---

I recognize the stack I used for this website may be considered "overengineering". This could all be done with HTML, CSS, and JavaScript. The reason for this is I wanted to try out and practice these technologies!

This post is continually being updated as I learn and build this website.

The main stack consists of:

# The Stack

- Framework: [Next.js](https://nextjs.org/)
- Styling: [TailwindCSS](https://tailwindcss.com/)
- Hosting: [Vercel](https://vercel.com/)
- Authentication: [NextAuth.js](https://next-auth.js.org/)
- Database: [PlanetScale](https://planetscale.com/)
- Testing: [Cypress](https://www.cypress.io/)

## Styling

I am using Tailwind to set up a mini design system in the config file.

The [Typography](https://tailwindcss.com/docs/typography-plugin) plugin allows me to add styling to HTML rendered from Markdown. It would also work if I was using a CMS.

## PlanetScale and Prisma

In order to implement the comments on blog posts, I used a MySQL database on PlanetScale and Prisma for connecting to it.

## TypeScript

I built most of this website without TypeScript, as I wanted to make sure I had practical knowledge of JavaScript before moving on.

## Other Tidbits

Adding a `?` to an array forces to check if it exists before running `map()`.

```js
data.comments?.map((comment) => (
    ...
))

console.log("Hello");
```

## Blog Posts

The blog posts are written in markdown and sourced locally using ContentLayer. In order to style the markdown while using Tailwind, I needed to install the tailwindcss/typography plugin.

Then in order to add my custom color theme:
https://tailwindcss.com/docs/typography-plugin#adding-custom-color-themes

```

```
