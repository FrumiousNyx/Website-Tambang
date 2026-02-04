"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ShoppingCart, DollarSign, Truck, FileText, Lock, Eye, EyeOff, Mountain } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/use-language"

export default function DealerPage() {
  const t = useTranslations()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false })

  const features = [
    { icon: ShoppingCart, title: t.dealer.features[0].title, description: t.dealer.features[0].description },
    { icon: DollarSign, title: t.dealer.features[1].title, description: t.dealer.features[1].description },
    { icon: Truck, title: t.dealer.features[2].title, description: t.dealer.features[2].description },
    { icon: FileText, title: t.dealer.features[3].title, description: t.dealer.features[3].description },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Dummy login - this is just for demonstration
    alert("This is a demo portal. Please contact us to register as an authorized dealer.")
  }

  return (
    <main className="min-h-screen bg-muted">
      <Header />

      <section className="pt-28 lg:pt-32 pb-20 lg:pb-32">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Mountain className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-foreground">Semen Nusantara</h2>
                  <p className="text-sm text-muted-foreground">{t.dealer.title}</p>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                {t.dealer.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {t.dealer.subtitle}
              </p>

              {/* Features Grid */}
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-border bg-card shadow-lg">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t.dealer.loginTitle}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{t.dealer.loginDescription}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.dealer.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder={t.dealer.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">{t.dealer.password}</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          required
                          placeholder={t.dealer.passwordPlaceholder}
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="bg-background border-border pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          checked={formData.rememberMe}
                          onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
                        />
                        <Label htmlFor="remember" className="text-sm cursor-pointer">
                          {t.dealer.rememberMe}
                        </Label>
                      </div>
                      <button type="button" className="text-sm text-primary hover:underline">
                        {t.dealer.forgotPassword}
                      </button>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {t.dealer.login}
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      {t.dealer.noAccount}{" "}
                      <Link href="/kontak" className="text-primary hover:underline font-medium">
                        {t.dealer.registerLink}
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Demo Notice */}
              <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">Demo Portal</strong> - This is a demonstration of the Dealer Portal. 
                  Contact our sales team to become an authorized dealer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
