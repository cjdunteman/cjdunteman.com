import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

export default defineConfig({
  experimental: {
    chromeDevtoolsWorkspace: true,
  },

  output: "server",
  site: "https://cjdunteman.com",
  integrations: [sitemap()],

  adapter: node({
    mode: "standalone",
  }),
});
