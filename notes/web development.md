---
isDraft: true
isPrivate: false
title: Web Development
updatedDate: 2023-05-27
---

# Web Development
Considerations:
- UI - how users consume and interact w/ your application
- Routing - how users navigate
- Data Fetching - where your data lives nad how to get it
- Rendering - when and hwere you render static or dynamic content
- Integrations - 3rd party services and how to connect them
- Performance - how to optimize
- Scalability - how your app adapts to growth
- Dev Experience - exp building and maintaining your app


## Client and Server
Client refers to the browser on a user's device 
Server refers to the computer storing application code and responds to client requests


## Rendering
#### Server-side
Fetching of external data and transformation of React components into HTML happens before result is sent to client. HTML is generated once at build time and stored in a [[CDN]] and re-used for each request.


#### Static site generation
Fetching of external data and transformation of React components into HTML happens before result is sent to client


#### Client-side rendering
Client's browser receives empty HTML shell from server along with JavaScript instructions to construct the UI.




📝 **Web Development in 2020**


Notes from Traversy Media’s Video [https://www.youtube.com/watch?v=0pThnRneDjw&t=972s](https://www.youtube.com/watch?v=0pThnRneDjw&t=972s)


**Frontend**


  


**Responsive Design**


-   Viewport
-   Media queries
-   Fluid widths
-   REM over px
-   Mobile first


-   Create mobile media queries first


  


**Custom Reusable CSS Components**


Create your own modular, reusable CSS components. Makes CSS more efficient and functional.


-   Variables
-   Nesting
-   Conditionals


  


**CSS Frameworks**


Downward trend, but still relevant. Good for developers who struggle at design


-   Bootstrap
-   Tailwind CSS


-   Upward trend
-   Set of utility classes
-   Highly customizable


-   Materialize
-   Bulma


  


**Vanilla JS**


Makes pages dynamic


-   Fundamentals
-   DOM
-   JSON (JS Object Notation)
-   Fetch API (Request / Response / Ajax)
-   Modern JS


  


**Basic Deployment**


Get project to web server


-   Domain Registration
-   Managed Hosting (Hostgator, Bluehost, etc.)
-   Static Hosting (Netlify, Github Pages)
-   SSL Certificate 


  


**Front-End Framework**


Allow powerful single page applications with organized and interactive UIs. Great for teams.


-   React


-   Most popular


-   Vue


-   Gaining traction


-   Angular


-   Used more in enterprise


  


**Svelte**


JS compiler that produces vanilla JS and builds UI easily.


-   Write less code
-   No virtual DOM
-   Very fast


  


**State Management**


App level state. Downward trend.


-   React - Redux


-   Context API with hooks on upward trend


-   Vue - Vuex
-   Angular - NGRX, Services
-   Apollo Client


  


**Server Side Rendering**


Render React and Vue on server as oppose to a client side SPA. NEXT for React and NUXT for Vue.


-   Better SEO
-   File system routing
-   Automatic code splitting
-   Static exploring
-   CSS-in-JS


  


**Static Site Generators**


Gatsby (React) and Gridsome (Vue). Generate static web pages.


-   Better SEO
-   File system routing
-   Data fetching from local files, during build time
-   Plugin system
-   GraphQL for data


  


**TypeScript**


Superset of JS allowing for optional static typing and more.


-   Static typing
-   Tooling support with IntelliSense
-   Modules, decorators, classes
-   Compiles into clean JS code
-   Built into Angular


  


**Backend**


  


**Server-side language and framework**


-   Node.js


-   Express
-   Feathers.js
-   Next.js


-   PHP


-   Laravel


-   Python


-   Django, Flask


-   C#


-   [ASP.NET](http://ASP.NET) MVC


-   Java


-   Spring MVC, Grails


-   Ruby


-   Ruby on Rails
-   Sinatra


-   Go


-   Revel


  


**Databases**


-   Relational (most popular)


-   PostgreSQL (upward trend)
-   MySQL
-   MS SQL


-   NoSQL (faster, more freedom)


-   MongoDB (most popular)


-   Mongo Atlas for cloud


-   RethinkDB
-   CouchDB


-   Cloud - 


-   Firebase


-   For small - medium projects


-   Azure Cloud
-   AWS


-   Lightweight & Cache


-   Redis
-   SQLlite
-   NeDB


  


**GraphQL**


-   Query language for your API
-   Single endpoint 
-   Simple syntax, similar to JSON
-   Fairly easy to implement
-   Apollo is a client to interact with the GraphQL server


  


**Content Management**


A CMS is used to add content to your website / application. Good for clients to update without programming knowledge.


  


-   Traditional


-   Wordpress
-   Drupal
-   Keystone
-   Enduro


-   Headless - just the data


-   Contentful
-   [Prismic.io](http://Prismic.io)
-   Sanity
-   Strapi


  


**Deployment and DevOps**


Understand how to create / manage environments and deploy to the web


-   SSH
-   Web Server Environment


-   NGINX
-   Apache


-   App Hosting


-   Linode
-   Heroku
-   AWS


-   Large-scale


-   Azure


-   Large-scale


-   Now


-   Virtualization


-   Docker


-   Have same environment on multiple platforms


-   Vagrant


-   Testing


-   Unit
-   Functional
-   Integration


-   Load balancing, monitoring, security


-   Usually done by a separate DevOps professional


  


**Mobile Development**


-   Flutter


-   Native mobile apps SDK from Google using Dart


-   React Native


-   Native mobile apps using React


-   NativeScript 


-   Native mobile apps with JS, TS, Angular, or Cue


-   Ionic


-   Hybrid mobile apps with JS


-   Xamarin


-   Native mobile apps with C#


  


**PWA: Progressive Web Apps**


Regular web apps that have a native feel


-   Look great on all screen sizes
-   Offline content with service workers
-   Installable
-   Splash screen
-   Must be HTTPS
-   Reliable, fast, and engaging


  


**Desktop Apps with Electron**


Allows cross-platform app with JS


-   Uses Node.js & Chromium
-   High data security
-   High performance
-   Accessibility
-   VSCode, Atom, Postman, Discord


  


**JAMstack**


“JavaScript, APIs & Markup” is a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup. Upward trend.


-   No restriction on framework or library
-   Websites are served as static html files generated from source files, such as markdown using a static site generator like Gatsby
-   High performance, generated at deploy time
-   Cheaper and easy to scale
-   Easy to host (Netlify)


  


**Serverless Architecture**


Server operations without actually needing your own server


-   “Backend” or “Functions” as a service (FaaS)
-   Reduce complexity and costs
-   Less infrastructure to manage
-   AWS Lambda & Netlify


  


**API-First Design**


With more and more IoT expect to see api-focused design


-   Traditionally we start with UI and then backend with a strict connection to the web app
-   With API-first design, you start with the appropriate APIs and then build products on top of it


  


**Machine Learning / AI & the Web**


Growing in all areas of tech and can be useful in web apps / services


-   Alternative to conventional data mining
-   Remove security threats
-   Machine learning APIs
-   Producing content
-   Study user behavior
-   Python is king


  


**Speech Recognition**


Major trend. 


-   HTML5 Web Speech API
-   Google Speech-To-Text
-   Dialog Flow


  


**Web Assembly**


Low-level bytemode run in browser


-   Generated by C, C++, and Rust
-   Much faster than JS
-   Not replacement for JS, works alongside it
-   Next level video games, tools in browser