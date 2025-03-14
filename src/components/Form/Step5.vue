<!-- src/components/Step3.vue -->
<template>
    <div class="text-lg md:text-xl font-bold">Pasal 5</div>
    <div class="text-base md:text-lg font-semibold">Data Pihak Kedua</div>
    <div>Pihak Kedua wajib melampirkan dan/atau mencantumkan data berikut:</div>
    <ol class="list-decimal list-outside pl-5 font-medium">
        <li>Nama Lengkap (sesuai KTP).</li>
        <li>Nomor KTP.</li>
        <li>Nomor NPWP.</li>
        <li>Nama Perusahaan (Jika berbentuk badan usaha).</li>
        <li>Nama PIC / Penanggung Jawab.</li>
        <li>Nomor Telepon.</li>
        <li>Alamat Email (opsional).</li>
        <li>Data Rekening Bank.</li>
        <ul class="list-disc list-outside pl-6">
            <li>Nama Bank.</li>
            <li>Nomor Rekening.</li>
            <li>Nama Pemilik Rekening.</li>
        </ul>
    </ol>
</template>

<script setup>
import { useFormStore } from '@/stores'

const formStore = useFormStore()
</script>