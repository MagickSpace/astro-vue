import { defaultLang, languages, ui } from '@/locales/ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) return lang as keyof typeof languages
  
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
}

export function changeLangFromUrl(url: URL, lang: string) {
  const newLang = lang in ui ? lang : defaultLang
  const splitUrl = url.pathname.split('/')
  splitUrl[1] = newLang
  return splitUrl.join('/').substring(1)
}