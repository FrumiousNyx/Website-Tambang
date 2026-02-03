import Image from "next/image"
import { Shield, Award, Leaf, Users } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Kualitas Terjamin",
    description: "Standar produksi SNI dan ISO 9001 untuk kualitas semen terbaik",
  },
  {
    icon: Award,
    title: "Berpengalaman",
    description: "Lebih dari 38 tahun melayani industri konstruksi Indonesia",
  },
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    description: "Teknologi produksi berkelanjutan dan pengelolaan limbah terpadu",
  },
  {
    icon: Users,
    title: "Mitra Terpercaya",
    description: "Bermitra dengan ribuan kontraktor dan distributor nasional",
  },
]

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/mining-operation.jpg"
                alt="Operasi Tambang Semen Nusantara"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs hidden sm:block">
              <div className="text-4xl font-bold text-primary">1</div>
              <div className="text-foreground font-semibold mt-1">Produsen Semen Terbesar</div>
              <div className="text-sm text-muted-foreground mt-1">di kawasan Indonesia Timur</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Memimpin Industri Semen dengan Inovasi dan Integritas
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              PT Semen Nusantara didirikan pada tahun 1985 dengan visi menjadi produsen semen terkemuka
              yang berkontribusi pada pembangunan infrastruktur nasional. Dengan lokasi strategis di
              kawasan tambang batu kapur terbaik, kami menghasilkan semen berkualitas tinggi yang
              telah digunakan dalam ribuan proyek besar di seluruh Indonesia.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Komitmen kami terhadap kualitas, keberlanjutan, dan pelayanan pelanggan telah menjadikan
              kami pilihan utama bagi kontraktor, developer, dan proyek pemerintah.
            </p>

            {/* Values Grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
