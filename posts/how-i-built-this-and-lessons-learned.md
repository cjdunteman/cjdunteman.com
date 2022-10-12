---
title: How I Built This Website and Lessons Learned
date: 2022-05-14
description: An overly detailed documentation of how I built this website, including everything I learned during the process.
---

The main stack consists of:

- Frontend Framework: Next.js

* Styling: TailwindCSS
* Hosting: Vercel
* Database: PlanetScale

## PlanetScale and Prisma

In order to implement the comments on blog posts, I used a MySQL database on PlanetScale and Prisma for connecting to it.

## TypeScript

I built most of this website without TypeScript, as I wanted to make sure I had practical knowledge of JavaScript before moving on.

## The `lib` folder

## Other Tidbits

Adding a `?` to an array fores to check if it exists before run `map()`.

```javascript
data.comments?.map((comment) => (
    ...
))
```
