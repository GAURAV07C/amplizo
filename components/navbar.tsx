"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import type { SiteContent } from "@/lib/site-content"
import { buildGeneralInquiryMessage, buildWhatsAppLink } from "@/lib/marketing-utils"

type NavbarProps = {
  content: SiteContent["navbar"]
  site: SiteContent["site"]
}

export function Navbar({ content, site }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const whatsappLink = buildWhatsAppLink(site.whatsappNumber, buildGeneralInquiryMessage(site))
  const resolveNavHref = (href: string) => {
    if (!href.startsWith("#")) {
      return href
    }

    return pathname === "/" ? href : `/${href}`
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/70 bg-white/72 backdrop-blur-xl supports-[backdrop-filter]:bg-white/55">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-6">
        <BrandLogo logo={site.logo} size="sm" className="md:[&_div]:w-[180px] md:[&_div]:h-[56px]" />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {content.navItems.map((item) => (
            <Link
              key={item.label}
              href={resolveNavHref(item.href)}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Button size="sm" className="rounded-full bg-slate-950 px-6 text-white shadow-[0_18px_35px_-22px_rgba(139,92,246,0.5)] hover:bg-slate-800 btn-animate btn-shine" asChild>
            <Link href={resolveNavHref("#booking")}>{content.ctaLabel}</Link>
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
            <SheetContent side="right" className="w-[min(92vw,360px)] border-l border-slate-200/80 bg-white/95 px-5">
              <div className="flex h-full flex-col gap-6 pt-6">
                <div onClick={() => setIsOpen(false)}>
                  <BrandLogo size="sm" logo={site.logo} />
                </div>
                <nav className="flex flex-col gap-2">
                  {content.navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={resolveNavHref(item.href)}
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto space-y-3 pb-6">
                  <Button className="w-full rounded-full bg-slate-950 text-white hover:bg-slate-800 btn-animate btn-shine" asChild>
                    <Link href={resolveNavHref("#booking")} onClick={() => setIsOpen(false)}>
                      {content.ctaLabel}
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full rounded-full border-slate-300 bg-white text-slate-900" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
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
