// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://lai10297000.github.io",
  base: "/frontend-mentor-practice",

  experimental: {
    svg: true,
  },

  integrations: [react()],
});