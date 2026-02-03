import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProdukPage() {
  const categories = [
    {
      title: "Ordinary Portland Cement",
      code: "OPC",
      slug: "opc",
      desc: "Semen hidrolis untuk konstruksi beton umum dan struktur spesifik tinggi."
    },
    {
      title: "Portland Composite Cement",
      code: "PCC",
      slug: "pcc",
      desc: "Semen ramah lingkungan dengan kemudahan pengerjaan yang lebih baik."
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Produk Unggulan Kami</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Solusi semen berkualitas tinggi yang diproduksi dengan teknologi terkini untuk menjamin kekuatan bangunan Anda.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <Card key={cat.slug} className="group hover:border-primary transition-all shadow-sm">
                <CardContent className="p-8 text-left">
                  <div className="bg-primary/10 text-primary font-bold w-fit px-3 py-1 rounded mb-4">
                    {cat.code}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{cat.title}</h3>
                  <p className="text-muted-foreground mb-6">{cat.desc}</p>
                  <Link href={`/produk/${cat.slug}`}>
                    <Button className="group-hover:gap-3 transition-all">
                      Lihat Detail <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}