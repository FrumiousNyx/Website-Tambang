"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { locales, type Language, type Locale } from '@/lib/locales'

interface LanguageState {
  lang: Language
  setLang: (lang: Language) => void
  t: Locale
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: 'id',
      setLang: (lang) => set({ lang, t: locales[lang] }),
      get t() {
        return locales[get().lang]
      },
    }),
    {
      name: 'semen-nusantara-lang',
      partialize: (state) => ({ lang: state.lang }),
    }
  )
)

// Helper hook to get translations
export function useTranslations() {
  const { lang } = useLanguage()
  return locales[lang]
}
