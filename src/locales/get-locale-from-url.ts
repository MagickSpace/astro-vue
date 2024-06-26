import { defaultLocale, translations } from '@/locales'

export const getLocaleFromUrl = (url: URL) => {
	const [, lang] = url.pathname.split('/')

	if (lang && lang in translations) {
		return lang as keyof typeof translations
	}

	return defaultLocale
}
