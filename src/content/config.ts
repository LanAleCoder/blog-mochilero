import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    destination: z.string().optional(),
    budget: z.number().optional(),
  })
});

export const collections = {
  'blog': blogCollection,
};