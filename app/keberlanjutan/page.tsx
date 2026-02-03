import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Leaf, Recycle, Droplets, Sun } from "lucide-react"

export default function KeberlanjutanPage() {
  const inisiatif = [
    { icon: <Leaf className="w-8 h-8 text-green-500" />, title: "Rehabilitasi Lahan", desc: "Mengembalikan ekosistem pasca tambang menjadi hutan hijau." },
    { icon: <Recycle className="w-8 h-8 text-blue-500" />, title: "Energi Alternatif", desc: "Menggunakan limbah industri sebagai bahan bakar substitusi." },
    { icon: <Droplets className="w-8 h-8 text-cyan-500" />, title: "Konservasi Air", desc: "Sistem daur ulang air untuk operasional pabrik yang efisien." },
    { icon: <Sun className="w-8 h-8 text-yellow-500" />, title: "Efisiensi Karbon", desc: "Target penurunan emisi karbon hingga 20% pada tahun 2030." },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-green-50/50 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase tracking-wider">Sustainability</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">Membangun Masa Depan Hijau</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Komitmen kami melampaui produksi semen; kami berdedikasi untuk menjaga keseimbangan alam demi generasi mendatang.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inisiatif.map((item, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all">
                {item.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}