// Preview deployments only: when the site is served from a sub-folder (BASE_PATH=/STP),
// prefix the hand-written root-relative links in the built HTML so they resolve there.
// On the real domain BASE_PATH is empty and this script does nothing.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
if (!base) process.exit(0);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });

let count = 0;
for (const file of walk('dist')) {
  const html = readFileSync(file, 'utf8');
  const out = html
    // href="/about", src="/x.jpg", action="/..." but not "//host" and not already prefixed
    .replace(/\b(href|src|action)="\/(?!\/)([^"]*)"/g, (m, attr, rest) =>
      ('/' + rest).startsWith(base + '/') || '/' + rest === base ? m : `${attr}="${base}/${rest}"`)
    .replace(/content="(\d+);\s*url=\/(?!\/)([^"]*)"/g, (m, n, rest) => `content="${n};url=${base}/${rest}"`)
    .replace(/window\.location\.href = '\/thank-you'/g, `window.location.href = '${base}/thank-you'`);
  if (out !== html) { writeFileSync(file, out); count++; }
}
console.log(`prefix-base: rewrote links in ${count} files for ${base}`);
