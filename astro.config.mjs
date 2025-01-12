// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://lai10297000.github.io",
  base: "/frontend-mentor-practice",

  experimental: {
    svg: true,
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [react(), tailwind()],
});
