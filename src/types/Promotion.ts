import { defineCollection, reference, z } from 'astro:content';

const promotionsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
		  title: z.string(),
		  description: z.string(),
		  metaTitle: z.string().max(60, "For optimized SEO, please provide a title with 60 characters or less").optional(),
		  metaDescription: z.string().max(160, "For optimized SEO, please provide an excerpt/description with 160 characters or less").optional(),
		  draft: z.boolean().default(false).optional(),
		  category: reference('category').optional(),
		  tags: z.array(reference('tags')).optional(),
		  dateStart: z.coerce.date(),
		  dateEnd: z.union([z.coerce.date(), z.string()]),
		  pubDate: z
		  .string()
		  .or(z.date())
		  .transform((val) => new Date(val)),
		  updatedDate: z
		  .string()
		  .optional()
		  .transform((str) => (str ? new Date(str) : undefined)),
		  ogImage: image()
		  .refine(img => img.width >= 1200 && img.height >= 630, {
			  message: 'OpenGraph image must be at least 1200 X 630 pixels!',
		  })
		  .or(z.string())
		  .optional(),
		  language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr', 'pl']).optional(),
			callToActionText: z.string().optional(),
			callToActionLink: z.string().optional(),
			promotionalText: z.string().optional(),
			bannerImage: image().optional(),
		}),
	  });

export const collections = { promotions: promotionsCollection };