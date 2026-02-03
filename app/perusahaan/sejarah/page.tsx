import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Sejarah Perusahaan - PT Semen Nusantara",
  description: "Perjalanan sejarah PT Semen Nusantara Indonesia sejak didirikan tahun 1985.",
}

const timeline = [
  {
    year: "1985",
    title: "Pendirian Perusahaan",
    description: "PT Semen Nusantara Indonesia didirikan di Jember, Jawa Timur dengan kapasitas produksi awal 500.000 ton per tahun.",
  },
  {
    year: "1990",
    title: "Ekspansi Pertama",
    description: "Pembangunan lini produksi kedua, meningkatkan kapasitas menjadi 1,5 juta ton per tahun.",
  },
  {
    year: "1998",
    title: "Sertifikasi ISO",
    description: "Memperoleh sertifikasi ISO 9001 untuk sistem manajemen mutu dan ISO 14001 untuk sistem manajemen lingkungan.",
  },
  {
    year: "2005",
    title: "Modernisasi Pabrik",
    description: "Investasi besar-besaran untuk modernisasi teknologi produksi dengan peralatan dari Eropa.",
  },
  {
    year: "2010",
    title: "Lini Produksi Ketiga",
    description: "Peresmian lini produksi ketiga dengan kapasitas total mencapai 6 juta ton per tahun.",
  },
  {
    year: "2015",
    title: "Kantor Jakarta",
    description: "Pembukaan kantor perwakilan di Jakarta untuk memperkuat jaringan pemasaran nasional.",
  },
  {
    year: "2020",
    title: "Program Green Cement",
    description: "Peluncuran produk PCC (Portland Composite Cement) sebagai komitmen terhadap keberlanjutan lingkungan.",
  },
  {
    year: "2024",
    title: "Ekspansi Digital",
    description: "Implementasi sistem Industry 4.0 dan digitalisasi seluruh proses produksi untuk efisiensi maksimal.",
  },
  {
    year: "2026",
    title: "Lini Produksi Keempat",
    description: "Peresmian lini produksi keempat, meningkatkan kapasitas total menjadi 12 juta ton per tahun.",
  },
]

export default function SejarahPage() {
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

          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground">
              Sejarah <span className="text-primary">Perusahaan</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Perjalanan lebih dari 40 tahun membangun fondasi yang kuat untuk Indonesia.
              Dari pabrik kecil di Jember hingga menjadi salah satu produsen semen terkemuka nasional.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 lg:pl-0 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}`}>
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300">
                      <span className="text-primary font-bold text-2xl">{item.year}</span>
                      <h3 className="mt-2 text-lg font-bold text-card-foreground">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-primary rounded-full lg:-translate-x-1/2 ring-4 ring-background" />

                  {/* Spacer for alignment on desktop */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/perusahaan/profil"
              className="text-center px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Lihat Profil Perusahaan
            </Link>
            <Link
              href="/perusahaan/manajemen"
              className="text-center px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Lihat Tim Manajemen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
