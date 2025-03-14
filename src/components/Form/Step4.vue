<!-- src/components/Step3.vue -->
<template>
    <div class="text-lg md:text-xl font-bold">Pasal 4</div>
    <div class="text-base md:text-lg font-semibold">Anti-Kickback dan Anti-Fraud</div>
    <ol class="list-decimal list-outside pl-5">
        <li>
            Pihak Kedua sepakat untuk tidak memberikan imbalan, hadiah, atau bentuk kompensasi
            lain secara langsung maupun tidak langsung kepada karyawan atau perwakilan Pihak
            Pertama.
        </li>
        <li>
            Jika terdapat bukti bahwa Pihak Kedua telah memberikan kickback atau terlibat dalam
            tindakan penipuan (fraud) apa pun, Pihak Pertama berhak menempuh jalur hukum di
            pengadilan di Indonesia.
        </li>
        <li>
            Pihak Pertama memiliki program reward untuk mencegah kecurangan, di mana jika Pihak
            Kedua mengetahui adanya permintaan kickback atau praktik kecurangan oleh karyawan
            Pihak Pertama, dan dapat memberikan bukti yang cukup, maka Pihak Pertama akan
            memberikan reward sebesar Rp 10.000.000 (sepuluh juta Rupiah) kepada pelapor.
        </li>
    </ol>
</template>

<script setup>
import { useFormStore } from '@/stores'

const formStore = useFormStore()
</script>