import { defineCollection, z } from 'astro:content'

const statistic = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dataSource: z.string(),
    chartType: z.string(),
    timeRange: z.string(),
    refreshRate: z.string(),
    lang: z.string().optional(),
  }),
})

export const collections = { statistic }
