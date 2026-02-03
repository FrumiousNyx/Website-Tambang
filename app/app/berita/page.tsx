import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react"

export const metadata = {
  title: "Berita & Kegiatan - PT Semen Nusantara",
  description: "Update terbaru seputar kegiatan perusahaan, CSR, dan pencapaian PT Semen Nusantara Indonesia.",
}

const newsItems = [
  {
    id: 1,
    title: "Peresmian Lini Produksi Ke-4 PT Semen Nusantara",
    excerpt: "Menteri Perindustrian meresmikan lini produksi terbaru yang meningkatkan kapasitas produksi tahunan hingga 3 juta ton. Ekspansi ini merupakan bagian dari rencana strategis perusahaan untuk memenuhi permintaan semen domestik yang terus meningkat.",
    image: "/images/news-1.jpg",
    date: "15 Januari 2026",
    category: "Perusahaan",
    slug: "peresmian-lini-produksi-ke-4",
    featured: true,
  },
  {
    id: 2,
    title: "Program CSR Pembangunan Sekolah di Desa Binaan",
    excerpt: "Komitmen berkelanjutan dalam meningkatkan kualitas pendidikan masyarakat sekitar area operasional dengan merenovasi 5 sekolah dasar dan membangun 1 SMP baru.",
    image: "/images/news-2.jpg",
    date: "8 Januari 2026",
    category: "CSR",
    slug: "program-csr-pembangunan-sekolah",
    featured: false,
  },
  {
    id: 3,
    title: "Raih Penghargaan Best Sustainability Practice 2025",
    excerpt: "Praktik keberlanjutan dan pengurangan emisi karbon mendapat apresiasi tinggi dari Kementerian Lingkungan Hidup dan Kehutanan.",
    image: "/images/news-3.jpg",
    date: "28 Desember 2025",
    category: "Penghargaan",
    slug: "penghargaan-best-sustainability",
    featured: false,
  },
  {
    id: 4,
    title: "Kerjasama Strategis dengan Kontraktor BUMN",
    excerpt: "Penandatanganan MoU dengan beberapa kontraktor BUMN untuk pasokan semen proyek infrastruktur nasional senilai Rp 500 miliar.",
    image: "/images/cement-factory.jpg",
    date: "20 Desember 2025",
    category: "Bisnis",
    slug: "kerjasama-strategis-bumn",
    featured: false,
  },
  {
    id: 5,
    title: "Pelatihan K3 untuk Mitra Distributor",
    excerpt: "Program peningkatan kompetensi keselamatan dan kesehatan kerja bagi 200 mitra distributor di seluruh Indonesia.",
    image: "/images/mining-operation.jpg",
    date: "15 Desember 2025",
    category: "Perusahaan",
    slug: "pelatihan-k3-distributor",
    featured: false,
  },
  {
    id: 6,
    title: "Donasi untuk Korban Bencana Alam",
    excerpt: "Bantuan kemanusiaan berupa material bangunan dan logistik untuk rehabilitasi pasca bencana di Jawa Timur.",
    image: "/images/cement-bags.jpg",
    date: "5 Desember 2025",
    category: "CSR",
    slug: "donasi-bencana-alam",
    featured: false,
  },
]

const categories = ["Semua", "Perusahaan", "CSR", "Penghargaan", "Bisnis"]

export default function BeritaPage() {
  const featuredNews = newsItems.find((news) => news.featured)
  const regularNews = newsItems.filter((news) => !news.featured)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-12 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>

          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Berita & Kegiatan</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground">
              Update Terbaru dari Kami
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Informasi terkini seputar kegiatan perusahaan, program CSR, dan pencapaian PT Semen Nusantara Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Semua" ? "default" : "outline"}
                size="sm"
                className={category === "Semua" ? "bg-primary text-primary-foreground" : "border-border text-foreground hover:bg-muted bg-transparent"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/berita/${featuredNews.slug}`}>
              <Card className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <Image
                      src={featuredNews.image || "/placeholder.svg"}
                      alt={featuredNews.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Berita Utama
                    </Badge>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit border-primary text-primary mb-4">
                      {featuredNews.category}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {featuredNews.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-6">
                      <Calendar className="w-4 h-4" />
                      <time>{featuredNews.date}</time>
                    </div>
                    <span className="inline-flex items-center gap-2 mt-6 text-primary font-medium group-hover:gap-3 transition-all">
                      Baca selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Berita Lainnya</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((news) => (
              <Link key={news.id} href={`/berita/${news.slug}`}>
                <Card className="bg-card border-border overflow-hidden group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {news.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <time>{news.date}</time>
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {news.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Baca selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" size="sm" disabled className="border-border bg-transparent">
              Sebelumnya
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm" className="border-border bg-transparent">
              2
            </Button>
            <Button variant="outline" size="sm" className="border-border bg-transparent">
              3
            </Button>
            <Button variant="outline" size="sm" className="border-border bg-transparent">
              Selanjutnya
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
