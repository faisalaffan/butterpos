<!-- src/components/Step3.vue -->
<template>
    <form class="flex flex-col gap-6 md:gap-10">
        <div>
            <div class="text-lg md:text-xl font-bold mb-3">Informasi Pribadi</div>
            <div class="space-y-4">
                <!-- Nama lengkap -->
                <div>
                    <label for="nama_lengkap" class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                        Nama Lengkap (sesuai KTP)
                    </label>
                    <input type="text" id="nama_lengkap" placeholder="Nama lengkap"
                        class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                </div>
                <!-- Nomor Identitas -->
                <div>
                    <label for="nomor_identitas"
                        class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                        Nomor Identitas / KTP
                    </label>
                    <input type="number" id="nomor_identitas" placeholder="1234567890"
                        class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                </div>
                <!-- Unggah KTP -->
                <div>
                    <div class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                        Unggah Foto Identitas / KTP
                    </div>
                    <label for="upload_ktp"
                        class="block rounded-lg bg-[#F8F8F8] border border-dashed border-[#D6D6D6] p-[18px] cursor-pointer">
                        <input id="upload_ktp" type="file" hidden />
                        <div class="flex items-center justify-center gap-2">
                            <img class="size-5 object-contain" src="@/assets/img/svg/upload.svg" alt="Upload" />
                            <div class="text-sm font-medium text-[#797979]">Klik untuk mengunggah</div>
                        </div>
                    </label>
                </div>
                <!-- Nomor NPWP -->
                <div>
                    <label for="nomor_npwp" class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                        Nomor NPWP
                    </label>
                    <input type="number" id="nomor_npwp" placeholder="1234567890"
                        class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                </div>
                <!-- Unggah NPWP -->
                <div>
                    <div class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                        Unggah Foto NPWP
                    </div>
                    <label for="upload_npwp"
                        class="block rounded-lg bg-[#F8F8F8] border border-dashed border-[#D6D6D6] p-[18px] cursor-pointer">
                        <input id="upload_npwp" type="file" hidden />
                        <div class="flex items-center justify-center gap-2">
                            <img class="size-5 object-contain" src="@/assets/img/svg/upload.svg" alt="Upload" />
                            <div class="text-sm font-medium text-[#797979]">Klik untuk mengunggah</div>
                        </div>
                    </label>
                </div>
                <!-- Nomor WhatsApp -->
                <div>
                    <label for="nomor_wa" class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                        Nomor WhatsApp
                    </label>
                    <div class="relative">
                        <div
                            class="absolute top-0 left-0 flex items-center gap-2 bg-[#F8F8F8] py-2.5 px-3 md:p-3 border border-[#D6D6D6] rounded-l">
                            <img class="size-6" src="@/assets/img/svg/flag-indonesia.svg" alt="Flag indonesia" />
                            <svg class="size-4 text-[#525252]" fill="none" stroke-width="2" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div
                            class="absolute text-sm md:text-base text-[#525252] font-medium left-[84px] top-1/2 -translate-y-1/2">
                            +62
                        </div>
                        <input type="number" id="nomor_wa" placeholder="1234567890"
                            class="w-full block rounded border border-[#D6D6D6] outline-none py-3 pr-3 pl-[119px] md:pl-[123px] placeholder:text-[#989898]" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Informasi Perusahaan -->
        <div>
            <div class="text-lg md:text-xl font-bold mb-3">Informasi Perusahaan</div>
            <div class="space-y-4">
                <div>
                    <label for="nama_perusahaan" class="font-medium block mb-2">
                        Nama Perusahaan
                        <span class="text-[#989898]">(jika berbentuk badan usaha)</span>
                    </label>
                    <input type="text" id="nama_perusahaan" placeholder="Nama perusahaan"
                        class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                </div>
                <div>
                    <label for="nama_penanggung_jawab"
                        class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
                        Nama Penanggung Jawab / PIC
                    </label>
                    <input type="text" id="nama_penanggung_jawab" placeholder="Nama penanggung jawab"
                        class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                </div>
                <div>
                    <label for="email" class="font-medium block mb-2">
                        Alamat Email <span class="text-[#989898]">(opsional)</span>
                    </label>
                    <input type="text" id="email" placeholder="Alamat email"
                        class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                </div>
            </div>
        </div>

        <!-- Informasi Rekening Bank -->
        <div>
            <div class="text-lg md:text-xl font-bold mb-3">Informasi Rekening Bank</div>
            <div class="space-y-4">
                <div>
                    <label class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">Nama Bank
                    </label>
                    <div class="relative dropdown">
                        <div
                            class="cursor-pointer dropdown-toggle flex items-center justify-between gap-2 w-full rounded border border-[#D6D6D6] outline-none p-3">
                            <div class="dropdown-text">Pilih Bank</div>
                            <svg class="size-6" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <!-- Dropdown menu (static contoh) -->
                        <div
                            class="absolute dropdown-menu top-[calc(100%+8px)] left-0 pt-4 px-4 w-full border border-[#EDEDED] rounded overflow-hidden bg-white z-20 shadow-[0_2px_5px_0px_rgba(8,8,8,0.04),0_10px_10px_0px_rgba(8,8,8,0.03),0_22px_13px_0_rgba(8,8,8,0.02),0_40px_16px_0_rgba(8,8,8,0.01),0_62px_17px_0_rgba(8,8,8,0)] hidden">
                            <!-- dsb -->
                        </div>
                    </div>
                </div>
                <div>
                    <label for="nomor_rekening"
                        class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">Nomor Rekening
                    </label>
                    <div class="relative">
                        <input type="text" id="nomor_rekening" placeholder="012345678912"
                            class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]" />
                        <a href="#"
                            class="text-[#0023BD] text-sm font-semibold absolute top-1/2 -translate-y-1/2 right-3">Validate</a>
                    </div>
                    <div class="mt-2 text-[#E21717] text-xs md:text-sm">
                        Informasi rekening tidak ditemukan, periksa kembali data yang dimasukkan.
                    </div>
                </div>
                <div>
                    <label for="nama_pemilik_rekening"
                        class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">Nama Pemilik Rekening
                    </label>
                    <input type="text" id="nama_pemilik_rekening" placeholder="-" disabled
                        class="w-full block rounded border border-[#D6D6D6] disabled:bg-[#EDEDED] outline-none p-3 placeholder:text-[#989898]" />
                </div>
            </div>
        </div>
    </form>

    <!-- Tanda Tangan Kontrak -->
    <div class="mt-4 bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
        <div class="font-bold text-xl after:content-['*'] after:text-[#E21717] mb-4">
            Tanda Tangan Kontrak
        </div>
        <button data-modal-target="signage_modal"
            class="cursor-pointer w-full flex items-center justify-center gap-2 h-[164px] bg-[#F4F6FF] border border-dashed border-[#0433FF] rounded-lg">
            <img class="size-5" src="@/assets/img/svg/edit.svg" alt="Edit icon" />
            <div class="text-sm font-medium text-[#525252]">Klik untuk Tanda Tangan</div>
        </button>
        <!-- Contoh pratinjau tanda tangan -->
        <div
            class="mt-3 relative cursor-pointer flex items-center justify-center gap-2 h-[164px] border border-dashed border-[#0433FF] rounded-lg">
            <img class="w-36 h-full max-h-[108px] object-contain" src="@/assets/img/signage.svg" alt="Signage" />
            <div class="absolute bottom-3 md:bottom-4 right-3 md:right-4 flex items-center gap-4">
                <button class="flex items-center gap-2 cursor-pointer">
                    <img class="size-5" src="@/assets/img/svg/edit-2.svg" alt="Edit icon" />
                    <div class="text-sm font-medium text-[#525252]">Edit</div>
                </button>
                <svg class="cursor-pointer size-5 text-[#CA0A0A]" fill="none" stroke-width="2" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useFormStore } from '@/stores'

const formStore = useFormStore()
</script>