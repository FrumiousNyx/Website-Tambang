import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SyaratKetentuan() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Syarat & Ketentuan</h1>
          <p className="text-muted-foreground mb-6">Terakhir diperbarui: 24 Januari 2026</p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Penerimaan Ketentuan</h2>
              <p>Dengan mengakses website PT Semen Nusantara, Anda dianggap telah membaca dan menyetujui untuk terikat oleh syarat dan ketentuan penggunaan ini.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Kekayaan Intelektual</h2>
              <p>Semua konten yang tersedia di situs ini, termasuk teks, grafis, logo, dan gambar, adalah milik PT Semen Nusantara dan dilindungi oleh undang-undang hak cipta Indonesia.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Pembatasan Tanggung Jawab</h2>
              <p>PT Semen Nusantara tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan informasi di situs ini.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}