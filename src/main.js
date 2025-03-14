import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import i18n from './i18n' // Import konfigurasi i18n

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(i18n) // Pasang Vue I18n

app.mount('#app')

import './styles/main.css'  // Tailwind
import './styles/output.css'  // Tailwind
import './styles/style.css'  // Tailwind