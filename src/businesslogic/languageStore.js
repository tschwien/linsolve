import { defineStore } from 'pinia';
import i18n from './i18n';

export  const languageStore = defineStore('i18n', {
  state: () => ({
    locale: i18n.global.locale,  
   
  }),
  actions: {
    
    setLocale(locale) {
      this.locale = locale;
      i18n.global.locale = locale;  
    },
  },
});

