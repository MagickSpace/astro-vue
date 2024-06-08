export interface Category {
	title: string
	description: string
	metaTitle?: string
	metaDescription?: string
	icon?: string
	categoryImage: {
		src: string
		width: number
		height: number
		format: 'png' | 'jpg' | 'jpeg' | 'tiff' | 'webp' | 'gif' | 'svg' | 'avif'
	}
	lang?: string
}
