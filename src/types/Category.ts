import { defineCollection, reference, z } from 'astro:content';

const categoryCollection = defineCollection({
	type: 'content',
	schema: () => z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(reference('tags')).optional(),
		icon: z.string().optional(),
		lang: z.string().optional(),
	}),
  });

export const collections = { category: categoryCollection };