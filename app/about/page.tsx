'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { CheckCircle2, Target, Users, Zap, TrendingUp, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const values = [
  {
    title: 'Result-Oriented',
    description: 'We focus on metrics that matter—leads, sales, and ROI.',
    icon: Target,
  },
  {
    title: 'Customer-Centric',
    description: 'Your business goals are our top priority, always.',
    icon: Users,
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of digital trends to keep you competitive.',
    icon: Zap,
  },
  {
    title: 'Integrity',
    description: 'Transparent reporting and honest advice, every step of the way.',
    icon: ShieldCheck,
  },
]

export default function AboutPage() {
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
              <Users className="w-4 h-4" />
              <span>The Collective</span>
            </motion.div>
            
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl lg:text-[13rem] font-black tracking-tighter leading-[0.7] uppercase italic text-gradient skew-title"
              >
                Crafting <br />
                <span className="text-primary drop-shadow-[0_0_80px_rgba(var(--primary),0.6)]">Digital</span> <br />
                Excellence
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-2xl md:text-5xl text-muted-foreground max-w-5xl leading-relaxed font-light font-serif italic"
              >
                We are a precision-focused growth agency dedicated to scaling businesses through <span className="text-foreground font-bold underline decoration-primary/30 decoration-8 underline-offset-8">data-driven digital engineering</span>.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl border border-white/10 glass-card">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Our team"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="absolute -top-12 -right-12 bg-primary p-16 rounded-[60px] shadow-2xl text-primary-foreground hidden md:block transform -rotate-6 group-hover:rotate-0 transition-all duration-700">
              <div className="text-8xl font-black tracking-tighter mb-1">5+</div>
              <div className="text-xs font-black uppercase tracking-[0.3em] opacity-80">Years of Dominance</div>
            </div>
          </div>

          <div className="space-y-20">
            <div className="space-y-8">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">The Mission</h2>
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                Engineered <br /> <span className="text-muted-foreground/30">For Growth</span>
              </h3>
              <p className="text-2xl text-muted-foreground font-light leading-relaxed">
                Our mission is simple: Generate more leads. Increase sales. Build strong brands. We believe every business deserves a digital strategy that actually delivers results.
              </p>
            </div>

            <div className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Our Arsenal</h4>
              <div className="grid grid-cols-1 gap-8">
                {[
                  'Google Ads Dominance',
                  'Local SEO Engineering',
                  'Social Growth Systems',
                  'Lead Generation Engines',
                  'Premium Brand Identity',
                  'Conversion Optimization',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-8 group">
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                    <span className="text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="h-20 px-14 text-2xl font-black rounded-full shadow-[0_0_40px_rgba(var(--primary),0.5)]" asChild>
              <Link href="/contact">Deploy Strategy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center space-y-8 mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">The Foundation</h2>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">Core <span className="text-primary">Values</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-16 rounded-[60px] glass-card hover:border-primary/50 transition-all duration-700 group text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <value.icon className="w-10 h-10" />
              </div>
              <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">{value.title}</h4>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-primary rounded-[80px] p-20 md:p-32 text-center text-primary-foreground space-y-12 relative overflow-hidden shadow-[0_0_80px_rgba(var(--primary),0.3)]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.1]" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full translate-x-1/2 translate-y-1/2 blur-[120px]" />
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] max-w-4xl mx-auto">
            Ready to <br /> <span className="text-black/40 italic font-serif">Dominate</span> Your Market?
          </h2>
          <p className="text-2xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
            Let's build a digital presence that converts visitors into loyal customers and leaves competitors in the dust.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <Button size="lg" variant="secondary" className="h-20 px-14 text-2xl font-black rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
              <Link href="/contact">Start Growing</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-20 px-14 text-2xl font-black bg-transparent border-white/30 text-white hover:bg-white hover:text-primary rounded-full transition-all" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
