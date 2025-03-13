// src/locales/index.js
import en from './en.json'
import id from './id.json'

function getBrowserLanguage() {
    // Ambil dari navigator.language, navigator.languages, dsb
    const lang = navigator.language.toLowerCase()
    if (lang.startsWith('id')) return 'id'
    // Jika bukan ID, kita default ke EN
    return 'en'
}

// State bahasa kita
let currentLang = getBrowserLanguage()

export function setLanguage(lang) {
    currentLang = lang
}

export function t(key) {
    // t() akan membaca currentLang.value
    // sehingga setiap kali currentLang berubah,
    // t() ikut berubah di template mana pun.
    const dictionary = currentLang.value === 'id' ? id : en

    const parts = key.split('.')
    let result = dictionary
    for (const part of parts) {
        if (!result[part]) return key
        result = result[part]
    }
    return result
}