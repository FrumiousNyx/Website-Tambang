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
import { Menu, X, Mountain, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const productLinks = [
  {
    title: "OPC (Ordinary Portland Cement)",
    href: "/produk/opc",
    description: "Semen Portland tipe I untuk konstruksi umum",
  },
  {
    title: "PCC (Portland Composite Cement)",
    href: "/produk/pcc",
    description: "Semen komposit ramah lingkungan",
  },
]

const companyLinks = [
  {
    title: "Profil Perusahaan",
    href: "/perusahaan/profil",
    description: "Tentang PT Semen Nusantara Indonesia",
  },
  {
    title: "Sejarah",
    href: "/perusahaan/sejarah",
    description: "Perjalanan perusahaan sejak 1985",
  },
  {
    title: "Manajemen",
    href: "/perusahaan/manajemen",
    description: "Tim kepemimpinan perusahaan",
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-primary data-[state=open]:text-primary">
                  Perusahaan
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2">
                    {companyLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link href={link.href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium text-foreground">{link.title}</div>
                            <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-primary data-[state=open]:text-primary">
                  Produk
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2">
                    {productLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link href={link.href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium text-foreground">{link.title}</div>
                            <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/fasilitas" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Fasilitas
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/berita" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Berita
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/kontak" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Kontak
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>

              {/* Mobile Perusahaan Dropdown */}
              <div>
                <button
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === "perusahaan" ? null : "perusahaan")}
                  className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  Perusahaan
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openMobileDropdown === "perusahaan" && "rotate-180")} />
                </button>
                {openMobileDropdown === "perusahaan" && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-sm text-muted-foreground hover:text-primary py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Produk Dropdown */}
              <div>
                <button
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === "produk" ? null : "produk")}
                  className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  Produk
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openMobileDropdown === "produk" && "rotate-180")} />
                </button>
                {openMobileDropdown === "produk" && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-sm text-muted-foreground hover:text-primary py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/fasilitas"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Fasilitas
              </Link>

              <Link
                href="/berita"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Berita
              </Link>

              <Link
                href="/kontak"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>

              <Button asChild className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                <Link href="/kontak" onClick={() => setIsMenuOpen(false)}>
                  Hubungi Kami
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
