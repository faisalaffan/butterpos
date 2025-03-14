<!-- src/components/Step3.vue -->
<template>
    <div class="text-lg md:text-xl font-bold">Pasal 3</div>
    <div class="text-base md:text-lg font-semibold">Jadwal Pembayaran</div>
    <ol class="list-decimal list-outside pl-5">
        <li>
            Pihak Pertama akan melakukan pembayaran kepada Pihak Kedua pada tanggal 5 (lima)
            dan 20 (dua puluh) setiap bulannya.
        </li>
        <li>
            Apabila tanggal 5 (lima) atau 20 (dua puluh) bertepatan dengan hari libur nasional
            atau akhir pekan, maka pembayaran akan diproses pada hari kerja berikutnya.
        </li>
        <li>
            Pembayaran lebih awal (di luar jadwal) dapat dipertimbangkan secara case by case
            dan memerlukan persetujuan Manajemen Pihak Pertama.
        </li>
    </ol>
</template>

<script setup>
import { useFormStore } from '@/stores'

const formStore = useFormStore()
</script>