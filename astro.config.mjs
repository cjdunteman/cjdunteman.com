import { defineConfig } from "astro/config";
import { remarkObsidianLinks } from './scripts/remark-obsidian-links.js';

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

export default defineConfig({
  experimental: {
    chromeDevtoolsWorkspace: true,
  },

  output: "static",
  site: "https://cjdunteman.com",
  integrations: [sitemap(), mdx()],

  // Fenced ```code``` blocks get light, readable highlighting via Shiki.
  // Inline `code` is styled in global.css.
  markdown: {
    shikiConfig: {
      theme: "min-light",
      wrap: false,
    },
    remarkPlugins: [
      [
        remarkObsidianLinks, 
        { baseUrl: '/' } // Set your target domain here
      ]
    ],
  }
});
