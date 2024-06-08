export interface Projects {
	title: string
	description: string
	metaTitle?: string
	metaDescription?: string
	draft?: boolean
	category?: string
	tags?: string[]
	projectLogo: {
		src: string
		width: number
		height: number
		format: 'png' | 'jpg' | 'jpeg' | 'tiff' | 'webp' | 'gif' | 'svg' | 'avif'
	}
	pubDate: string
	updatedDate?: string
	summary?: string
	demoUrl?: string
	repoUrl?: string
}
