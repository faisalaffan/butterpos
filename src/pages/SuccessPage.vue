<template>
    <div class="p-4">
        <LanguageSelector />
        <h1 class="text-2xl font-bold mb-2">{{ t('success.title') }}</h1>
        <p>Terima kasih telah mengisi form!</p>
        <router-link to="/" class="text-blue-600 underline">Kembali ke Form</router-link>
    </div>
</template>

<script setup>
import { t } from '@/locales'
import LanguageSelector from '@/components/LanguageSelector.vue'
</script>