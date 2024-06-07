import { defineCollection, reference, z } from 'astro:content'

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z
        .string()
        .max(
          60,
          'For optimized SEO, please provide a title with 60 characters or less',
        )
        .optional(),
      metaDescription: z
        .string()
        .max(
          160,
          'For optimized SEO, please provide an excerpt/description with 160 characters or less',
        )
        .optional(),
      draft: z.boolean().default(false).optional(),
      category: reference('category').optional(),
      tags: z.array(reference('tags')).optional(),
      projectLogo: image(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      summary: z.string().optional(),
      demoUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
    }),
})

export const collections = { projects: projectsCollection }