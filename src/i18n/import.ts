import de from '@/data/locales/de.json'
import en from '@/data/locales/en.json'
import es from '@/data/locales/es.json'
import fr from '@/data/locales/fr.json'
import pl from '@/data/locales/pl.json'
import ru from '@/data/locales/ru.json'
import uk from '@/data/locales/uk.json'

import type { Locales } from '@/i18n/i18n-types'
import type { BaseTranslation } from 'typesafe-i18n'
import { type ImportLocaleMapping, storeTranslationToDisk } from 'typesafe-i18n/importer'

const getDataFromAPI = async (_locale: Locales): Promise<BaseTranslation> => {
	// custom implementation to fetch the data from a service
	switch (_locale) {
		case 'ru':
			return ru
		case 'es':
			return es
		case 'fr':
			return fr
		case 'de':
			return de
		case 'pl':
			return pl
		case 'uk':
			return uk

		default:
			return en
	}
}

const importTranslationsForLocale = async (locale: Locales) => {
	const translations = await getDataFromAPI(locale)

	const localeMapping: ImportLocaleMapping = {
		locale,
		translations
	}

	const result = await storeTranslationToDisk(localeMapping)

	console.log(`translations imported for locale '${result}'`)
}

for (const locale of ['en', 'ru', 'de', 'es', 'uk', 'pl', 'fr'] as Locales[]) {
	importTranslationsForLocale(locale)
}
