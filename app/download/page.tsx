"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Lock, CheckCircle2, Loader2, BookOpen, FileSpreadsheet, Building2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "@/hooks/use-language"
import { supabase } from "@/lib/supabase"

export default function DownloadPage() {
  const t = useTranslations()
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ email: "", phone: "", company: "" })

  const documents = {
    brochure: [
      { name: "OPC Brochure - Ordinary Portland Cement", size: "2.4 MB", icon: BookOpen },
      { name: "PCC Brochure - Portland Composite Cement", size: "2.1 MB", icon: BookOpen },
      { name: "Product Catalog 2024", size: "4.2 MB", icon: BookOpen },
    ],
    technical: [
      { name: "Technical Datasheet - OPC Type I", size: "1.8 MB", icon: FileSpreadsheet },
      { name: "Technical Datasheet - PCC", size: "1.6 MB", icon: FileSpreadsheet },
      { name: "Material Safety Data Sheet (MSDS)", size: "0.8 MB", icon: FileSpreadsheet },
      { name: "Quality Certificate ISO 9001", size: "0.5 MB", icon: FileSpreadsheet },
    ],
    company: [
      { name: "Company Profile PT Semen Nusantara", size: "5.2 MB", icon: Building2 },
      { name: "Sustainability Report 2024", size: "3.8 MB", icon: Building2 },
      { name: "Annual Report 2024", size: "8.5 MB", icon: Building2 },
    ],
  }

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save download request to Supabase
      await supabase.from("download_requests").insert([
        {
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          created_at: new Date().toISOString(),
        },
      ])

      setIsUnlocked(true)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 lg:pt-32 pb-20 lg:pb-32">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Download Center</span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {t.download.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.download.subtitle}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!isUnlocked ? (
              <motion.div
                key="gate"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-md mx-auto"
              >
                <Card className="border-border bg-card">
                  <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{t.download.gateTitle}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{t.download.gateDescription}</p>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <form onSubmit={handleUnlock} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="email@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.leadForm.fields.phone} *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+62 xxx xxxx xxxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t.leadForm.fields.company}</Label>
                        <Input
                          id="company"
                          placeholder={t.leadForm.fields.companyPlaceholder}
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-background border-border"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            {t.common.loading}
                          </>
                        ) : (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            {t.download.unlockButton}
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center gap-2 text-green-600 mb-8">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">{t.common.success} - Documents Unlocked</span>
                </div>

                <Tabs defaultValue="brochure" className="w-full">
                  <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                    <TabsTrigger value="brochure">{t.download.categories.brochure}</TabsTrigger>
                    <TabsTrigger value="technical">{t.download.categories.technical}</TabsTrigger>
                    <TabsTrigger value="company">{t.download.categories.company}</TabsTrigger>
                  </TabsList>

                  {Object.entries(documents).map(([category, docs]) => (
                    <TabsContent key={category} value={category}>
                      <div className="grid gap-4">
                        {docs.map((doc, index) => (
                          <motion.div
                            key={doc.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className="bg-card border-border hover:shadow-md transition-shadow">
                              <CardContent className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <doc.icon className="w-6 h-6 text-primary" />
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-foreground">{doc.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                      <Badge variant="secondary" className="text-xs">PDF</Badge>
                                      <span className="text-xs text-muted-foreground">{doc.size}</span>
                                    </div>
                                  </div>
                                </div>
                                <Button variant="outline" size="sm" className="gap-2">
                                  <Download className="w-4 h-4" />
                                  {t.download.downloadButton}
                                </Button>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}
