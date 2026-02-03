import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"

export default function DetailBerita({ params }: { params: { slug: string } }) {
  // Fungsi sederhana untuk mengubah slug menjadi Judul agar tidak kosong
  const displayTitle = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/berita" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Berita
        </Link>

        <article>
          <Badge className="mb-4 bg-primary text-primary-foreground">Berita Terbaru</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {displayTitle}
          </h1>
          
          <div className="flex items-center gap-4 text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Januari 2026</span>
            </div>
            <span>•</span>
            <span>Admin PT Semen Nusantara</span>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="mb-6">
              PT Semen Nusantara terus berkomitmen untuk menghadirkan kontribusi positif melalui berbagai inisiatif strategis. 
              Topik mengenai <strong>{displayTitle}</strong> merupakan salah satu fokus utama kami dalam mencapai keunggulan operasional 
              dan tanggung jawab sosial perusahaan.
            </p>
            <p className="mb-6">
              Melalui program ini, kami berharap dapat memperkuat hubungan dengan para pemangku kepentingan dan meningkatkan 
              kesejahteraan masyarakat sekitar area operasional kami. Detail lebih lanjut mengenai implementasi program ini 
              akan terus diperbarui secara berkala.
            </p>
            <div className="bg-muted p-6 rounded-xl border border-border my-8 italic">
              "Inovasi dan keberlanjutan adalah inti dari setiap kegiatan yang kami lakukan di PT Semen Nusantara."
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}