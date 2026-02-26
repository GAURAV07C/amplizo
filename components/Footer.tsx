import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Company Info */}
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-black text-3xl shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                A
              </div>
              <span className="font-black text-3xl tracking-tighter uppercase italic">AMPLIZO</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Architecting high-performance digital growth engines for the next generation of market leaders.
            </p>
            <div className="flex items-center gap-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 hover:bg-primary hover:text-primary-foreground transition-all duration-500 group">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.4em] text-primary mb-10">Navigation</h4>
            <ul className="space-y-6">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-xl font-light text-muted-foreground hover:text-foreground transition-all flex items-center gap-3 group">
                    <span className="w-0 h-px bg-primary group-hover:w-6 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.4em] text-primary mb-10">Solutions</h4>
            <ul className="space-y-6">
              {[
                'Google Ads Management',
                'Local SEO & Maps',
                'Social Media Marketing',
                'Lead Generation Systems',
              ].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-xl font-light text-muted-foreground hover:text-foreground transition-all flex items-center gap-3 group">
                    <span className="w-0 h-px bg-primary group-hover:w-6 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.4em] text-primary mb-10">Connect</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-2xl text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Call Us</div>
                  <a href="tel:+919430804147" className="text-xl font-black hover:text-primary transition-colors">+91 94308 04147</a>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-2xl text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Email Us</div>
                  <a href="mailto:info@amplizo.com" className="text-xl font-black hover:text-primary transition-colors break-all">info@amplizo.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
          <p>© {new Date().getFullYear()} AMPLIZO. Engineered for Growth.</p>
          <div className="flex items-center gap-12">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
