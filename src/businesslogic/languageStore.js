import { defineStore } from 'pinia'; 
import i18n from './i18n'; 

// Defining a new store for managing the language (i18n) state
export const languageStore = defineStore('i18n', {
  // The `state` function returns an object that represents the reactive state of the store
  state: () => ({
    locale: i18n.global.locale, 
  }),
  
  // Actions section: methods that can modify the state or perform other logic
  actions: {
    // This action sets the new locale for both the store and the global i18n instance
    setLocale(locale) {
      this.locale = locale; 
      i18n.global.locale = locale; 
    },
  },
});

