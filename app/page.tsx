'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  BarChart3,
  Search,
  Share2,
  Target,
  Zap,
  ShieldCheck,
  TrendingUp,
  Users,
  MessageSquare,
  Star,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/ContactForm'
import { BrandLogo } from '@/components/BrandLogo'
import { CountUpNumber } from '@/components/CountUpNumber'

const services = [
  {
    title: 'Google Ads Management',
    description: 'High-converting Google Ads campaigns designed to generate instant leads and maximize ROI.',
    icon: Target,
  },
  {
    title: 'Business Profile Optimization',
    description: 'Optimize and rank your Google Business Profile to dominate local search results and Google Maps.',
    icon: Search,
  },
  {
    title: 'Social Media Marketing',
    description: 'Engaging content and ad campaigns that grow your brand and turn followers into customers.',
    icon: Share2,
  },
  {
    title: 'Local SEO',
    description: 'Rank higher in local searches and attract nearby customers ready to buy.',
    icon: TrendingUp,
  },
  {
    title: 'Branding',
    description: 'Build a strong, professional brand identity that builds trust and authority.',
    icon: Zap,
  },
  {
    title: 'Lead Generation',
    description: 'Strategic systems designed to consistently generate high-quality leads.',
    icon: BarChart3,
  },
]

const processSteps = [
  {
    title: 'Understand Your Business',
    description: 'We dive deep into your goals, audience, and competitors.',
  },
  {
    title: 'Create Custom Strategy',
    description: 'A tailored roadmap designed for maximum conversion.',
  },
  {
    title: 'Launch & Optimize',
    description: 'We launch campaigns and continuously refine for performance.',
  },
  {
    title: 'Generate Leads & Scale',
    description: 'Watch your business grow with consistent lead flow.',
  },
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Local Business Owner',
    content: 'Amplizo transformed our online presence. Our Google Ads leads doubled in just two months!',
  },
  {
    name: 'Sarah D\'Souza',
    role: 'E-commerce Founder',
    content: 'The social media strategy brought us customers we never thought we could reach.',
  },
  {
    name: 'Amit Sharma',
    role: 'Real Estate Agent',
    content: 'Their local SEO expertise put us on the map. We are now top-ranked in our area.',
  },
]

const stats = [
  { label: 'Lead Growth', value: 250, suffix: '%' },
  { label: 'Campaign ROI', value: 350, suffix: '%' },
  { label: 'Client Retention', value: 98, suffix: '%' },
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0)

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col gap-32 pb-32 bg-mesh">
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="aura-primary top-[-20%] left-[-10%]"
            animate={{ x: [0, 40, 0], y: [0, 28, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="aura-primary bottom-[-20%] right-[-10%]"
            animate={{ x: [0, -30, 0], y: [0, -18, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass border-primary/20 text-primary font-black text-[10px] uppercase tracking-[0.4em]"
            >
              <Zap className="w-4 h-4" />
              <span>Elevate Your Brand</span>
            </motion.div>

            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
                className="text-7xl md:text-9xl lg:text-[13.2rem] font-black tracking-tighter leading-[0.7] uppercase italic text-gradient skew-title"
              >
                Scale <br />
                <span className="text-gradient-dynamic">Growth</span> <br />
                Results
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-2xl md:text-5xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light font-serif italic"
              >
                Precision-engineered marketing and analytics systems for businesses that demand{' '}
                <span className="text-foreground font-bold underline decoration-primary/30 decoration-8 underline-offset-8">
                  exponential growth
                </span>
                .
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
            >
              <Button size="lg" className="h-20 px-14 text-2xl font-black gap-4 w-full sm:w-auto rounded-full" asChild>
                <Link href="/contact">
                  Start Scaling
                  <ArrowRight className="w-8 h-8" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-20 px-14 text-2xl font-black gap-4 w-full sm:w-auto border-2 rounded-full glass hover:bg-primary/10" asChild>
                <a href="https://wa.me/919430804147">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="rounded-[50px] glass-card px-8 py-12 md:px-16 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center space-y-3 md:px-8 ${index < stats.length - 1 ? 'md:border-r md:border-primary/20' : ''}`}
              >
                <CountUpNumber value={stat.value} suffix={stat.suffix} className="text-6xl md:text-7xl font-black tracking-tight text-gradient-dynamic" />
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{stat.label}</p>
                <div className="neon-divider max-w-24 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Our Arsenal</h2>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Growth <br /> <span className="text-muted-foreground/30">Engines</span>
            </h3>
          </div>
          <Button variant="link" className="text-primary font-black uppercase tracking-widest text-sm group p-0" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group relative p-12 rounded-[40px] glass-card hover:border-primary/60 transition-all duration-700 overflow-hidden will-change-transform"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(130deg,oklch(0.72_0.18_236_/_0.15),transparent_45%,oklch(0.77_0.17_188_/_0.12))]" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative space-y-8">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-black uppercase tracking-tight">{service.title}</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">{service.description}</p>
                </div>
                <Link href="/services" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group/link">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 p-16 rounded-[60px] glass-card flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">The Edge</h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                Why Brands <br /> <span className="text-primary">Trust</span> Us
              </h3>
            </div>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
              We don't just run ads; we engineer growth systems that dominate markets and deliver undeniable ROI.
            </p>
          </div>

          <div className="md:col-span-4 p-12 rounded-[60px] bg-primary flex flex-col items-center justify-center text-center space-y-4 text-primary-foreground">
            <div className="text-8xl font-black tracking-tighter">98%</div>
            <div className="text-xs font-black uppercase tracking-[0.3em]">Client Satisfaction</div>
          </div>

          {[TrendingUp, ShieldCheck, Zap].map((Icon, idx) => {
            const titles = ['ROI Focused', 'Transparency', 'Agility']
            const texts = [
              'Every rupee spent is tracked and optimized for maximum returns.',
              'Real-time reporting and honest communication at every step.',
              'We adapt faster than the algorithms to keep you ahead.',
            ]
            return (
              <div key={titles[idx]} className="md:col-span-4 p-12 rounded-[60px] glass-card space-y-8 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tight">{titles[idx]}</h4>
                <p className="text-muted-foreground font-light">{texts[idx]}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="text-center space-y-8 mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">The Blueprint</h2>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            How We <span className="text-primary">Win</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="relative p-12 rounded-[40px] glass-card text-center group"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-black text-2xl shadow-xl group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight mt-6 mb-4">{step.title}</h4>
              <p className="text-muted-foreground font-light leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto p-20 rounded-[80px] glass-card relative overflow-hidden">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,oklch(0.72_0.18_236_/_0.3),transparent_66%)]"
          />
          <div className="text-center space-y-12">
            <div className="mx-auto w-[460px] max-w-full">
              <BrandLogo imageClassName="max-h-24" />
            </div>
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-primary fill-primary" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeTestimonial].name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-2"
              >
                <p className="text-3xl md:text-5xl font-light font-serif italic leading-tight">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="text-2xl font-black uppercase tracking-widest">{testimonials[activeTestimonial].name}</div>
                <div className="text-primary font-bold uppercase tracking-widest text-xs">{testimonials[activeTestimonial].role}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Get Started</h2>
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                Ready to <br /> <span className="text-primary">Dominate?</span>
              </h3>
              <p className="text-2xl text-muted-foreground font-light leading-relaxed">
                Stop guessing. Start growing. Let's build your growth engine today.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Call Us</div>
                  <a href="tel:+919430804147" className="text-3xl font-black hover:text-primary transition-colors">+91 94308 04147</a>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</div>
                  <a href="https://wa.me/919430804147" className="text-3xl font-black hover:text-primary transition-colors">Message Now</a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-16 rounded-[60px] glass-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

