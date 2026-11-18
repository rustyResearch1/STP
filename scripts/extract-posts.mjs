// One-off: convert the Lovable blogPosts.ts into markdown files.
import { writeFileSync } from 'node:fs';
const [, , src, outDir] = process.argv;
const { blogPosts } = await import(src);
const covers = { 'what-if-its-not-just-you': 'interior.jpg', 'the-silent-survival-mode-of-immigrants-in-america': 'coast-strip.jpg' };
for (const p of blogPosts) {
  const fm = ['---', `title: ${JSON.stringify(p.title)}`, `date: ${p.date}`, `author: ${JSON.stringify(p.author)}`, `excerpt: ${JSON.stringify(p.excerpt)}`, `tags: ${JSON.stringify(p.tags)}`, `cover: ../../assets/${covers[p.slug] ?? 'forest.jpg'}`, '---', ''].join('\n');
  writeFileSync(`${outDir}/${p.slug}.md`, fm + p.content.trim() + '\n');
  console.log(p.slug, p.content.split(/\s+/).length, 'words');
}
