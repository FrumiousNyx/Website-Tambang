"use client"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"

export function ContactSection() {
  const { lang } = useLanguage()

  const t = {
    id: { title: "Hubungi Kami", sub: "Siap Membantu Proyek Anda", btn: "Kirim Sekarang", opt1: "Informasi Umum", opt2: "Karier", opt3: "Bisnis" },
    en: { title: "Contact Us", sub: "Ready to Support Your Project", btn: "Send Now", opt1: "General Inquiry", opt2: "Career Inquiry", opt3: "Business Inquiry" }
  }

  const content = t[lang]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-primary font-semibold text-sm uppercase">{content.title}</span>
          <h2 className="mt-4 text-3xl font-bold">{content.sub}</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            <form className="space-y-4">
              <Input placeholder={lang === 'id' ? "Nama Lengkap" : "Full Name"} />
              <select className="w-full p-2 border rounded-md bg-background">
                <option value="umum">{content.opt1}</option>
                <option value="karier">{content.opt2}</option>
                <option value="bisnis">{content.opt3}</option>
              </select>
              <Textarea placeholder={lang === 'id' ? "Pesan Anda" : "Your Message"} rows={4} />
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> {content.btn}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}