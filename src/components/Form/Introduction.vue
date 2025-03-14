<script setup>
import { useFormStore } from '@/stores'

const formStore = useFormStore()
</script>
<template>
    <div class="text-lg md:text-xl font-bold">Perjanjian Vendor</div>
    <div>
        Pada hari ini, [tanggal penandatanganan], telah terjadi kesepakatan antara:
    </div>
    <ol class="list-decimal list-outside pl-5 [&>li::marker]:font-bold">
        <li>
            <span class="font-bold">PT Manhattan Slice Indonesia</span> (selanjutnya disebut
            "Pihak Pertama"), berkedudukan di [alamat kantor], dan
        </li>
        <li>
            <span class="font-bold">[Nama Vendor / Perusahaan Vendor]</span> (selanjutnya
            disebut "Pihak Kedua"), yang diwakili oleh [Nama PIC], berkedudukan di [alamat
            vendor],
        </li>
    </ol>
    <div>secara bersama-sama selanjutnya disebut "Para Pihak".</div>
    <div>
        <span class="font-bold">Para Pihak</span> dengan ini sepakat untuk mengikatkan diri
        dalam Perjanjian Vendor ("Perjanjian") sebagai berikut:
    </div>
</template>