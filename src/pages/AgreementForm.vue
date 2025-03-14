<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Headers from '../components/Headers.vue'
import { Signature, VueSignaturePad } from '@selemondev/vue3-signature-pad'
// import { useSignatureStore } from '@/stores/signatureStore'
// import type { CanvasSignature } from '@selemondev/vue3-signature-pad'

import Introduction from '../components/Form/Introduction.vue'
import Step1 from '../components/Form/Step1.vue'
import Step2 from '../components/Form/Step2.vue'
import Step3 from '../components/Form/Step3.vue'
import Step4 from '../components/Form/Step4.vue'
import Step5 from '../components/Form/Step5.vue'
import Step6 from '../components/Form/Step6.vue'
import Step7 from '../components/Form/Step7.vue'
import Approval from '../components/Form/Approval.vue'




const { t } = useI18n()



// Daftar "step" yang akan ditampilkan
const steps = [
  'pendahuluan',
  'pasal_1',
  'pasal_2',
  'pasal_3',
  'pasal_4',
  'pasal_5',
  'pasal_6',
  'pasal_7',
  'form_persetujuan',
]

// Label untuk tab (harus urutannya sama dengan array steps)
const tabLabels = [
  'Pendahuluan',
  'Pasal 1',
  'Pasal 2',
  'Pasal 3',
  'Pasal 4',
  'Pasal 5',
  'Pasal 6',
  'Pasal 7',
  'Form Persetujuan',
]

// Index step saat ini
const currentIndex = ref(0)
const currentStep = computed(() => steps[currentIndex.value])

function goToStep(index) {
  currentIndex.value = index
}

function nextStep() {
  if (currentIndex.value < steps.length - 1) {
    currentIndex.value++
  }
}

function prevStep() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const options = ref({
  penColor: 'rgb(0,0,0)',
  backgroundColor: 'rgb(255, 255, 255)',
  maxWidth: 2,
  minWidth: 2,
})

const colors = [
  {
    color: 'rgb(51, 133, 255)',
  },
  {
    color: 'rgb(85, 255, 51)',
  },
  {
    color: 'rgb(255, 85, 51)',
  },
]
</script>

<template>
  <!-- HEADER -->
  <Headers />

  <!-- BODY / CONTENT -->
  <div class="flex-grow pt-4 pb-12 md:py-10 px-4">
    <div class="tabs max-w-[924px] w-full mx-auto flex flex-col gap-4">
      <!-- Kartu informasi vendor -->
      <div
        class="flex flex-col md:flex-row items-start md:items-center gap-5 p-4 md:p-5 rounded-lg border border-[#EDEDED] bg-white">
        <div class="size-[60px] md:size-20 rounded-lg border border-[#D6D6D6] overflow-hidden">
          <img class="size-full object-contain" src="@/assets/img/sinamon-logo.svg" alt="Sinamon logo" />
        </div>
        <div>
          <div class="mb-4 md:mb-3 text-xl md:text-2xl text-[#080808] font-bold">
            PT Sinamon Group Indonesia
          </div>
          <div class="flex items-start md:items-center gap-2">
            <svg class="size-5 text-[#989898]" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <div class="text-sm text-[#525252]">
              Jakarta Timur, Indonesia · sinamon.indonesia@gmail.com
            </div>
          </div>
        </div>
      </div>

      <!-- TAB LINKS -->
      <div class="relative rounded-lg border border-[#EDEDED] overflow-hidden">
        <div class="tab-links flex items-center justify-start gap-2 md:gap-4 bg-white p-3 rounded-lg overflow-x-auto">
          <!-- Gradasi kanan-kiri untuk efek scroll -->
          <div
            class="absolute md:hidden right-0 top-0 h-full w-6 pointer-events-none bg-gradient-to-l from-white to-white/0">
          </div>
          <div
            class="absolute md:hidden left-0 top-0 h-full w-6 pointer-events-none bg-gradient-to-r from-white to-white/0">
          </div>

          <!-- Buat link dinamis berdasarkan steps -->
          <!-- <a v-for="(label, index) in tabLabels" :key="index" class="whitespace-nowrap py-2 px-3 text-[#525252] text-sm font-medium rounded
                     [&.active]:bg-[#F4F6FF] [&.active]:text-[#0023BD]"
            :class="currentStep === steps[index] ? 'bg-[#F4F6FF] text-[#0023BD]' : ''" @click.prevent="goToStep(index)">
            {{ label }}
          </a> -->
          <a v-for="(label, index) in tabLabels" :key="index"
            :class="[(currentStep === steps[index] ? 'active' : ''), 'whitespace-nowrap py-2 px-3 text-[#525252] [&.active]:bg-[#F4F6FF] [&.active]:text-[#0023BD] text-sm font-medium rounded']"
            style="cursor: pointer;" @click.prevent="goToStep(index)">
            {{ label }}
          </a>
        </div>
      </div>

      <!-- TAB CONTENTS -->
      <div>
        <div class="tab-contents mb-6 md:mb-8">
          <!-- Pendahuluan -->
          <section v-show="currentStep === 'pendahuluan'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <Introduction />
          </section>

          <!-- Pasal 1 -->
          <section v-show="currentStep === 'pasal_1'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <Step1 />
          </section>

          <!-- Pasal 2 -->
          <section v-show="currentStep === 'pasal_2'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <Step2 />
          </section>

          <!-- Pasal 3 -->
          <section v-show="currentStep === 'pasal_3'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <Step3 />
          </section>

          <!-- Pasal 4 -->
          <section v-show="currentStep === 'pasal_4'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <Step4 />
          </section>

          <!-- Pasal 5 -->
          <section v-show="currentStep === 'pasal_5'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <Step5 />
          </section>

          <!-- Pasal 6 -->
          <section v-show="currentStep === 'pasal_6'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <Step6 />
          </section>

          <!-- Pasal 7 -->
          <section v-show="currentStep === 'pasal_7'"
            class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <Step7 />
          </section>

          <!-- FORM PERSETUJUAN -->
          <section v-show="currentStep === 'form_persetujuan'"
            class="md:block:opacity-100 text-sm md:text-base gap-6 md:gap-10 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <!-- Form persetujuan -->
            <Approval />
          </section>
        </div>

        <!-- BUTTONS Next / Prev / Submit -->
        <div class="flex items-center flex-col md:flex-row gap-3 md:gap-4">
          <!-- Tombol Sebelumnya -->
          <button
            class="md:order-1 order-2 rounded bg-white border border-[#B2B2B2] text-[#080808] py-3 px-6 text-center w-full font-semibold cursor-pointer"
            :disabled="currentIndex === 0" @click="prevStep">
            Sebelumnya
          </button>

          <!-- Tombol Selanjutnya -->
          <button v-if="currentIndex < steps.length - 1"
            class="md:order-2 order-1 rounded bg-[#0433FF] border border-[#0433FF] text-white py-3 px-6 text-center w-full font-semibold cursor-pointer"
            @click="nextStep">
            Selanjutnya
          </button>

          <!-- Tombol Submit (hanya muncul di step terakhir) -->
          <a v-else href="success.html"
            class="md:order-2 order-1 rounded bg-[#0433FF] text-white py-3 px-6 text-center w-full font-semibold cursor-pointer">
            {{ t('form.submit') }}
            <!-- Submit -->
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL TANDA TANGAN -->
  <div id="signage_modal"
    class="fixed modal hidden top-0 left-0 w-screen h-screen bg-[#080808]/40 flex items-end md:items-center justify-center md:p-6">
    <div class="modal-content bg-white rounded-t-2xl md:rounded-lg px-4 pt-4 pb-6 md:p-6 w-full md:w-[800px]">
      <div class="flex items-center justify-between mb-5">
        <div class="text-lg md:text-xl font-semibold text-[#080808]">Buat Tanda Tangan</div>
        <button class="modal-close cursor-pointer size-5 md:size-6">
          <svg class="size-6 text-[#525252]" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mb-6">
        <div class="signature-container">
          <!-- <VueSignaturePad ref='signature' height='400px' width='950px' :max-width='options.maxWidth'
            :min-width='options.minWidth' :options='{
              penColor: options.penColor,
              backgroundColor: options.backgroundColor,
            }' /> -->
          <!-- <div v-if="showPlaceholder" class="signature-placeholder">
            Gambar tanda tangan di sini
          </div>
          <button @click="clear">Hapus</button> -->
        </div>
        <!-- <div
          class="bg-[#F8F8F8] text-[#989898] border border-[#EDEDED] h-[220px] flex items-center justify-center rounded-lg">
          Gambar tanda tangan di sini
        </div> -->
        <div
          class="mt-3 bg-[#F8F8F8] border border-[#EDEDED] h-[220px] pt-5 md:pt-0 flex items-start md:items-center justify-center rounded-lg relative">
          <img class="size-full max-h-[150px] md:max-h-[180px] object-contain" src="@/assets/img/signage.svg"
            alt="Signage" />
          <button class="absolute bottom-6 right-6 text-sm font-semibold text-[#CA0A0A]">
            Hapus
          </button>
        </div>
      </div>
      <div class="flex items-stretch md:items-center justify-end flex-col md:flex-row gap-3">
        <button
          class="order-2 md:order-1 modal-close cursor-pointer rounded py-3 px-6 bg-white border border-[#B2B2B2] font-semibold text-[#080808]">
          Batal
        </button>
        <button class="order-1 md:order-2 cursor-pointer rounded py-3 px-6 bg-[#EDEDED] font-semibold text-[#B2B2B2]">
          Buat Tanda Tangan
        </button>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="w-full border-t border-[#EDEDED] pt-4 pb-5 md:py-6">
    <div class="flex flex-col md:flex-row gap-4 items-center justify-between mx-auto max-w-7xl px-4 lg:px-16">
      <div class="flex items-center gap-2">
        <img class="size-9 object-contain" src="@/assets/img/logo.svg" alt="ButterPOS logo" />
        <div class="text-sm text-[#525252]">©2024 Butter POS. All rights reserved</div>
      </div>
      <div class="flex items-center gap-6">
        <a href="#"><img class="size-5" src="@/assets/img/fb.svg" alt="Facebook icon" /></a>
        <a href="#"><img class="size-5" src="@/assets/img/ig.svg" alt="Instagram icon" /></a>
        <a href="#"><img class="size-5" src="@/assets/img/x.svg" alt="X icon" /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.signature-container {
  position: relative;
}

.signature-placeholder {
  pointer-events: none;
  font-size: 16px;
  color: gray;
}
</style>