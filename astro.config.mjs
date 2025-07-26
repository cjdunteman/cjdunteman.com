import { defineConfig } from "astro/config";
// Import /serverless for a Serverless SSR site
import vercelServerless from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
});
