"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X, Mountain, ChevronDown, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const productLinks = [
  { title: "OPC (Ordinary Portland Cement)", href: "/produk/opc", description: "Semen Portland tipe I untuk konstruksi umum" },
  { title: "PCC (Portland Composite Cement)", href: "/produk/pcc", description: "Semen komposit ramah lingkungan" },
]

const companyLinks = [
  { title: "Profil Perusahaan", href: "/perusahaan/profil", description: "Tentang PT Semen Nusantara Indonesia" },
  { title: "Sejarah", href: "/perusahaan/sejarah", description: "Perjalanan perusahaan sejak 1985" },
  { title: "Manajemen", href: "/perusahaan/manajemen", description: "Tim kepemimpinan perusahaan" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lang, setLang] = useState<'ID' | 'EN'>('ID') // State Bahasa Global (Simulasi)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Mountain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">Semen Nusantara</span>
              <span className="text-xs text-muted-foreground block -mt-1">PT. Semen Nusantara Indonesia</span>
            </div>
          </Link>

          {/* Desktop Nav (Disederhanakan) */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">Beranda</Link>
            <Link href="/perusahaan/manajemen" className="text-sm font-medium text-muted-foreground hover:text-primary">Manajemen</Link>
            <Link href="/fasilitas" className="text-sm font-medium text-muted-foreground hover:text-primary">Fasilitas</Link>
            <Link href="/kontak" className="text-sm font-medium text-muted-foreground hover:text-primary">Kontak</Link>
          </nav>

          {/* Tombol Switch Bahasa & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
              className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Globe className="w-4 h-4" />
              {lang}
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  )
}