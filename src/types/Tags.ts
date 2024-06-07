import { defineCollection, z } from 'astro:content';

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
});

export const collections = { tags: tagsCollection };
export const POST_METADATA = {
    defaultLayout: "column", // Default layout for blog posts, options: simple and column
    showFullWidthCover: false, // Show full width cover image in blog post
    showCover: true, // Show cover image in blog post
    showTags: true, // Show tags in blog post, TODO: Add support for hiding tags
    showDate: true, // Show date in blog post, TODO: Add support for hiding date
    showSummary: true, // Show summary in blog post
    showAuthors: true, // Show authors in blog post, TODO: Add support for hiding authors
    showRelatedPosts: true, // Show related posts in blog post, TODO: Add support for hiding related posts
    showTableOfContents: true, // Show table of contents in blog post
    showShareButtons: 'both', // Show share buttons in blog post, options: top, bottom, both, none
  };