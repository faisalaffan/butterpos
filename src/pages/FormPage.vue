<template>
    <div class="p-4">
        <!-- Header (dengan LanguageSelector) -->
        <LanguageSelector />

        <!-- Tabs -->
        <StepTabs />

        <!-- Conditional render step -->
        <div v-if="formStore.step === 1">
            <Step1 />
        </div>
        <div v-else-if="formStore.step === 2">
            <Step2 />
        </div>
        <div v-else-if="formStore.step === 3">
            <Step3 />
        </div>

        <!-- Tombol navigasi -->
        <div class="flex gap-4 mt-4">
            <button class="bg-gray-200 px-4 py-2" @click="prevStep" :disabled="formStore.step === 1">
                Sebelumnya
            </button>

            <!-- Step terakhir: submit -->
            <button v-if="formStore.step === 3" class="bg-blue-600 text-white px-4 py-2" @click="onSubmit">
                {{ t('form.submit') }}
            </button>

            <!-- Jika belum step terakhir: lanjut -->
            <button v-else class="bg-blue-600 text-white px-4 py-2" @click="nextStep">
                Selanjutnya
            </button>
        </div>
    </div>
</template>

<script setup>
import { useFormStore } from '@/stores'
import { t } from '@/locales'
import LanguageSelector from '@/components/LanguageSelector.vue'
import StepTabs from '@/components/StepTabs.vue'
import Step1 from '@/components/Step1.vue'
import Step2 from '@/components/Step2.vue'
import Step3 from '@/components/Step3.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formStore = useFormStore()

function nextStep() {
    formStore.nextStep()
    // Update hash agar user bisa akses #step-2, dsb
    window.location.hash = `step-${formStore.step}`
}

function prevStep() {
    formStore.prevStep()
    window.location.hash = `step-${formStore.step}`
}

function onSubmit() {
    // Contoh validasi sangat sederhana
    if (!formStore.fullName || !formStore.idNumber) {
        alert('Harap isi field wajib!')
        return
    }
    // Jika valid, ke success
    router.push('/success')
}
</script>