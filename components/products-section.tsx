"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/use-language"

const productImages = ["/images/product-opc.jpg", "/images/product-pcc.jpg"]
const productHrefs = ["/produk/opc", "/produk/pcc"]

export function ProductsSection() {
  const t = useTranslations()

  return (
    <section id="produk" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.products.label}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {t.products.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.products.description}
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.products.items.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={productImages[index]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{product.badge}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground">{product.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    <Link href={productHrefs[index]}>
                      {t.products.viewDetails}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
