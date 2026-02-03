"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedCounter } from "@/components/animated-counter"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Factory,
  Truck,
  Users,
  Gauge,
  Leaf,
  Building2,
  Ship,
  Train,
  Warehouse,
  ArrowLeft,
  FlaskConical,
  Cog,
  Zap,
} from "lucide-react"

const productionStats = [
  { icon: Factory, value: 12, suffix: " Juta", label: "Kapasitas Produksi (Ton/Tahun)" },
  { icon: Gauge, value: 4, suffix: "", label: "Lini Produksi Aktif" },
  { icon: Building2, value: 85000, suffix: "", label: "Luas Area Pabrik (m²)" },
  { icon: Users, value: 2500, suffix: "+", label: "Karyawan Terlatih" },
  { icon: Leaf, value: 30, suffix: "%", label: "Pengurangan Emisi Karbon" },
  { icon: Zap, value: 95, suffix: "%", label: "Efisiensi Energi" },
]

const logisticsStats = [
  { icon: Truck, value: 350, suffix: "+", label: "Armada Truk" },
  { icon: Ship, value: 8, suffix: "", label: "Kapal Pengangkut" },
  { icon: Train, value: 12, suffix: "", label: "Gerbong Kereta" },
  { icon: Warehouse, value: 45, suffix: "", label: "Gudang Distribusi" },
]

const facilities = [
  {
    icon: Cog,
    title: "Rotary Kiln Modern",
    description: "4 unit rotary kiln berdiameter 5 meter dengan panjang 75 meter, dilengkapi preheater 5 stage untuk efisiensi pembakaran optimal.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorium QC Terakreditasi",
    description: "Laboratorium kontrol kualitas dengan akreditasi KAN, dilengkapi XRF, XRD, dan peralatan pengujian mekanis modern.",
  },
  {
    icon: Factory,
    title: "Cement Mill Vertikal",
    description: "6 unit cement mill vertikal dengan kapasitas masing-masing 200 ton/jam untuk penggilingan klinker menjadi semen halus.",
  },
  {
    icon: Warehouse,
    title: "Silo Penyimpanan",
    description: "12 silo penyimpanan dengan total kapasitas 120.000 ton untuk menjaga kualitas semen sebelum pengemasan.",
  },
  {
    icon: Zap,
    title: "Pembangkit Listrik Captive",
    description: "Pembangkit listrik sendiri dengan kapasitas 50 MW memanfaatkan waste heat recovery dari proses produksi.",
  },
  {
    icon: Leaf,
    title: "Sistem Pengendalian Emisi",
    description: "Electrostatic precipitator dan bag filter untuk mengendalikan emisi debu hingga di bawah 50 mg/Nm³.",
  },
]

export default function FasilitasPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Fasilitas Produksi</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Pabrik Berteknologi <span className="text-primary">Kelas Dunia</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Dengan investasi teknologi terkini dan komitmen pada kualitas, fasilitas produksi kami
              mampu memenuhi kebutuhan semen nasional dengan standar internasional.
            </p>
          </div>
        </div>
      </section>

      {/* Main Facility Image with Stats */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="aspect-[21/9] relative">
              <Image
                src="/images/facility-aerial.jpg"
                alt="Fasilitas Produksi PT Semen Nusantara dari Udara"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
            </div>

            {/* Production Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
              <h2 className="text-2xl font-bold text-primary-foreground mb-6">Kapasitas Produksi</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {productionStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-card/90 backdrop-blur-sm rounded-xl p-4 text-center group hover:bg-primary transition-colors duration-300"
                  >
                    <stat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground mx-auto mb-2 transition-colors" />
                    <div className="text-2xl lg:text-3xl font-bold text-card-foreground group-hover:text-primary-foreground transition-colors">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
                    </div>
                    <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 mt-1 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Details */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Fasilitas Utama</h2>
            <p className="mt-4 text-muted-foreground">
              Peralatan dan teknologi modern untuk menjamin kualitas produksi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <Card key={facility.title} className="bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground">{facility.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section id="logistik" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Jaringan Distribusi</span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">
                Kapasitas Logistik Terintegrasi
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Dengan armada pengiriman multimodal yang terintegrasi, kami mampu mendistribusikan
                produk ke seluruh Indonesia dengan tepat waktu dan efisien. Jaringan gudang distribusi
                yang tersebar di berbagai provinsi memastikan ketersediaan stok di seluruh wilayah.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {logisticsStats.map((stat) => (
                  <div key={stat.label} className="bg-muted rounded-xl p-4">
                    <stat.icon className="w-6 h-6 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/kontak">Tanyakan Pengiriman</Link>
              </Button>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/mining-operation.jpg"
                alt="Operasi Logistik PT Semen Nusantara"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">Tertarik Kunjungan Pabrik?</h2>
          <p className="mt-4 text-primary-foreground/80">
            Kami membuka kesempatan kunjungan industri untuk institusi pendidikan, mitra bisnis, dan stakeholder.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 bg-card text-card-foreground hover:bg-card/90">
            <Link href="/kontak">Ajukan Kunjungan</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
