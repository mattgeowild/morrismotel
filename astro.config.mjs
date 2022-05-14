import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from '@astrojs/preact';
import react from '@astrojs/react';

export default defineConfig({
  shikiConfig: {
    theme: "dracula",
    langs: [],
    wrap: true,
  },
  site: "http://localhost:3000/",
  integrations: [sitemap(), tailwind(), preact(), react()],
});

