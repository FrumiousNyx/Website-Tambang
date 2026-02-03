import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowLeft, Check, Leaf, Droplets, ThermometerSun, Hammer, Home, Building } from "lucide-react"

export const metadata = {
  title: "PCC (Portland Composite Cement) - PT Semen Nusantara",
  description: "Semen komposit ramah lingkungan dengan panas hidrasi rendah. Spesifikasi teknis dan aplikasi.",
}

const specifications = [
  { property: "Kekuatan Tekan 3 Hari", value: "min. 13 MPa", standard: "SNI 0302:2014" },
  { property: "Kekuatan Tekan 7 Hari", value: "min. 20 MPa", standard: "SNI 0302:2014" },
  { property: "Kekuatan Tekan 28 Hari", value: "min. 40 MPa", standard: "SNI 0302:2014" },
  { property: "Waktu Ikat Awal", value: "min. 45 menit", standard: "SNI 0302:2014" },
  { property: "Waktu Ikat Akhir", value: "max. 375 menit", standard: "SNI 0302:2014" },
  { property: "Kehalusan (Blaine)", value: "min. 280 m²/kg", standard: "SNI 0302:2014" },
  { property: "Ekspansi Autoclave", value: "max. 0.80%", standard: "SNI 0302:2014" },
  { property: "Kandungan Bahan Tambahan", value: "6-35%", standard: "SNI 0302:2014" },
]

const concreteApplications = [
  { grade: "K-150 / fc' 12 MPa", ratio: "1 : 2.5 : 3.5", waterCement: "0.65", usage: "Lantai kerja, screed" },
  { grade: "K-175 / fc' 14 MPa", ratio: "1 : 2 : 3", waterCement: "0.60", usage: "Lantai, pagar, trotoar" },
  { grade: "K-225 / fc' 18 MPa", ratio: "1 : 1.5 : 2.5", waterCement: "0.55", usage: "Kolom, balok rumah tinggal" },
  { grade: "K-275 / fc' 22 MPa", ratio: "1 : 1.5 : 2", waterCement: "0.50", usage: "Struktur bangunan 2 lantai" },
  { grade: "K-300 / fc' 25 MPa", ratio: "1 : 1.5 : 2", waterCement: "0.48", usage: "Struktur dengan beban sedang" },
]

const advantages = [
  { icon: Leaf, title: "Ramah Lingkungan", desc: "Emisi CO2 15-20% lebih rendah dibanding OPC" },
  { icon: ThermometerSun, title: "Panas Hidrasi Rendah", desc: "Mengurangi risiko retak pada pengecoran masif" },
  { icon: Droplets, title: "Workability Baik", desc: "Lebih mudah dikerjakan dan lebih plastis" },
  { icon: Hammer, title: "Ekonomis", desc: "Harga lebih terjangkau dengan kualitas prima" },
]

const applications = [
  { icon: Home, title: "Rumah Tinggal", desc: "Pondasi, dinding, plesteran, dan acian" },
  { icon: Building, title: "Bangunan Komersial", desc: "Ruko, gudang, dan bangunan non-struktural" },
  { icon: Droplets, title: "Pengecoran Masif", desc: "Plat beton tebal dan struktur dam" },
  { icon: Leaf, title: "Proyek Green Building", desc: "Bangunan dengan sertifikasi ramah lingkungan" },
]

export default function PCCProductPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-600 text-white mb-4">Ramah Lingkungan</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                PCC <span className="text-primary">(Portland Composite Cement)</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Semen Komposit Portland - SNI 7064:2014
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Semen Portland komposit adalah semen hidrolis yang dibuat dengan menggiling klinker
                dengan bahan anorganik lain seperti fly ash, pozzolan, atau batu kapur.
                Pilihan tepat untuk konstruksi yang mengutamakan keberlanjutan lingkungan.
              </p>

              <ul className="mt-8 space-y-3">
                {["Emisi karbon lebih rendah untuk bangunan hijau", "Panas hidrasi rendah untuk pengecoran masif", "Workability lebih baik untuk kemudahan aplikasi", "Kemasan 40kg dan 50kg tersedia"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/kontak">Minta Penawaran</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                  <Link href="/kontak#distributor">Cari Distributor</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/product-pcc.jpg"
                alt="Semen PCC PT Semen Nusantara"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Keunggulan PCC</h2>
            <p className="mt-4 text-muted-foreground">
              Mengapa memilih Portland Composite Cement untuk proyek Anda
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <Card key={adv.title} className="bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <adv.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-bold text-card-foreground">{adv.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{adv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Spesifikasi Teknis</h2>
            <p className="mt-4 text-muted-foreground">
              Data teknis berdasarkan pengujian laboratorium terakreditasi sesuai standar SNI
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary hover:bg-primary">
                    <TableHead className="text-primary-foreground font-semibold">Parameter</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">Nilai</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">Standar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {specifications.map((spec) => (
                    <TableRow key={spec.property} className="hover:bg-muted/50">
                      <TableCell className="font-medium text-card-foreground">{spec.property}</TableCell>
                      <TableCell className="text-muted-foreground">{spec.value}</TableCell>
                      <TableCell className="text-muted-foreground">{spec.standard}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Concrete Mix Table */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Panduan Campuran Beton</h2>
            <p className="mt-4 text-muted-foreground">
              Rekomendasi komposisi campuran beton untuk berbagai kelas mutu
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary hover:bg-secondary">
                    <TableHead className="text-secondary-foreground font-semibold">Mutu Beton</TableHead>
                    <TableHead className="text-secondary-foreground font-semibold">Rasio (Semen:Pasir:Kerikil)</TableHead>
                    <TableHead className="text-secondary-foreground font-semibold">FAS</TableHead>
                    <TableHead className="text-secondary-foreground font-semibold">Penggunaan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {concreteApplications.map((app) => (
                    <TableRow key={app.grade} className="hover:bg-muted/50">
                      <TableCell className="font-medium text-card-foreground">{app.grade}</TableCell>
                      <TableCell className="text-muted-foreground">{app.ratio}</TableCell>
                      <TableCell className="text-muted-foreground">{app.waterCement}</TableCell>
                      <TableCell className="text-muted-foreground">{app.usage}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <p className="mt-4 text-sm text-muted-foreground text-center">
            * FAS = Faktor Air Semen. Nilai dapat bervariasi tergantung kondisi material lokal.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">Aplikasi Penggunaan</h2>
            <p className="mt-4 text-muted-foreground">
              PCC ideal digunakan untuk berbagai jenis konstruksi
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => (
              <Card key={app.title} className="bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <app.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-card-foreground">{app.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{app.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">Butuh Semen PCC untuk Proyek Anda?</h2>
          <p className="mt-4 text-primary-foreground/80">
            Hubungi tim sales kami untuk mendapatkan penawaran harga terbaik dan informasi ketersediaan stok.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-card text-card-foreground hover:bg-card/90">
              <Link href="/kontak">Hubungi Sales</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
              <Link href="/produk/opc">Lihat Produk OPC</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
