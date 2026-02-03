import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cement-factory.jpg"
          alt="Pabrik Semen Nusantara"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-card-foreground font-medium">Produsen Semen Terpercaya Sejak 1985</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-card-foreground leading-tight text-balance">
            Membangun Indonesia dengan{" "}
            <span className="text-primary">Kekuatan</span> dan{" "}
            <span className="text-primary">Kualitas</span>
          </h1>
          
          <p className="mt-6 text-lg text-card-foreground/80 max-w-2xl leading-relaxed">
            PT Semen Nusantara adalah pemimpin industri semen nasional dengan kapasitas produksi
            12 juta ton per tahun, melayani proyek infrastruktur dan konstruksi di seluruh nusantara.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Link href="/produk/opc">
                Lihat Produk Kami
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-card-foreground/30 text-card-foreground hover:bg-card-foreground/10 gap-2 bg-transparent">
              <Link href="/perusahaan/profil">
                <Play className="w-4 h-4" />
                Lihat Profil Perusahaan
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "40+", label: "Tahun Pengalaman" },
              { value: "12M", label: "Ton/Tahun Kapasitas" },
              { value: "2.500+", label: "Karyawan" },
              { value: "34", label: "Provinsi Terjangkau" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-card-foreground/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
