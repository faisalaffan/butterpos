// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import FormPage from '../pages/FormPage.vue'
import AgreementForm from '../pages/AgreementForm.vue'
import SuccessPage from '../pages/SuccessPage.vue'

const routes = [
  { path: '/', name: 'Agreement', component: AgreementForm },
  // { path: '/', name: 'Form', component: FormPage },
  { path: '/success', name: 'Success', component: SuccessPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router