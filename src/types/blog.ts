
export interface Blog {
  title: string
  description: string
  metaTitle?: string
  metaDescription?: string
  draft?: boolean
  pubDate: string
  updatedDate?: string
  ogImage?:
    | {
        src: string
        width: number
        height: number
        format:
          | "png"
          | "jpg"
          | "jpeg"
          | "tiff"
          | "webp"
          | "gif"
          | "svg"
          | "avif"
      }
    | string
  heroImage: {
    src: string
    width: number
    height: number
    format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif"
  }
  category?: string
  tags?: string[]
  authors?: string[]
  topics?: string[]
  postLayout?: "simple" | "column"
  relatedPosts?: string[]
  language?: "en" | "es" | "uk" | "ru" | "de" | "fr" | "pl"
}
