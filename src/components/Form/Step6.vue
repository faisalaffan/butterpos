<!-- src/components/Step3.vue -->
<template>
    <div class="text-lg md:text-xl font-bold">Pasal 6</div>
    <div class="text-base md:text-lg font-semibold">
        Hukum yang Berlaku dan Penyelesaian Sengketa
    </div>
    <ol class="list-decimal list-outside pl-5">
        <li>
            Perjanjian ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di
            Republik Indonesia.
        </li>
        <li>
            Jika terjadi perselisihan atau sengketa sehubungan dengan Perjanjian ini, Para Pihak
            setuju untuk menyelesaikannya secara musyawarah untuk mufakat.
        </li>
        <li>
            Apabila musyawarah tidak mencapai kesepakatan, maka sengketa akan diselesaikan
            melalui jalur hukum di pengadilan yang berwenang di Indonesia.
        </li>
    </ol>
</template>

<script setup>
import { useFormStore } from '@/stores'

const formStore = useFormStore()
</script>