"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, Mail, Globe } from "lucide-react"

// --- LOCAL CMS DATA (Data Terpusat & Multi-Bahasa) ---
const MANAGEMENT_DATA = {
  id: {
    heroTitle: "Tim Manajemen",
    heroDesc: "Dipimpin oleh para profesional berpengalaman yang berkomitmen membawa perusahaan menuju pertumbuhan berkelanjutan.",
    dirTitle: "Dewan Direksi",
    comTitle: "Dewan Komisaris",
    backBtn: "Kembali ke Beranda",
    directors: [
      { name: "Bahlil", position: "Direktur Utama", description: "Berpengalaman 30+ tahun di industri semen dan investasi nasional." },
      { name: "Bahlil", position: "Direktur Keuangan", description: "Ahli dalam manajemen perbankan dan keuangan korporasi selama 20 tahun." },
      { name: "Bahlil", position: "Direktur Operasional", description: "Spesialis teknik kimia dan proses produksi semen efisiensi tinggi." },
      { name: "Bahlil", position: "Direktur Pemasaran", description: "Pakar strategi pemasaran B2B dan manajemen distribusi global." },
    ],
    commissioners: [
      { name: "Bahlil", position: "Komisaris Utama", description: "Memberikan arahan strategis untuk tata kelola perusahaan yang transparan." },
      { name: "Bahlil", position: "Komisaris Independen", description: "Mantan Direktur BUMN dengan fokus manajemen risiko." },
      { name: "Bahlil", position: "Komisaris", description: "Praktisi hukum bisnis dan spesialis hukum pertambangan." },
    ]
  },
  en: {
    heroTitle: "Management Team",
    heroDesc: "Led by experienced professionals committed to leading the company towards sustainable growth and operational excellence.",
    dirTitle: "Board of Directors",
    comTitle: "Board of Commissioners",
    backBtn: "Back to Home",
    directors: [
      { name: "Bahlil", position: "President Director", description: "30+ years of experience in the cement industry and national investment." },
      { name: "Bahlil", position: "Finance Director", description: "Expert in banking management and corporate finance for 20 years." },
      { name: "Bahlil", position: "Operational Director", description: "Specialist in chemical engineering and high-efficiency cement production." },
      { name: "Bahlil", position: "Marketing Director", description: "Expert in B2B marketing strategies and global distribution management." },
    ],
    commissioners: [
      { name: "Bahlil", position: "President Commissioner", description: "Provides strategic direction for transparent corporate governance." },
      { name: "Bahlil", position: "Independent Commissioner", description: "Former SOE Director with a focus on risk management." },
      { name: "Bahlil", position: "Commissioner", description: "Business law practitioner and mining law specialist." },
    ]
  }
}

export default function ManajemenPage() {
  const [lang, setLang] = useState<'id' | 'en'>('id')
  const content = MANAGEMENT_DATA[lang]

  return (
    <main className="min-h-screen">
      <Header />

      {/* --- SIMULASI MULTI-BAHASA TOGGLE --- */}
      <div className="fixed top-24 right-4 z-50">
        <button 
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-all font-bold"
        >
          <Globe className="w-4 h-4" />
          {lang === 'id' ? 'Switch to English' : 'Ubah ke Bahasa Indonesia'}
        </button>
      </div>

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {content.backBtn}
          </Link>

          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {lang === 'id' ? 'Tentang Kami' : 'About Us'}
            </span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground">
              {content.heroTitle.split(" ")[0]} <span className="text-primary">{content.heroTitle.split(" ")[1]}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {content.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors (Local CMS Loop) */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">{content.dirTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.directors.map((person, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/5] bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">B</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-card-foreground">{person.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{person.position}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{person.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Commissioners (Local CMS Loop) */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">{content.comTitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {content.commissioners.map((person, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">B</span>
                  </div>
                  <h3 className="font-bold text-card-foreground">{person.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{person.position}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{person.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}