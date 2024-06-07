import { defineCollection, reference, z } from 'astro:content'
import { astroZodCollectionsToJsonSchemas } from 'astro-zod-to-json-schema'
import { POST_METADATA } from './Tags.ts'

const blogCollection = defineCollection({
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
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: 'OpenGraph image must be at least 1200 X 630 pixels!',
        })
        .or(z.string())
        .optional(),
      heroImage: image(),
      category: reference('category').optional(),
      tags: z.array(reference('tags')).optional(),
      authors: z.array(reference('authors')).default(['admin']).optional(),
      topics: z.array(z.string()).default(['New!']).optional(),
      postLayout: z
        .enum(['simple', 'column'])
        .default(POST_METADATA.defaultLayout as 'simple' | 'column'),
      relatedPosts: z.array(reference('blog')).optional(),
      language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr', 'pl']).optional(),
    }),
})

const authors = defineCollection({
  schema: ({ image }) =>
    z.object({
      firstname: z.string(),
      lastname: z.string(),
      avatar: image().refine((img) => img.width >= 96, {
        message: 'Author avatar image must be at least 96 pixels wide!',
      }),
      nickname: z.string(),
      occupation: z.string().optional(),
      shortBio: z.string(),
      company: z.string().optional(),
      email: z.string().email(),
      twitter: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      github: z.string().url().optional(),
      layout: z.string().url().optional(),
      lang: z.string().optional(),
    }),
})

const promotionsCollection = defineCollection({
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
        .refine((img) => img.width >= 1200 && img.height >= 630, {
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
})

const tagsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: image(),
      lang: z.string().optional(),
      // layout: z.string().optional(),
    }),
})

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
      serviceImage: image(),
      language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr', 'pl']).optional(),
    }),
})

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
      demoUrl: z.string().optional(),
      repoUrl: z.string().optional(),
    }),
})

const categoryCollection = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
      lang: z.string().optional(),
    }),
})

const legal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.string().optional(),
  }),
})

const comments = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string().min(1).max(120),
    commentContent: z.string().optional(),
    timestamp: z.coerce.date(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.array(reference('authors')).optional(),
    lang: z.string().optional(),
  }),
})

const releases = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      versionNumber: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      date: z.date({ coerce: true }),
      lang: z.string().optional(),
    }),
})

const work = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    lang: z.string().optional(),
  }),
})

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

export const collections = {
  projects: projectsCollection,
  financialInfos: financialInfosCollection,
  blog: blogCollection,
  work,
  statistic,
  promotions: promotionsCollection,
  comments,
  authors,
  legal,
  releases,
  services: servicesCollection,
  tags: tagsCollection,
  category: categoryCollection,
}
await astroZodCollectionsToJsonSchemas(collections)
