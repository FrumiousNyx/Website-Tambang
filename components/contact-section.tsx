"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/use-language"
import { LeadForm } from "@/components/lead-form"

export function ContactSection() {
  const t = useTranslations()

  const contactInfo = [
    { icon: Phone, ...t.contact.info.phone },
    { icon: Mail, ...t.contact.info.email },
    { icon: MapPin, ...t.contact.info.address },
    { icon: Clock, ...t.contact.info.hours },
  ]

  return (
    <section id="kontak" className="py-20 lg:py-32 bg-background">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.contact.label}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t.contact.description}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    {item.details.map((detail) => (
                      <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
