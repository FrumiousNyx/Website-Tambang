import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Target, Eye, Award, Shield, Leaf, Users } from "lucide-react"

export const metadata = {
  title: "Profil Perusahaan - PT Semen Nusantara",
  description: "Profil PT Semen Nusantara Indonesia, produsen semen terkemuka dengan kapasitas produksi 12 juta ton per tahun.",
}

const values = [
  {
    icon: Award,
    title: "Kualitas",
    description: "Berkomitmen menghasilkan produk berkualitas tinggi sesuai standar SNI dan internasional.",
  },
  {
    icon: Shield,
    title: "Integritas",
    description: "Menjalankan bisnis dengan etika tinggi, transparansi, dan akuntabilitas.",
  },
  {
    icon: Users,
    title: "Kemitraan",
    description: "Membangun hubungan yang saling menguntungkan dengan seluruh pemangku kepentingan.",
  },
  {
    icon: Leaf,
    title: "Keberlanjutan",
    description: "Beroperasi dengan memperhatikan aspek lingkungan dan tanggung jawab sosial.",
  },
]

export default function ProfilPage() {
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground">
                Profil <span className="text-primary">Perusahaan</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                PT Semen Nusantara Indonesia adalah perusahaan produsen semen terkemuka di Indonesia
                yang telah melayani kebutuhan pembangunan nasional selama lebih dari 40 tahun.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Dengan kapasitas produksi 12 juta ton per tahun dan jaringan distribusi yang
                mencakup seluruh wilayah Indonesia, kami berkomitmen menjadi mitra terpercaya
                dalam membangun infrastruktur dan hunian berkualitas untuk bangsa Indonesia.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/cement-factory.jpg"
                alt="Pabrik PT Semen Nusantara"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="visi-misi" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Visi</h2>
                <p className="mt-4 text-primary-foreground/90 leading-relaxed text-lg">
                  Menjadi perusahaan semen terdepan di Indonesia yang berkelanjutan, inovatif,
                  dan memberikan nilai tambah bagi seluruh pemangku kepentingan.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-secondary-foreground border-0">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-secondary-foreground/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Misi</h2>
                <ul className="mt-4 space-y-3 text-secondary-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    Menghasilkan produk semen berkualitas tinggi dengan harga kompetitif.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    Menerapkan teknologi ramah lingkungan dalam proses produksi.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    Mengembangkan sumber daya manusia yang kompeten dan berintegritas.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    Memberikan kontribusi positif bagi masyarakat dan lingkungan sekitar.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Nilai-Nilai Perusahaan</h2>
            <p className="mt-4 text-muted-foreground">
              Prinsip yang menjadi landasan dalam setiap aktivitas bisnis kami
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-card-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Perusahaan dalam Angka</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "40+", label: "Tahun Pengalaman" },
              { value: "12 Juta", label: "Ton Kapasitas/Tahun" },
              { value: "2.500+", label: "Karyawan" },
              { value: "34", label: "Provinsi Terjangkau" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</div>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/perusahaan/sejarah"
              className="text-center px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Lihat Sejarah Perusahaan
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
