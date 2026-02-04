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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, Mountain, ChevronDown, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage, useTranslations } from "@/hooks/use-language"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const { lang, setLang } = useLanguage()
  const t = useTranslations()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
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
                  {t.nav.home}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-primary data-[state=open]:text-primary">
                  {t.nav.company}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2">
                    {t.companyLinks.map((link) => (
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
                  {t.nav.products}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2">
                    {t.productLinks.map((link) => (
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
                <Link href="/proyek" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.projects}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/download" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.download}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/kontak" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.contact}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side - Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                  <Globe className="w-4 h-4" />
                  <span className="font-medium">{lang.toUpperCase()}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => setLang('id')}
                  className={cn(lang === 'id' && "bg-accent")}
                >
                  <span className="mr-2">🇮🇩</span>
                  Bahasa Indonesia
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLang('en')}
                  className={cn(lang === 'en' && "bg-accent")}
                >
                  <span className="mr-2">🇬🇧</span>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dealer Portal Link */}
            <Button asChild variant="outline" size="sm">
              <Link href="/dealer">{t.nav.dealerPortal}</Link>
            </Button>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/kontak">{t.nav.contactUs}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-medium">{lang.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => setLang('id')}
                  className={cn(lang === 'id' && "bg-accent")}
                >
                  <span className="mr-2">🇮🇩</span>
                  Bahasa Indonesia
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLang('en')}
                  className={cn(lang === 'en' && "bg-accent")}
                >
                  <span className="mr-2">🇬🇧</span>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
                {t.nav.home}
              </Link>

              {/* Mobile Perusahaan Dropdown */}
              <div>
                <button
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === "perusahaan" ? null : "perusahaan")}
                  className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {t.nav.company}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openMobileDropdown === "perusahaan" && "rotate-180")} />
                </button>
                {openMobileDropdown === "perusahaan" && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    {t.companyLinks.map((link) => (
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
                  {t.nav.products}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openMobileDropdown === "produk" && "rotate-180")} />
                </button>
                {openMobileDropdown === "produk" && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    {t.productLinks.map((link) => (
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
                href="/proyek"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.projects}
              </Link>

              <Link
                href="/download"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.download}
              </Link>

              <Link
                href="/kontak"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>

              <Link
                href="/dealer"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.dealerPortal}
              </Link>

              <Button asChild className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                <Link href="/kontak" onClick={() => setIsMenuOpen(false)}>
                  {t.nav.contactUs}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
