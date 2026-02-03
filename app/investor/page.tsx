import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function InvestorPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Hubungan Investor</h1>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="font-bold text-xl mb-2">Laporan Tahunan</h3>
              <p className="text-muted-foreground mb-4">Akses laporan keuangan dan operasional tahunan kami.</p>
              <span className="text-primary font-medium">Segera Hadir →</span>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="font-bold text-xl mb-2">Informasi Saham</h3>
              <p className="text-muted-foreground mb-4">Pantau kinerja saham PT Semen Nusantara di bursa.</p>
              <span className="text-primary font-medium">Segera Hadir →</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}