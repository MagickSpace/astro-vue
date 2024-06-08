import { defineCollection, reference, z } from 'astro:content'

const comments = defineCollection({
	type: 'data',
	schema: z.object({
		id: z.string().min(1).max(120),
		commentContent: z.string().optional(),
		timestamp: z.coerce.date(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.array(reference('authors')).optional(),
		lang: z.string().optional()
	})
})

export const collections = { comments }
