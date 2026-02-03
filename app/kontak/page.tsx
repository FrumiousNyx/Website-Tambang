import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Hubungi Kami - PT Semen Nusantara",
  description: "Hubungi PT Semen Nusantara Indonesia untuk informasi produk, penawaran harga, dan kerjasama bisnis.",
}

const offices = [
  {
    name: "Kantor Pusat - Jember",
    address: "Jl. Raya Industri No. 123, Kecamatan Sumbersari, Kabupaten Jember, Jawa Timur 68121",
    phone: "(0331) 123-4567",
    fax: "(0331) 123-4568",
    email: "jember@semennusantara.co.id",
    hours: "Senin - Jumat: 08.00 - 17.00 WIB",
  },
  {
    name: "Kantor Perwakilan - Jakarta",
    address: "Menara Sudirman Lt. 25, Jl. Jend. Sudirman Kav. 60, Jakarta Selatan 12190",
    phone: "(021) 5678-9012",
    fax: "(021) 5678-9013",
    email: "jakarta@semennusantara.co.id",
    hours: "Senin - Jumat: 08.00 - 17.00 WIB",
  },
]

const distributors = [
  { region: "Jawa Timur", name: "PT Mitra Bangunan Jatim", phone: "(031) 555-1234" },
  { region: "Jawa Tengah", name: "CV Sumber Material", phone: "(024) 555-5678" },
  { region: "Jawa Barat", name: "PT Bangun Sejahtera", phone: "(022) 555-9012" },
  { region: "Bali & NTB", name: "UD Panca Karya", phone: "(0361) 555-3456" },
]

export default function KontakPage() {
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Hubungi Kami</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground">
              Kami Siap Membantu Anda
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Hubungi tim kami untuk informasi produk, penawaran harga, konsultasi teknis, atau kerjasama bisnis.
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Lokasi Kantor</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <Card key={office.name} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-card-foreground mb-4">{office.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Tel: {office.phone} | Fax: {office.fax}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{office.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Distributors */}
      <section id="distributor" className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Distributor Resmi</h2>
            <p className="mt-4 text-muted-foreground">
              Temukan distributor resmi PT Semen Nusantara terdekat di wilayah Anda
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributors.map((dist) => (
              <Card key={dist.region} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {dist.region}
                  </span>
                  <h3 className="mt-2 font-bold text-card-foreground">{dist.name}</h3>
                  <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    {dist.phone}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Untuk daftar lengkap distributor di seluruh Indonesia, silakan hubungi marketing kami.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
