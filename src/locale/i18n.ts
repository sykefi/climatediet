import { createI18n, I18nOptions } from 'vue-i18n'
import en from './en/en'
import fi from './fi/fi'
import sv from './sv/sv'

const browserLang = navigator.language.toLocaleLowerCase()

const dateTimeFormats: I18nOptions['datetimeFormats'] = {
  en: {
    short: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    },
  },
  fi: {
    short: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
  sv: {
    short: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
}

export default createI18n({
  locale: browserLang.startsWith('fi')
    ? 'fi'
    : browserLang.startsWith('sv')
      ? 'sv'
      : 'en', // set locale
  fallbackLocale: 'en',
  messages: { en, fi, sv }, // set translated texts (defined in /locale/)
  dateTimeFormats,
  warnHtmlInMessage: 'warn',
})
