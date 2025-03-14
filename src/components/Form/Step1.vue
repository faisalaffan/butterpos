<!-- src/components/Step1.vue -->
<template>
    <div class="text-lg md:text-xl font-bold">Pasal 1</div>
    <div class="text-base md:text-lg font-semibold">Ruang Lingkup Kerja</div>
    <ol class="list-decimal list-outside pl-5">
        <li>
            Pihak Kedua setuju untuk menyediakan jasa/layanan/produk sebagai kontraktor bagi
            Pihak Pertama.
        </li>
        <li>
            Pihak Kedua bertanggung jawab untuk menyerahkan hasil kerja atau produk sesuai
            dengan ketentuan yang telah ditentukan oleh Pihak Pertama.
        </li>
    </ol>
</template>

<script setup>
import { useFormStore } from '@/stores'

const formStore = useFormStore()
</script>