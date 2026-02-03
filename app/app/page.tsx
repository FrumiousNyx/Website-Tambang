import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { FacilitySection } from "@/components/facility-section"
import { ProductionChart } from "@/components/production-chart"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FacilitySection />
        <ProductionChart />
        <NewsSection />
        <ContactSection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  )
}
