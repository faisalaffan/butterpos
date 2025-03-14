<script setup>
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const langCheckbox = ref(false)


onMounted(() => {
  if (locale.value == "en") {
    langCheckbox.value = true
  } else {
    langCheckbox.value = false
  }
})

watch(langCheckbox, (v) => {
  let lang = 'en'
  if (v == true) {
    lang = 'en'
  } else {
    lang = 'id'
  }
  locale.value = lang
  localStorage.setItem('locale', lang)
})

</script>

<style scoped></style>
<template>
  <label for="langToggle" class="inline-flex items-center gap-0.5 p-1 cursor-pointer rounded-md bg-[#EDEDED]">
    <input id="langToggle" type="checkbox" class="hidden peer" v-model="langCheckbox" />
    <span class="group p-2 rounded bg-white peer-checked:bg-[#EDEDED] flex items-center gap-1.5">
      <img class="size-4 object-contain" src="@/assets/img/id-flag.svg" alt="Indonesia lang flag" />
      <div class="text-[#080808] group-peer-checked:text-[#989898] text-sm font-semibold">ID</div>
    </span>
    <span class="group p-2 rounded bg-[#EDEDED] peer-checked:bg-white flex items-center gap-1.5">
      <img class="size-4 object-contain" src="@/assets/img/en-flag.svg" alt="English lang flag" />
      <div class="text-[#989898] group-peer-checked:text-[#080808] text-sm font-semibold">EN</div>
    </span>
  </label>
</template>