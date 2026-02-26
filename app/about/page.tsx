'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Target, Users, Zap, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const values = [
  {
    title: 'Result-Oriented',
    description: 'We focus on metrics that matter: leads, sales, and ROI.',
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
    description: 'Transparent reporting and honest advice at every step.',
    icon: ShieldCheck,
  },
]

const growthTimeline = [
  { year: '2021', title: 'Agency Launch', description: 'Started with a mission to build ROI-first digital systems.' },
  { year: '2022', title: 'Performance Engine', description: 'Scaled paid media and SEO frameworks into high-conversion playbooks.' },
  { year: '2024', title: 'Multi-Channel Scale', description: 'Expanded across social, local SEO, and lead systems with integrated reporting.' },
  { year: '2026', title: 'Growth Partner', description: 'Operating as a full-stack growth partner for ambitious brands.' },
]

export default function AboutPage() {
  const missionRef = React.useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: missionRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [18, -18])

  return (
    <div className="flex flex-col gap-32 pb-32 bg-mesh">
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="aura-primary top-[-20%] right-[-10%] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass border-primary/20 text-primary font-black text-[10px] uppercase tracking-[0.4em]"
            >
              <Users className="w-4 h-4" />
              <span>The Collective</span>
            </motion.div>

            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-7xl md:text-9xl lg:text-[13rem] font-black tracking-tighter leading-[0.7] uppercase italic text-gradient skew-title"
              >
                Crafting <br />
                <span className="text-gradient-dynamic">Digital</span> <br />
                Excellence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.35 }}
                className="text-2xl md:text-5xl text-muted-foreground max-w-5xl leading-relaxed font-light font-serif italic"
              >
                We are a precision-focused growth agency dedicated to scaling businesses through{' '}
                <span className="text-foreground font-bold underline decoration-primary/30 decoration-8 underline-offset-8">
                  data-driven digital engineering
                </span>
                .
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24" ref={missionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div className="relative group" style={{ y: imageY }}>
            <div className="aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl border border-primary/20 glass-card">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Our team"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="absolute -top-12 -right-12 bg-primary p-14 rounded-[56px] shadow-2xl text-primary-foreground hidden md:block transform -rotate-6 group-hover:rotate-0 transition-all duration-700">
              <div className="text-8xl font-black tracking-tighter mb-1">5+</div>
              <div className="text-xs font-black uppercase tracking-[0.3em] opacity-80">Years of Dominance</div>
            </div>
          </motion.div>

          <div className="space-y-20">
            <div className="space-y-8">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">The Mission</h2>
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                Engineered <br /> <span className="text-muted-foreground/30">For Growth</span>
              </h3>
              <p className="text-2xl text-muted-foreground font-light leading-relaxed">
                Our mission is simple: generate leads, increase sales, and build stronger brands with systems that actually convert.
              </p>
            </div>

            <Button size="lg" className="h-20 px-14 text-2xl font-black rounded-full" asChild>
              <Link href="/contact">Deploy Strategy</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Trajectory</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Company <span className="text-gradient-dynamic">Timeline</span>
            </h3>
          </div>
          <div className="relative pl-6 md:pl-14 space-y-14">
            <div className="absolute left-0 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/70 via-accent/70 to-primary/25 shadow-[0_0_20px_oklch(0.72_0.18_236_/_0.7)]" />
            {growthTimeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative glass-card rounded-[34px] p-8 md:p-10"
              >
                <span className="absolute -left-[27px] md:-left-[35px] top-10 size-4 rounded-full bg-primary shadow-[0_0_14px_oklch(0.72_0.18_236_/_0.9)]" />
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.35em] font-black text-accent">{item.year}</p>
                  <h4 className="text-3xl md:text-4xl font-black tracking-tight uppercase">{item.title}</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="text-center space-y-8 mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">The Foundation</h2>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            Core <span className="text-primary">Values</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-14 rounded-[56px] glass-card hover:border-primary/50 transition-all duration-700 group text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10 mx-auto group-hover:scale-110 transition-transform">
                <value.icon className="w-10 h-10" />
              </div>
              <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">{value.title}</h4>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

