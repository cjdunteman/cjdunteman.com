import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  experimental: {
    chromeDevtoolsWorkspace: true,
  },
  output: "static",
  adapter: vercel(),
  site: "https://cjdunteman.com",
  integrations: [sitemap()],
});
