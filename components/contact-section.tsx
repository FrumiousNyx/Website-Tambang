import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon",
    details: ["+62 21 5555 1234", "+62 21 5555 5678"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@semennusantara.co.id", "sales@semennusantara.co.id"],
  },
  {
    icon: MapPin,
    title: "Kantor Pusat",
    details: ["Jl. Industri Berat No. 100", "Jakarta Utara 14230"],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00"],
  },
]

export function ContactSection() {
  return (
    <section id="kontak" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Hubungi Kami</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Siap Membantu Proyek Anda
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tim kami siap memberikan solusi terbaik untuk kebutuhan semen Anda.
              Hubungi kami untuk konsultasi, penawaran harga, atau informasi produk.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    {item.details.map((detail) => (
                      <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-bold text-card-foreground">Kirim Pesan</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Isi formulir di bawah dan tim kami akan menghubungi Anda segera.
              </p>
              
              <form className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama Anda"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Perusahaan
                    </label>
                    <Input
                      id="company"
                      placeholder="Nama perusahaan"
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@perusahaan.com"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Telepon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+62 xxx xxxx xxxx"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-1.5">
                    Subjek
                  </label>
                  <Input
                    id="subject"
                    placeholder="Topik pertanyaan Anda"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1.5">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                    rows={4}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
