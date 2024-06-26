// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initI18nVuePlugin } from 'typesafe-i18n/vue'
import { inject, ref } from 'vue'
import type { Formatters, Locales, TranslationFunctions, Translations } from './i18n-types.js'
import { loadedFormatters, loadedLocales } from './i18n-util.js'

const { typesafeI18n, i18nPlugin } = initI18nVuePlugin<
	Locales,
	Translations,
	TranslationFunctions,
	Formatters
>(inject, ref, loadedLocales, loadedFormatters)

export { typesafeI18n, i18nPlugin }
