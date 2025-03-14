<!-- src/components/Step2.vue -->
<template>
    <div class="text-lg md:text-xl font-bold">Pasal 2</div>
    <div class="text-base md:text-lg font-semibold">Ketentuan Pajak</div>
    <ol class="list-decimal list-outside pl-5">
        <li>
            Setiap faktur/invoice yang diajukan oleh Pihak Kedua, jika Pihak Kedua adalah
            perorangan (individu), maka akan dikenakan pemotongan pajak PPh Pasal 21.
        </li>
        <li>
            Jika Pihak Kedua berbentuk badan usaha/perusahaan, maka akan dikenakan pemotongan
            pajak PPh Pasal 23.
        </li>
        <li>
            Pihak Pertama akan menerbitkan bukti potong (bukti pemotongan pajak) dan
            mengirimkannya kepada Pihak Kedua dalam jangka waktu 7 (tujuh) hari kerja setelah
            pembayaran dilakukan.
        </li>
    </ol>
</template>

<script setup>
import { useFormStore } from '@/stores'

const formStore = useFormStore()
</script>