import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function KarirPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Gabung Bersama Kami</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Jadilah bagian dari tim yang membangun masa depan infrastruktur Indonesia. 
          Saat ini kami sedang memperbarui daftar lowongan kerja terbaru.
        </p>
        <div className="bg-muted p-12 rounded-2xl max-w-3xl mx-auto border-2 border-dashed border-border">
          <p className="font-medium text-lg">Belum ada posisi terbuka saat ini.</p>
          <p className="text-sm text-muted-foreground mt-2">Silakan cek kembali secara berkala atau kirimkan CV Anda ke sdm@semennusantara.id</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}