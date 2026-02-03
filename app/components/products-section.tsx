import { ProductCard } from "@/components/product-card"

const products = [
  {
    name: "OPC (Ordinary Portland Cement)",
    shortName: "OPC",
    description: "Semen Portland tipe I untuk konstruksi umum dengan kekuatan tekan tinggi dan waktu pengerasan cepat.",
    features: [
      "Kekuatan tekan 28 hari: min. 42.5 MPa",
      "Ideal untuk beton struktural",
      "Cocok untuk cuaca tropis Indonesia",
    ],
    image: "/images/product-opc.jpg",
    badge: "Terlaris",
    href: "/produk/opc",
  },
  {
    name: "PCC (Portland Composite Cement)",
    shortName: "PCC",
    description: "Semen komposit ramah lingkungan dengan panas hidrasi lebih rendah, cocok untuk berbagai aplikasi.",
    features: [
      "Kekuatan tekan 28 hari: min. 40 MPa",
      "Emisi CO2 lebih rendah 15-20%",
      "Workability yang lebih baik",
    ],
    image: "/images/product-pcc.jpg",
    badge: "Ramah Lingkungan",
    href: "/produk/pcc",
  },
]

export function ProductsSection() {
  return (
    <section id="produk" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Produk Kami</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Solusi Semen Berkualitas Premium
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pilihan produk semen terbaik untuk setiap kebutuhan konstruksi Anda,
            dari bangunan rumah tinggal hingga infrastruktur berskala besar.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
