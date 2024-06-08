export type Page = {
	TITLE: string
	DESCRIPTION: string
}

export interface Site extends Page {
	AUTHOR: string
}

export type Links = {
	TEXT: string
	HREF: string
}[]

export type Socials = {
	NAME: string
	ICON: string
	TEXT: string
	HREF: string
}[]

export interface CommonFrontmatter {
	title?: string
	reference?: string
	description?: string
	image?: string
	previewImage?: string
	canonicalURL?: string
	file?: string
}
