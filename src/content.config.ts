import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      author: z.string().default('Shloka Iyer'),
      excerpt: z.string(),
      tags: z.array(z.string()).default([]),
      cover: image(),
    }),
});

export const collections = { blog };
