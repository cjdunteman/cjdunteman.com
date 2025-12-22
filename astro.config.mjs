import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  experimental: {
    chromeDevtoolsWorkspace: true,
  },

  output: "static",
  site: "https://cjdunteman.com",
  integrations: [sitemap()],
});
