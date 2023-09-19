// https://astro.build/config
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/utils/all";
import { astroImageTools } from "astro-imagetools";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://noxcodes.xyz",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: ["rehype-plugin-image-native-lazy-loading"],
    extendDefaultPlugins: true
  },
  integrations: [tailwind(), image({
    integrations: [astroImageTools],
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), react(), solidJs()]
});