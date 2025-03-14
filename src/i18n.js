import { watch } from 'vue';
import { createI18n } from 'vue-i18n'
import en from './locales/en.json';
import id from './locales/id.json';

// Definisi pesan dalam berbagai bahasa
const messages = { en, id };

const browserLocale = navigator.language.split('-')[0]; // Get browser language (e.g., 'en', 'id')
const savedLocale = localStorage.getItem('locale') || (browserLocale === 'id' ? 'id' : 'en');

const i18n = createI18n({
  legacy: false, // Required for Vue 3 Composition API support
  locale: savedLocale,
  fallbackLocale: 'id',
  messages
});


// Ensure that when the locale is changed, it is saved in localStorage
i18n.global.locale.value = savedLocale;
watch(() => {
  localStorage.setItem('locale', i18n.global.locale.value);
});

export default i18n;