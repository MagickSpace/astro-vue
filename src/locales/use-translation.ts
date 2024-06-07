import { defaultLocale, translations } from '@/locales'

export const useTranslation =
  (locale: keyof typeof translations) =>
  (key: keyof (typeof translations)[typeof defaultLocale]) =>
    translations[locale][key] || translations[defaultLocale][key]