import Link from 'next/link'
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { BrandLogo } from '@/components/BrandLogo'

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20 pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 surface-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70rem] h-[24rem] bg-[radial-gradient(circle,oklch(0.72_0.18_236_/_0.2),transparent_72%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="group inline-block">
              <BrandLogo className="w-[280px]" imageClassName="max-h-16" />
            </Link>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Architecting high-performance digital growth engines for the next generation of market leaders.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center bg-white/5 rounded-2xl border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-500 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.35em] text-primary mb-8">Navigation</h4>
            <ul className="space-y-5">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-lg font-light text-muted-foreground hover:text-foreground transition-all flex items-center gap-3 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-6 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.35em] text-primary mb-8">Solutions</h4>
            <ul className="space-y-5">
              {['Google Ads Management', 'Local SEO & Maps', 'Social Media Marketing', 'Lead Generation Systems'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-lg font-light text-muted-foreground hover:text-foreground transition-all flex items-center gap-3 group">
                    <span className="w-0 h-px bg-primary group-hover:w-6 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.35em] text-primary mb-8">Connect</h4>
            <ul className="space-y-7">
              <li className="flex items-start gap-5 group">
                <div className="w-11 h-11 flex items-center justify-center bg-primary/10 rounded-2xl text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Call Us</div>
                  <a href="tel:+919430804147" className="text-lg font-black hover:text-primary transition-colors">+91 94308 04147</a>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="w-11 h-11 flex items-center justify-center bg-primary/10 rounded-2xl text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Email Us</div>
                  <a href="mailto:info@amplizo.com" className="text-lg font-black hover:text-primary transition-colors break-all">info@amplizo.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-14 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
          <div className="flex items-center gap-3 text-center md:text-left">
            <span>© {new Date().getFullYear()} AMPLIZO.</span>
            <span>Engineered for Growth.</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

