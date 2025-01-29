---
isDraft: true
title: Next.js
tags: ["Web Development"]
updatedDate: 2023-05-27
---

# Next.js
[[React]] framework that gives you building blocks to create web applications. It handles tooling and configuration needed for React and provides additional structure, features, and optimizations.


- automatically minifies [[JavaScript|JS]] and [[CSS]] files
- built-in support for code splitting
	- 


## Creating a Project
`npx create-next-app@latest --use-npm`


## Next.js Compiler
A [[compiler]] written in [[Rust]] and SWC. 


## Rendering
Next.js pre-renders every page by default i.e. HTML is generated in advance on a server. 
You can choose the most appropriate rendering method on a page-by-page basis.


#### Static generation
You can statically generate pages using `getStaticProps`. 


## Commands
`next dev` start Next.js in dev mode
`next build` builds applications for prod. use
`next start` start a Next.js production server
`next lint` set up Next.js built-in ESLint configuration
