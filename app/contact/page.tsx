'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle2 } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-32 pb-32 bg-mesh">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="aura-primary top-[-20%] right-[-10%] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl space-y-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass border-primary/20 text-primary font-black text-[10px] uppercase tracking-[0.4em]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>The Connection</span>
            </motion.div>
            
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl lg:text-[13rem] font-black tracking-tighter leading-[0.7] uppercase italic text-gradient skew-title"
              >
                Let's Grow <br />
                <span className="text-primary drop-shadow-[0_0_80px_rgba(var(--primary),0.6)]">Together</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-2xl md:text-5xl text-muted-foreground max-w-5xl leading-relaxed font-light font-serif italic"
              >
                Ready to deploy your growth engine? Fill out the form or reach out directly. We respond <span className="text-foreground font-bold underline decoration-primary/30 decoration-8 underline-offset-8">within 24 hours</span>.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="space-y-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
              <div className="space-y-8 group">
                <div className="text-primary font-black text-xs tracking-[0.5em] uppercase">Phone</div>
                <div className="h-px w-16 bg-primary/30 group-hover:w-full transition-all duration-700" />
                <a href="tel:+919430804147" className="text-4xl font-black hover:text-primary transition-colors block tracking-tighter">
                  +91 94308 04147
                </a>
                <p className="text-muted-foreground font-light text-lg">Mon-Sat, 9am - 7pm</p>
              </div>

              <div className="space-y-8 group">
                <div className="text-primary font-black text-xs tracking-[0.5em] uppercase">Email</div>
                <div className="h-px w-16 bg-primary/30 group-hover:w-full transition-all duration-700" />
                <a href="mailto:info@amplizo.com" className="text-4xl font-black hover:text-primary transition-colors block tracking-tighter break-all">
                  info@amplizo.com
                </a>
                <p className="text-muted-foreground font-light text-lg">24/7 Support Channel</p>
              </div>

              <div className="space-y-8 group">
                <div className="text-primary font-black text-xs tracking-[0.5em] uppercase">WhatsApp</div>
                <div className="h-px w-16 bg-primary/30 group-hover:w-full transition-all duration-700" />
                <a href="https://wa.me/919430804147" className="text-4xl font-black hover:text-primary transition-colors block tracking-tighter">
                  Message Now
                </a>
                <p className="text-muted-foreground font-light text-lg">Instant Response</p>
              </div>

              <div className="space-y-8 group">
                <div className="text-primary font-black text-xs tracking-[0.5em] uppercase">Hours</div>
                <div className="h-px w-16 bg-primary/30 group-hover:w-full transition-all duration-700" />
                <div className="text-4xl font-black tracking-tighter">09:00 - 19:00</div>
                <p className="text-muted-foreground font-light text-lg">Monday - Saturday</p>
              </div>
            </div>

            <div className="p-20 rounded-[80px] glass-card space-y-12">
              <h3 className="text-4xl font-black uppercase tracking-tight">The Edge</h3>
              <div className="space-y-10">
                {[
                  'Free 15-minute business audit & discovery call.',
                  'Custom growth strategy tailored to your industry.',
                  'Transparent pricing with no hidden costs.',
                  'Expert advice from certified marketing professionals.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-8 group">
                    <div className="w-2 h-2 bg-primary rounded-full mt-4 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                    <span className="text-2xl font-light leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="space-y-16 p-16 rounded-[60px] glass-card">
              <div className="space-y-6">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Deploy</h2>
                <h3 className="text-5xl font-black tracking-tighter uppercase">Send a Message</h3>
                <p className="text-xl text-muted-foreground font-light">We’ll get back to you shortly.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-4 py-24">
        <div className="w-full h-[500px] rounded-[80px] glass-card flex flex-col items-center justify-center text-center p-16 space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary animate-float">
            <MapPin className="w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h3 className="text-4xl font-black uppercase tracking-tight">Serving Globally & Locally</h3>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Our team works remotely to provide the best digital marketing services to businesses worldwide, with a strong focus on local growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
