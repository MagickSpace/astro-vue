import { defineCollection, z } from 'astro:content';

const authors = defineCollection({
    schema: ({ image }) =>
        z.object({
    firstname: z.string(),
    lastname: z.string(),
    avatar: image().refine((img) => img.width >= 96, {
        message: "Author avatar image must be at least 96 pixels wide!",
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
});

export const collections = { authors };