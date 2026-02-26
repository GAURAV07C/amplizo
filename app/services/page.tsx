'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import {
  Target,
  Search,
  Share2,
  TrendingUp,
  Zap,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    tagline: 'High-converting campaigns designed to generate instant leads.',
    description: 'Stop wasting money on clicks that don\'t convert. We build and manage Google Ads campaigns that target ready-to-buy customers.',
    icon: Target,
    benefits: [
      'Keyword Research & Selection',
      'Ad Copywriting & Design',
      'A/B Testing & Optimization',
      'Conversion Tracking Setup',
      'Monthly Performance Reports',
    ],
    cta: 'Get More Leads Now',
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Maps',
    tagline: 'Rank higher in local searches and attract nearby customers.',
    description: 'Optimize your Google Business Profile and website to dominate local search results and Google Maps in your area.',
    icon: Search,
    benefits: [
      'Google Business Profile Optimization',
      'Local Citation Building',
      'Review Management Strategy',
      'On-Page SEO for Local Keywords',
      'Maps Ranking Tracking',
    ],
    cta: 'Rank Higher Locally',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    tagline: 'Engaging content and ad campaigns that grow your brand.',
    description: 'Turn followers into customers with strategic social media management and high-impact advertising on Facebook, Instagram, and LinkedIn.',
    icon: Share2,
    benefits: [
      'Content Strategy & Creation',
      'Paid Social Ad Campaigns',
      'Community Management',
      'Influencer Outreach',
      'Performance Analytics',
    ],
    cta: 'Grow Your Brand',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation Systems',
    tagline: 'Strategic systems designed to consistently generate high-quality leads.',
    description: 'We build automated systems that capture and nurture leads, ensuring a steady flow of potential customers for your business.',
    icon: BarChart3,
    benefits: [
      'Landing Page Design',
      'Lead Magnet Creation',
      'Email Automation Setup',
      'CRM Integration',
      'Sales Funnel Optimization',
    ],
    cta: 'Scale Your Leads',
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    tagline: 'Build a strong, professional brand identity that builds trust.',
    description: 'Create a memorable brand that stands out from the competition and builds authority in your industry.',
    icon: Zap,
    benefits: [
      'Logo & Visual Identity Design',
      'Brand Voice & Messaging',
      'Website Design & UX',
      'Marketing Collateral',
      'Brand Strategy Development',
    ],
    cta: 'Build Your Brand',
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-32 pb-32 bg-mesh">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="aura-primary top-[-20%] left-[-10%] animate-pulse" />
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
              <Zap className="w-4 h-4" />
              <span>The Arsenal</span>
            </motion.div>
            
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl lg:text-[13rem] font-black tracking-tighter leading-[0.7] uppercase italic text-gradient skew-title"
              >
                Growth <br />
                <span className="text-primary drop-shadow-[0_0_80px_rgba(var(--primary),0.6)]">Solutions</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-2xl md:text-5xl text-muted-foreground max-w-5xl leading-relaxed font-light font-serif italic"
              >
                Precision-engineered digital marketing systems designed to <span className="text-foreground font-bold underline decoration-primary/30 decoration-8 underline-offset-8">dominate markets</span> and deliver undeniable ROI.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="container mx-auto px-4 py-24">
        <div className="space-y-64">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-32 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-16 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="space-y-8">
                  <div className="text-primary font-black text-xs tracking-[0.5em] uppercase">
                    Module {index + 1}
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">{service.title}</h2>
                  <p className="text-3xl font-light text-muted-foreground italic font-serif">
                    {service.tagline}
                  </p>
                  <p className="text-xl text-muted-foreground/80 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-10">
                  <h4 className="font-black text-xs uppercase tracking-[0.3em] text-primary">Strategic Benefits</h4>
                  <div className="grid grid-cols-1 gap-6">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-8 group">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                        <span className="text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 pt-12">
                  <Button size="lg" className="h-20 px-14 text-2xl font-black rounded-full shadow-[0_0_40px_rgba(var(--primary),0.5)] w-full sm:w-auto" asChild>
                    <Link href="/contact">
                      {service.cta}
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="h-20 px-14 text-2xl font-black rounded-full glass w-full sm:w-auto border-2" asChild>
                    <a href="https://wa.me/919430804147">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-[3/4] rounded-[80px] overflow-hidden shadow-2xl bg-secondary border border-white/10 glass-card">
                  <img
                    src={`https://picsum.photos/seed/${service.id}/800/1000`}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                {/* Floating Stat */}
                <div className="absolute -bottom-12 -right-12 bg-primary p-16 rounded-[60px] shadow-2xl max-w-[320px] transform rotate-3 group-hover:rotate-0 transition-all duration-700 text-primary-foreground">
                  <div className="font-black text-7xl tracking-tighter mb-2">3.5X</div>
                  <div className="text-xs font-black uppercase tracking-[0.3em] opacity-80">Average ROI Delivered</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-card rounded-[80px] p-20 md:p-32 text-center space-y-12 relative overflow-hidden glass-card border-white/10">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10" />
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] max-w-4xl mx-auto">
            Not Sure <br /> <span className="text-primary italic font-serif">Where</span> to Start?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Schedule a free 15-minute discovery call and we'll help you identify the best growth strategy for your business.
          </p>
          <Button size="lg" className="h-20 px-14 text-2xl font-black rounded-full shadow-[0_0_40px_rgba(var(--primary),0.5)]" asChild>
            <Link href="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
