export interface Service {
	icon?: string
	lang?: string
	title: string
	description: string
	metaTitle?: string
	metaDescription?: string
	draft?: boolean
	category?: string
	tags?: string[]
	serviceImage: {
		src: string
		width: number
		height: number
		format: 'png' | 'jpg' | 'jpeg' | 'tiff' | 'webp' | 'gif' | 'svg' | 'avif'
	}
	language?: 'en' | 'es' | 'uk' | 'ru' | 'de' | 'fr' | 'pl'
}
