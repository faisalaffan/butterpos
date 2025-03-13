import { defineStore } from 'pinia'

export const useSignatureStore = defineStore('signature', {
  state: () => ({
    signature: ''
  }),
  actions: {
    setSignature(newSignature) {
      this.signature = newSignature
    },
    clearSignature() {
      this.signature = ''
    }
  }
})