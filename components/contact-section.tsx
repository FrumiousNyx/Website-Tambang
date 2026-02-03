"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontak" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Hubungi Kami</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">Siap Membantu Proyek Anda</h2>
            <p className="mt-4 text-muted-foreground">Kami melayani pertanyaan seputar produk, peluang karier, dan kerjasama distribusi semen nasional.</p>
          </div>

          <Card className="bg-card border-border shadow-xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-bold text-card-foreground">Formulir Bisnis & Karier</h3>
              <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Pesan Terkirim!'); }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Nama Lengkap" required />
                  <Input placeholder="Nama Perusahaan (Opsional)" />
                </div>
                
                {/* DROPDOWN KOMPLEKS */}
                <select className="w-full p-2.5 rounded-md border border-border bg-background text-sm focus:ring-2 focus:ring-primary">
                  <option value="pertanyaan">Pertanyaan Umum</option>
                  <option value="karier">Lamaran Karier (Lampirkan Link CV)</option>
                  <option value="distribusi">Permintaan Penawaran Harga / Distributor</option>
                </select>

                <Textarea placeholder="Tuliskan pesan Anda atau link CV (untuk pelamar kerja)..." rows={4} required />
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">
                  <Send className="mr-2 h-5 w-5" /> Kirim Sekarang
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}