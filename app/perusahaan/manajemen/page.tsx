import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, Mail } from "lucide-react"

export const metadata = {
  title: "Manajemen - PT Semen Nusantara",
  description: "Tim manajemen dan kepemimpinan PT Semen Nusantara Indonesia.",
}

const boardOfDirectors = [
  {
    name: "Ir. H. Bambang Sutrisno, M.M.",
    position: "Direktur Utama",
    description: "Bergabung sejak 2010. Sebelumnya menjabat sebagai Direktur Operasional. Berpengalaman 30+ tahun di industri semen.",
    image: "/images/cement-factory.jpg",
  },
  {
    name: "Dr. Sri Mulyani, S.E., M.B.A.",
    position: "Direktur Keuangan",
    description: "Bergabung sejak 2015. Memiliki latar belakang di perbankan dan keuangan korporasi selama 20 tahun.",
    image: "/images/cement-factory.jpg",
  },
  {
    name: "Ir. Ahmad Fauzi, M.T.",
    position: "Direktur Operasional",
    description: "Bergabung sejak 2018. Ahli di bidang teknik kimia dan proses produksi semen dengan pengalaman 25 tahun.",
    image: "/images/cement-factory.jpg",
  },
  {
    name: "Drs. Eko Prasetyo, M.M.",
    position: "Direktur Pemasaran",
    description: "Bergabung sejak 2019. Berpengalaman dalam strategi pemasaran B2B dan manajemen distribusi.",
    image: "/images/cement-factory.jpg",
  },
]

const boardOfCommissioners = [
  {
    name: "Prof. Dr. H. Surya Dharma, M.Sc.",
    position: "Komisaris Utama",
    description: "Akademisi dan praktisi industri dengan pengalaman 35+ tahun. Mantan Rektor Universitas Negeri.",
  },
  {
    name: "Ir. Ratna Dewi, M.M.",
    position: "Komisaris Independen",
    description: "Mantan Direktur di perusahaan BUMN. Ahli dalam tata kelola perusahaan dan manajemen risiko.",
  },
  {
    name: "H. Agus Salim, S.H., M.H.",
    position: "Komisaris",
    description: "Praktisi hukum bisnis dengan pengalaman 25 tahun. Spesialisasi dalam hukum korporasi dan pertambangan.",
  },
]

export default function ManajemenPage() {
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
              Tim <span className="text-primary">Manajemen</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Dipimpin oleh para profesional berpengalaman yang berkomitmen membawa perusahaan
              menuju pertumbuhan berkelanjutan dan keunggulan operasional.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Dewan Direksi</h2>
            <p className="mt-4 text-muted-foreground">
              Tim eksekutif yang bertanggung jawab atas operasional harian perusahaan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardOfDirectors.map((person) => (
              <Card key={person.name} className="bg-card border-border overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/5] bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">
                        {person.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-card-foreground">{person.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{person.position}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{person.description}</p>
                  <div className="flex gap-3 mt-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Commissioners */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Dewan Komisaris</h2>
            <p className="mt-4 text-muted-foreground">
              Pengawasan dan pemberian arahan strategis untuk keberlanjutan perusahaan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {boardOfCommissioners.map((person) => (
              <Card key={person.name} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {person.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
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

      {/* Navigation */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/perusahaan/profil"
              className="text-center px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Lihat Profil Perusahaan
            </Link>
            <Link
              href="/perusahaan/sejarah"
              className="text-center px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Lihat Sejarah Perusahaan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
