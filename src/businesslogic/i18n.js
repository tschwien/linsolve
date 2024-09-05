import { createI18n } from 'vue-i18n'; 
import en from '../locales/en.json'; 
import de from '../locales/de.json'; 

// Object containing translation messages for different locales
const messages = {
  en, 
  de, 
};


let i18n = createI18n({
  locale: 'de', // The default locale is set to German
  fallbackLocale: 'de', // If a translation for the active locale is not found, fallback to German
  messages, 
});

// Exporting the i18n instance so it can be used across the application
export default i18n; 
