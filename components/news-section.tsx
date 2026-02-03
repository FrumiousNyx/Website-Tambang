import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    id: 1,
    title: "Peresmian Lini Produksi Ke-4 PT Semen Nusantara",
    excerpt: "Menteri Perindustrian meresmikan lini produksi terbaru yang meningkatkan kapasitas hingga 3 juta ton per tahun.",
    image: "/images/news-1.jpg",
    date: "15 Januari 2026",
    category: "Perusahaan",
    slug: "peresmian-lini-produksi-ke-4",
  },
  {
    id: 2,
    title: "Program CSR Pembangunan Sekolah di Desa Binaan",
    excerpt: "Komitmen berkelanjutan dalam meningkatkan kualitas pendidikan masyarakat sekitar area operasional.",
    image: "/images/news-2.jpg",
    date: "8 Januari 2026",
    category: "CSR",
    slug: "program-csr-pembangunan-sekolah",
  },
  {
    id: 3,
    title: "Raih Penghargaan Best Sustainability Practice 2025",
    excerpt: "Praktik keberlanjutan dan pengurangan emisi karbon mendapat apresiasi tinggi dari Kementerian LHK.",
    image: "/images/news-3.jpg",
    date: "28 Desember 2025",
    category: "Penghargaan",
    slug: "penghargaan-best-sustainability",
  },
]

export function NewsSection() {
  return (
    <section id="berita" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Berita & Kegiatan</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Update Terbaru dari Kami
            </h2>
          </div>
          <Button asChild variant="outline" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
            <Link href="/berita" className="gap-2">
              Lihat Semua Berita
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <Link key={news.id} href={`/berita/${news.slug}`}>
              <Card className="bg-card border-border overflow-hidden group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{news.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <time>{news.date}</time>
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
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
      </div>
    </section>
  )
}
