import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function SitemapPage() {
  const links = [
    { group: "Utama", items: [{ n: "Beranda", h: "/" }, { n: "Tentang Kami", h: "/tentang-kami" }, { n: "Produk", h: "/produk" }] },
    { group: "Informasi", items: [{ n: "Berita & Kegiatan", h: "/berita" }, { n: "Keberlanjutan", h: "/keberlanjutan" }, { n: "Investor", h: "/investor" }] },
    { group: "Layanan", items: [{ n: "Karir", h: "/karir" }, { n: "Hubungi Kami", h: "/#kontak" }] },
    { group: "Legal", items: [{ n: "Kebijakan Privasi", h: "/kebijakan-privasi" }, { n: "Syarat & Ketentuan", h: "/syarat-ketentuan" }] },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Peta Situs</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {links.map((g, i) => (
              <div key={i}>
                <h3 className="font-bold text-lg mb-4 border-b pb-2">{g.group}</h3>
                <ul className="space-y-3">
                  {g.items.map((link, j) => (
                    <li key={j}>
                      <Link href={link.h} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.n}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}