"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { FacilitySection } from "@/components/facility-section"
import { ProductionChart } from "@/components/production-chart"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

export default function Home() {
  // Simulasi State Bahasa Global di Beranda
  const [lang, setLang] = useState<'id' | 'en'>('id')

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen">
        {/* Header sekarang menerima fungsi untuk mengubah bahasa secara global */}
        <Header />
        
        {/* Catatan: Nantinya setiap section di bawah ini bisa menerima prop 'lang' 
            agar teks di dalamnya (seperti "Tentang Kami" jadi "About Us") berubah otomatis.
        */}
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FacilitySection />
        <ProductionChart />
        <NewsSection />
        
        {/* ContactSection sudah kita revisi menjadi Form Kompleks Karier/Bisnis */}
        <ContactSection />
        
        <Footer />
      </main>
    </SmoothScrollProvider>
  )
}