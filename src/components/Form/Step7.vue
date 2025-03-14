<!-- src/components/Step3.vue -->
<template>
    <div class="text-lg md:text-xl font-bold">Pasal 7</div>
    <div class="text-base md:text-lg font-semibold">Penutup</div>
    <ol class="list-decimal list-outside pl-5">
        <li>
            Perjanjian ini mulai berlaku efektif sejak tanggal ditandatangani oleh Para Pihak
            dan akan tetap berlaku sepanjang belum diakhiri oleh salah satu Pihak dengan
            pemberitahuan tertulis sesuai ketentuan dalam Perjanjian.
        </li>
        <li>
            Dengan menandatangani Perjanjian ini, Pihak Kedua menyatakan telah membaca,
            memahami, dan menyetujui seluruh isi Perjanjian tanpa ada paksaan dari pihak
            manapun.
        </li>
    </ol>
    <div>
        Demikian Perjanjian ini dibuat dalam rangkap 2 (dua) yang masing-masing bermaterai
        cukup dan mempunyai kekuatan hukum yang sama.
    </div>
</template>

<script setup>
import { useFormStore } from '@/stores'

const formStore = useFormStore()
</script>