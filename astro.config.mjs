// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ea-halle.de',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    // Syntax highlighter "shiki" -> https://docs.astro.build/en/reference/configuration-reference/#markdownshikiconfig
    shikiConfig: {
      theme: 'github-light',
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  }
});