"use client"

import Image from "next/image"
import { AnimatedCounter } from "@/components/animated-counter"
import { Factory, Truck, Users, Gauge, Leaf, Building2 } from "lucide-react"

const facilityStats = [
  {
    icon: Factory,
    value: 12,
    suffix: " Juta",
    label: "Kapasitas Produksi (Ton/Tahun)",
  },
  {
    icon: Truck,
    value: 350,
    suffix: "+",
    label: "Armada Pengiriman",
  },
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Karyawan Terlatih",
  },
  {
    icon: Gauge,
    value: 4,
    suffix: "",
    label: "Lini Produksi",
  },
  {
    icon: Building2,
    value: 85000,
    suffix: "",
    label: "Luas Area (m²)",
  },
  {
    icon: Leaf,
    value: 30,
    suffix: "%",
    label: "Pengurangan Emisi Karbon",
  },
]

export function FacilitySection() {
  return (
    <section id="fasilitas" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Fasilitas Produksi</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Pabrik Berteknologi Modern
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dengan investasi teknologi terkini dan komitmen pada kualitas, fasilitas produksi kami
            mampu memenuhi kebutuhan semen nasional dengan standar internasional.
          </p>
        </div>

        {/* Facility Image */}
        <div className="mt-12 relative rounded-2xl overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src="/images/facility-aerial.jpg"
              alt="Fasilitas Produksi PT Semen Nusantara"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          </div>

          {/* Overlay Stats */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
              {facilityStats.map((stat) => (
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

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-muted rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Teknologi Rotary Kiln</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Menggunakan rotary kiln berdiameter 5 meter dengan panjang 75 meter, 
              mampu memproduksi klinker berkualitas tinggi dengan efisiensi energi optimal.
            </p>
          </div>
          <div className="bg-muted rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Sistem Pengemasan Otomatis</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lini pengemasan otomatis dengan kapasitas 3.000 kantong per jam, 
              memastikan akurasi berat dan kualitas kemasan yang konsisten.
            </p>
          </div>
          <div className="bg-muted rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Laboratorium Terintegrasi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dilengkapi laboratorium QC terakreditasi untuk pengujian kualitas real-time, 
              memastikan setiap batch produk memenuhi standar SNI dan internasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
