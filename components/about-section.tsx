"use client"

import Image from "next/image"
import { Shield, Award, Leaf, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/use-language"

const icons = [Shield, Award, Leaf, Users]

export function AboutSection() {
  const t = useTranslations()

  return (
    <section id="tentang" className="py-20 lg:py-32 bg-background">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/mining-operation.jpg"
                alt="Operasi Tambang Semen Nusantara"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs hidden sm:block"
            >
              <div className="text-4xl font-bold text-primary">{t.about.floatingCard.number}</div>
              <div className="text-foreground font-semibold mt-1">{t.about.floatingCard.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{t.about.floatingCard.subtitle}</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.about.label}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {t.about.title}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.about.description1}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t.about.description2}
            </p>

            {/* Values Grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {t.about.values.map((value, index) => {
                const Icon = icons[index]
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
