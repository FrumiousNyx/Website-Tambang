"use client"

import Link from "next/link"
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-language"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  const t = useTranslations()

  const sitemapLinks = {
    perusahaan: [
      { label: t.footer.links.companyProfile, href: "/perusahaan/profil" },
      { label: t.footer.links.history, href: "/perusahaan/sejarah" },
      { label: t.footer.links.management, href: "/perusahaan/manajemen" },
      { label: t.footer.links.visionMission, href: "/perusahaan/profil#visi-misi" },
      { label: t.footer.links.career, href: "/karir" },
    ],
    produk: [
      { label: t.footer.links.opc, href: "/produk/opc" },
      { label: t.footer.links.pcc, href: "/produk/pcc" },
      { label: t.footer.links.specialCement, href: "/produk" },
      { label: t.footer.links.technicalSpecs, href: "/download" },
    ],
    layanan: [
      { label: t.footer.links.productionFacility, href: "/fasilitas" },
      { label: t.footer.links.deliveryLogistics, href: "/fasilitas#logistik" },
      { label: t.footer.links.technicalConsultation, href: "/kontak" },
      { label: t.footer.links.distributor, href: "/dealer" },
    ],
    informasi: [
      { label: t.footer.links.newsActivities, href: "/berita" },
      { label: t.nav.projects, href: "/proyek" },
      { label: t.footer.links.sustainability, href: "/keberlanjutan" },
      { label: t.footer.links.investorRelations, href: "/investor" },
    ],
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              {t.footer.description}
            </p>

            {/* Office Addresses */}
            <div className="mt-6 space-y-4">
              <div>
                <h5 className="font-semibold text-sm text-secondary-foreground mb-2">{t.footer.headquarters}</h5>
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
                <h5 className="font-semibold text-sm text-secondary-foreground mb-2">{t.footer.representative}</h5>
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
              <h5 className="font-semibold text-sm text-secondary-foreground mb-3">{t.footer.followUs}</h5>
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
            <h4 className="font-semibold text-secondary-foreground mb-4">{t.footer.sections.company}</h4>
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
            <h4 className="font-semibold text-secondary-foreground mb-4">{t.footer.sections.products}</h4>
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
            <h4 className="font-semibold text-secondary-foreground mb-4">{t.footer.sections.services}</h4>
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
            <h4 className="font-semibold text-secondary-foreground mb-4">{t.footer.sections.information}</h4>
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
              <h4 className="font-semibold text-secondary-foreground mb-3">{t.footer.newsletter}</h4>
              <p className="text-sm text-secondary-foreground/70 mb-3">{t.footer.newsletterDesc}</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                  {t.footer.send}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              &copy; {new Date().getFullYear()} PT Semen Nusantara Indonesia. {t.footer.copyright}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/kebijakan-privasi" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                {t.footer.links.privacyPolicy}
              </Link>
              <Link href="/syarat-ketentuan" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                {t.footer.links.termsConditions}
              </Link>
              <Link href="/sitemap" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                {t.footer.links.sitemap}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
