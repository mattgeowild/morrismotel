import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  markdown: {
    remarkPlugins: [ 'remark-reading-time' ],
  },
  shikiConfig: {
    theme: "dracula",
    langs: [],
    wrap: true,
  },
  site: "http://localhost:3000/",
  integrations: [sitemap(), tailwind()],
});

