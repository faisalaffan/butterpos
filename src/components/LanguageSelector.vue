<!-- src/components/LanguageSelector.vue -->
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

<script setup>
import { ref, onMounted, watch } from 'vue'
import { setLanguage, t } from '@/locales'

const lang = ref('en')
const langCheckbox = ref(false)

// Helper function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// Helper function to set a cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function handleChangeLanguage(newLang) {
  setLanguage(newLang)
}

onMounted(() => {
  // Check if language is saved in cookies
  const savedLang = getCookie('language');
  if (savedLang) {
    lang.value = savedLang;
    langCheckbox.value = savedLang === 'en';
  } else {
    // Detect default browser language
    const browserLang = navigator.language.toLowerCase();
    console.log(browserLang);
    if (browserLang.startsWith('id')) {
      lang.value = 'id';
      langCheckbox.value = false;
    } else {
      lang.value = 'en';
      langCheckbox.value = true;
    }
  }
  setLanguage(lang.value);
  // Save language in cookie for 365 days
  setCookie('language', lang.value, 365);
});

// Watch for changes in language
watch(lang, (val) => {
  console.log(val);
  handleChangeLanguage(val);
  // Update cookie when language changes
  setCookie('language', val, 365);
});

watch(langCheckbox, (val) => {
  console.log(val);
  if (val === false) {
    setLanguage('id');
    lang.value = 'id';
    langCheckbox.value = false;
  } else {
    setLanguage('en');
    lang.value = 'en';
    langCheckbox.value = true;
  }
  // Update cookie as well
  setCookie('language', lang.value, 365);
});
</script>

<style scoped></style>