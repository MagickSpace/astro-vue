
import en from './en'
import ru from './ru'
import es from './es'
import uk from './uk'
import fr from './fr'
import pl from './pl'
import de from './de'

type Locale = keyof typeof translations

export const translations = {
  en,
  ru,
  es,
  uk,
  fr,
  pl,
  de,
}


export const LANGUAGES = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
    ru: 'Русский',
    uk: 'Українська',
    de: 'German',
    pl: 'Polski',
  }
  
export type LANGUAGES = keyof typeof translations

export const locales: {
  originName: string
  name: string
  route: string
  icon: string
  code: Locale
}[] = [
  {
    originName: 'English',
    name: 'English',
    code: 'en',
    route: '/en/',
    icon: 'en',
  },
  {
    originName: 'Français',
    name: 'France',
    code: 'fr',
    route: '/fr/',
    icon: 'fr',
  },
  {
    originName: 'Español',
    name: 'Spain',
    code: 'es',
    route: '/es/',
    icon: 'es',
  },
  {
    originName: 'Українська',
    name: 'Ukrainian',
    code: 'uk',
    route: '/uk/',
    icon: 'uk',
  },
  {
    originName: 'Deutchland',
    name: 'German',
    code: 'de',
    route: '/de/',
    icon: 'de',
  },
  {
    originName: 'Polski',
    name: 'Polland',
    code: 'pl',
    route: '/pl/',
    icon: 'pl',
  },
  {
    originName: 'Русский',
    name: 'Russian',
    code: 'ru',
    route: '/ru/',
    icon: 'ru',
  },
]

export const defaultLocale: Locale = 'en'