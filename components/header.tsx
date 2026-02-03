"use client"
import { useLanguage } from "@/hooks/use-language"
import { Globe, Menu, X, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const { lang, setLang } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Mountain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">Semen Nusantara</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
              {lang === 'id' ? 'Beranda' : 'Home'}
            </Link>
            <Link href="/perusahaan/manajemen" className="text-sm font-medium text-muted-foreground hover:text-primary">
              {lang === 'id' ? 'Manajemen' : 'Management'}
            </Link>
            <Link href="/kontak" className="text-sm font-medium text-muted-foreground hover:text-primary">
              {lang === 'id' ? 'Kontak' : 'Contact'}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* SATU-SATUNYA TOMBOL BAHASA PUSAT */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <Globe className="w-4 h-4" />
              {lang.toUpperCase()}
            </Button>
            <Button asChild className="hidden lg:flex bg-primary hover:bg-primary/90">
              <Link href="/kontak">{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}