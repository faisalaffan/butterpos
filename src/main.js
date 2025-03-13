import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './styles/main.css'  // Tailwind
import './styles/output.css'  // Tailwind
import './styles/style.css'  // Tailwind

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')