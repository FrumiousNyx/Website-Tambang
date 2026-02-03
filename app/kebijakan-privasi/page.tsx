import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function KebijakanPrivasi() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Kebijakan Privasi</h1>
          <p className="text-muted-foreground mb-6">Terakhir diperbarui: 24 Januari 2026</p>
          
          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informasi yang Kami Kumpulkan</h2>
              <p>PT Semen Nusantara mengumpulkan informasi yang Anda berikan langsung kepada kami saat mengisi formulir kontak atau berlangganan buletin kami. Ini mungkin termasuk nama, alamat email, dan nomor telepon.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Penggunaan Informasi</h2>
              <p>Kami menggunakan informasi Anda untuk menanggapi pertanyaan Anda, memberikan layanan pelanggan, dan mengirimkan pembaruan mengenai kegiatan operasional atau berita perusahaan.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Keamanan Data</h2>
              <p>Kami menerapkan langkah-langkah keamanan teknis untuk melindungi data pribadi Anda. Namun, perlu diingat bahwa tidak ada metode transmisi melalui internet yang 100% aman.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}