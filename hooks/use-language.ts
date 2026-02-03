"use client"

import { create } from 'zustand'

interface LanguageState {
  lang: 'id' | 'en'
  setLang: (lang: 'id' | 'en') => void
}

export const useLanguage = create<LanguageState>((set) => ({
  lang: 'id',
  setLang: (lang) => set({ lang }),
}))