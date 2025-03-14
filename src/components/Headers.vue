<script setup>
import LanguageSelector from '..//components/LanguageSelector.vue'
</script>
<template>
    <header class="w-full border-b border-[#EDEDED] bg-white">
        <div class="flex items-center justify-between mx-auto max-w-7xl py-4 px-4 lg:px-16">
            <img class="size-10 md:size-12" src="@/assets/img/logo.svg" alt="ButterPOS Logo" />
            <LanguageSelector />
        </div>
    </header>
</template>