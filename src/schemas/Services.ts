import { defineCollection, reference, z } from 'astro:content'

const servicesCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			icon: z.string().optional(),
			lang: z.string().optional(),
			title: z.string(),
			description: z.string(),
			metaTitle: z
				.string()
				.max(60, 'For optimized SEO, please provide a title with 60 characters or less')
				.optional(),
			metaDescription: z
				.string()
				.max(
					160,
					'For optimized SEO, please provide an excerpt/description with 160 characters or less'
				)
				.optional(),
			draft: z.boolean().default(false).optional(),
			category: reference('category').optional(),
			tags: z.array(reference('tags')).optional(),
			serviceImage: image(),
			language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr', 'pl']).optional()
		})
})

export const collections = { services: servicesCollection }
