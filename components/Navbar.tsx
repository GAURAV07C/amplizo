"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import type { SiteContent } from "@/lib/site-content"

type NavbarProps = {
  content: SiteContent["navbar"]
  logo: SiteContent["site"]["logo"]
}

export function Navbar({ content, logo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/70 bg-white/72 backdrop-blur-xl supports-[backdrop-filter]:bg-white/55">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <BrandLogo logo={logo} />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {content.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Button size="sm" className="rounded-full bg-slate-950 px-6 text-white shadow-[0_18px_35px_-22px_rgba(15,23,42,0.5)] hover:bg-slate-800">
            {content.ctaLabel}
          </Button>
        </div>

        {/* Mobile Menu - only render after hydration to avoid ID mismatch */}
        {mounted ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full border border-slate-200/80 bg-white/80 text-slate-900 hover:bg-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-slate-200/80 bg-white/92 sm:w-[400px]">
              <div className="flex flex-col gap-6 pt-6">
                <div onClick={() => setIsOpen(false)}>
                  <BrandLogo size="sm" logo={logo} />
                </div>
                <nav className="flex flex-col gap-4">
                  {content.navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-slate-600 transition-colors hover:text-slate-950"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button className="mt-4 rounded-full bg-slate-950 text-white hover:bg-slate-800" onClick={() => setIsOpen(false)}>
                  {content.ctaLabel}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <Button variant="ghost" size="icon" className="rounded-full border border-slate-200/80 bg-white/80 text-slate-900 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        )}
      </div>
    </header>
  )
}
