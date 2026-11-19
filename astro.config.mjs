import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site: every page is pre-rendered to plain HTML at build time.
// BASE_PATH is only set for preview deployments served from a sub-folder
// (e.g. https://<user>.github.io/STP). On the real domain it is empty.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://therapywithshloka.com',
  base,
  trailingSlash: 'never',
  build: { format: 'file' }, // /about -> about.html, keeps the existing URLs without trailing slashes
  integrations: [sitemap({ filter: (page) => !/\/(thank-you|404)$/.test(page) })],
});
