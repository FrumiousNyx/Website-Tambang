"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Globe, Send } from "lucide-react"

const KONTAK_DATA = {
  id: {
    title: "Hubungi Kami",
    desc: "Kami siap membantu Anda terkait informasi produk, karier, dan kerjasama.",
    formTitle: "Kirim Pesan & Lamaran",
    officeTitle: "Lokasi Kantor",
    btnSubmit: "Kirim Sekarang",
    offices: [
      { name: "Kantor Pusat - Jember", address: "Jl. Raya Industri No. 123, Jember", email: "jember@semennusantara.co.id" },
      { name: "Kantor Jakarta", address: "Menara Sudirman Lt. 25, Jakarta", email: "jakarta@semennusantara.co.id" },
    ]
  },
  en: {
    title: "Contact Us",
    desc: "We are ready to assist you with product information, careers, and partnerships.",
    formTitle: "Send Message & Application",
    officeTitle: "Office Locations",
    btnSubmit: "Send Now",
    offices: [
      { name: "Head Office - Jember", address: "Jl. Raya Industri No. 123, Jember", email: "jember@semennusantara.co.id" },
      { name: "Jakarta Office", address: "Sudirman Tower 25th Fl, Jakarta", email: "jakarta@semennusantara.co.id" },
    ]
  }
}

export default function KontakPage() {
  const [lang, setLang] = useState<'id' | 'en'>('id')
  const content = KONTAK_DATA[lang]
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data: any) => {
    console.log("Form Data:", data)
    alert(lang === 'id' ? "Pesan berhasil dikirim! (Simulasi)" : "Message sent successfully! (Simulation)")
    reset()
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Toggle Bahasa Melayang */}
      <div className="fixed top-24 right-4 z-50">
        <Button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} variant="default" className="rounded-full shadow-xl">
          <Globe className="mr-2 h-4 w-4" /> {lang.toUpperCase()}
        </Button>
      </div>

      <section className="pt-24 pb-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground mb-8">
            <ArrowLeft className="w-4 h-4" /> {lang === 'id' ? 'Kembali' : 'Back'}
          </Link>
          <h1 className="text-4xl font-bold">{content.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{content.desc}</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          
          {/* List Kantor (Local CMS) */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{content.officeTitle}</h2>
            <div className="grid gap-4">
              {content.offices.map((off, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <h3 className="font-bold">{off.name}</h3>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground mt-2">
                      <MapPin className="w-4 h-4 text-primary" /> {off.address}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Mail className="w-4 h-4 text-primary" /> {off.email}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Form Kompleks (Karier/Bisnis) */}
          <Card className="shadow-lg border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">{content.formTitle}</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input {...register("nama", { required: true })} placeholder="Nama Lengkap" className="w-full p-3 border rounded-md" />
                  {errors.nama && <p className="text-red-500 text-xs mt-1">Wajib diisi</p>}
                </div>
                <div>
                  <select {...register("subjek")} className="w-full p-3 border rounded-md bg-white">
                    <option value="umum">Informasi Umum</option>
                    <option value="karier">Lamaran Karier</option>
                    <option value="bisnis">Kerjasama Bisnis</option>
                  </select>
                </div>
                <textarea {...register("pesan", { required: true })} placeholder="Pesan atau Ringkasan CV" rows={4} className="w-full p-3 border rounded-md" />
                <Button type="submit" className="w-full py-6 text-lg">
                  <Send className="mr-2 h-5 w-5" /> {content.btnSubmit}
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </section>
      <Footer />
    </main>
  )
}