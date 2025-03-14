<template>
    <div class="flex space-x-4 border-b mb-4">
        <a v-for="n in 3" :key="n" class="px-4 py-2" :class="{ 'bg-blue-100': currentStep === n }" :href="`#step-${n}`">
            {{ t(`steps.step${n}`) }}
        </a>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFormStore } from '@/stores'

const formStore = useFormStore()

const currentStep = computed(() => formStore.step)
</script>