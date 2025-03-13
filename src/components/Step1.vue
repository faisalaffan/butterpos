<!-- src/components/Step1.vue -->
<template>
    <div class="border p-4">
        <h2 class="font-bold mb-2">{{ t('steps.step1') }}</h2>
        <div class="flex flex-col gap-2">
            <label>{{ t('form.fullName') }}</label>
            <input type="text" v-model="formStore.fullName" class="border p-2" />

            <label>{{ t('form.idNumber') }}</label>
            <input type="text" v-model="formStore.idNumber" class="border p-2" />
        </div>
    </div>
</template>

<script setup>
import { useFormStore } from '@/stores'
import { t } from '@/locales'

const formStore = useFormStore()
</script>