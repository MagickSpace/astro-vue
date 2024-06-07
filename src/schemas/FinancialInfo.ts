import { defineCollection, reference, z } from 'astro:content'

const financialInfosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.string().optional(),
    title: z.string(),
    description: z.string(),
    subtitle: z.string().optional(),
    taxGuidelinesContent: z.string().optional(),
    financialPlanningContent: z.string().optional(),
    investmentStrategiesContent: z.string().optional(),
    financialRegulationsUpdatesContent: z.string().optional(),
    author: z.string().optional(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    draft: z.boolean().default(false).optional(),
    category: reference('category').optional(),
    tags: z.array(reference('tags')).optional(),
    language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr', 'pl']).optional(),
  }),
})

export const collections = { financialInfos: financialInfosCollection }
