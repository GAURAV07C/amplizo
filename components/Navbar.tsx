'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Phone, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-700',
        scrolled ? 'top-6 px-4' : 'top-0 px-0'
      )}
    >
      <div className={cn(
        "mx-auto transition-all duration-700 flex items-center justify-between",
        scrolled 
          ? "max-w-5xl glass rounded-[32px] py-4 px-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/20" 
          : "max-w-full bg-background/50 backdrop-blur-md py-8 px-10 border-b border-white/5"
      )}>
        <Link href="/" className="flex items-center gap-4 group">
          <div className={cn(
            "bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-black group-hover:scale-110 transition-all duration-700 shadow-[0_0_30px_rgba(var(--primary),0.5)] rotate-3 group-hover:rotate-0",
            scrolled ? "w-10 h-10 text-xl" : "w-14 h-14 text-3xl"
          )}>
            A
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={cn(
              "font-black tracking-tighter uppercase italic hidden sm:block leading-none transition-all",
              scrolled ? "text-xl" : "text-3xl"
            )}>
              AMPLIZO
            </span>
            {!scrolled && (
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-primary hidden sm:block">
                Marketing & Solutions
              </span>
            )}
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-primary relative group',
                pathname === item.href ? 'text-primary' : 'text-foreground/60'
              )}
            >
              {item.name}
              <span className={cn(
                'absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full',
                pathname === item.href && 'w-full'
              )} />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-lg font-medium py-2 border-b border-border/50',
                    pathname === item.href ? 'text-primary' : 'text-foreground/70'
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
