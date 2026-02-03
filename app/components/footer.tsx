import Link from "next/link"
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const sitemapLinks = {
  perusahaan: [
    { label: "Profil Perusahaan", href: "/perusahaan/profil" },
    { label: "Sejarah", href: "/perusahaan/sejarah" },
    { label: "Manajemen", href: "/perusahaan/manajemen" },
    { label: "Visi & Misi", href: "/perusahaan/profil#visi-misi" },
    { label: "Karir", href: "/karir" },
  ],
  produk: [
    { label: "OPC (Ordinary Portland Cement)", href: "/produk/opc" },
    { label: "PCC (Portland Composite Cement)", href: "/produk/pcc" },
    { label: "Semen Khusus", href: "/produk" },
    { label: "Spesifikasi Teknis", href: "/produk" },
  ],
  layanan: [
    { label: "Fasilitas Produksi", href: "/fasilitas" },
    { label: "Pengiriman & Logistik", href: "/fasilitas#logistik" },
    { label: "Konsultasi Teknis", href: "/kontak" },
    { label: "Distributor", href: "/kontak#distributor" },
  ],
  informasi: [
    { label: "Berita & Kegiatan", href: "/berita" },
    { label: "CSR", href: "/berita?kategori=csr" },
    { label: "Keberlanjutan", href: "/keberlanjutan" },
    { label: "Hubungan Investor", href: "/investor" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Mountain className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-secondary-foreground">Semen Nusantara</span>
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/70 leading-relaxed">
              Produsen semen terkemuka Indonesia, membangun fondasi yang kuat untuk masa depan bangsa sejak 1985.
            </p>

            {/* Office Addresses */}
            <div className="mt-6 space-y-4">
              <div>
                <h5 className="font-semibold text-sm text-secondary-foreground mb-2">Kantor Pusat - Jember</h5>
                <div className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Jl. Raya Industri No. 123, Kecamatan Sumbersari, Kabupaten Jember, Jawa Timur 68121</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary-foreground/70 mt-1">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>(0331) 123-4567</span>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-secondary-foreground mb-2">Kantor Perwakilan - Jakarta</h5>
                <div className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Menara Sudirman Lt. 25, Jl. Jend. Sudirman Kav. 60, Jakarta Selatan 12190</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary-foreground/70 mt-1">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>(021) 5678-9012</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@semennusantara.co.id</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold text-sm text-secondary-foreground mb-3">Ikuti Kami</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <social.icon className="w-4 h-4 text-secondary-foreground/70 group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sitemap Links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {sitemapLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Produk</h4>
            <ul className="space-y-3">
              {sitemapLinks.produk.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Layanan</h4>
            <ul className="space-y-3">
              {sitemapLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Informasi</h4>
            <ul className="space-y-3">
              {sitemapLinks.informasi.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold text-secondary-foreground mb-3">Newsletter</h4>
              <p className="text-sm text-secondary-foreground/70 mb-3">Dapatkan update terbaru dari kami</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                  Kirim
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              &copy; {new Date().getFullYear()} PT Semen Nusantara Indonesia. Hak Cipta Dilindungi.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/kebijakan-privasi" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/syarat-ketentuan" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link href="/sitemap" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
