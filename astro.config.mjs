import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site: every page is pre-rendered to plain HTML at build time.
export default defineConfig({
  site: 'https://therapywithshloka.com',
  trailingSlash: 'never',
  build: { format: 'file' }, // /about -> about.html, keeps the existing URLs without trailing slashes
  integrations: [sitemap({ filter: (page) => !/\/(thank-you|404)$/.test(page) })],
});
