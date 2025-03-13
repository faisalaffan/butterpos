// src/store/index.js
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    step: 1,
    // Contoh data yang akan diisi user:
    fullName: '',
    idNumber: '',
    npwp: '',
    // dsb...
  }),
  actions: {
    nextStep() {
      this.step++
    },
    prevStep() {
      if (this.step > 1) this.step--
    },
  },
})