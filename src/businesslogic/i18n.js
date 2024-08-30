import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import de from '../locales/de.json';

const messages = {
  en,
  de,
};

let i18n = createI18n({
  locale: 'de', 
  fallbackLocale: 'de', 
  messages, 
});

export default i18n;
