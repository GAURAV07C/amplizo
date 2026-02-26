'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { BrandLogo } from '@/components/BrandLogo'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-700',
        scrolled ? 'top-5 px-4' : 'top-0 px-0'
      )}
    >
      <div
        className={cn(
          'mx-auto transition-all duration-700 flex items-center justify-between',
          scrolled
            ? 'max-w-6xl glass rounded-[30px] py-3 px-8 border-primary/30'
            : 'max-w-full bg-background/60 backdrop-blur-2xl py-6 px-8 border-b border-primary/20'
        )}
      >
        <Link href="/" className="group">
          <BrandLogo
            priority
            className={cn('transition-all duration-700', scrolled ? 'w-[230px]' : 'w-[290px]')}
            imageClassName={cn('transition-all duration-700', scrolled ? 'max-h-12' : 'max-h-16')}
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <motion.div key={item.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-xs font-bold uppercase tracking-[0.2em] transition-all relative group py-1',
                    isActive ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                  )}
                >
                  {item.name}
                  {isActive ? (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute -bottom-2 left-0 w-full h-0.5 rounded-full bg-gradient-to-r from-accent/70 to-primary shadow-[0_0_16px_oklch(0.72_0.18_236_/_0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-2 font-bold uppercase tracking-widest text-[10px] hover:bg-primary/10" asChild>
            <a href="tel:+919430804147">
              <Phone className="w-3 h-3" />
              <span>Call</span>
            </a>
          </Button>
          <Button size="sm" className="rounded-full px-6 font-bold uppercase tracking-widest text-[10px]" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-lg font-medium py-2 border-b border-border/50',
                    pathname === item.href ? 'text-primary' : 'text-foreground/75'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" className="w-full justify-center gap-2" asChild>
                  <a href="tel:+919430804147">
                    <Phone className="w-4 h-4" />
                    <span>Call Us</span>
                  </a>
                </Button>
                <Button className="w-full justify-center" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

