import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/hero-section"
import { MetricsBar } from "@/components/metrics-bar"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { HowItWorks } from "@/components/how-it-works"
import { AnalyticsSection } from "@/components/analytics-section"
import { CaseStudies } from "@/components/case-studies"
import { Testimonials } from "@/components/testimonials"
import { LeadMagnet } from "@/components/lead-magnet"
import { BookingSection } from "@/components/booking-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getSiteContent } from "@/lib/content-store"

export const dynamic = "force-dynamic"

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent()

  return {
    title: content.site.title,
    description: content.site.description,
  }
}

export default async function Home() {
  const content = await getSiteContent()

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar content={content.navbar} logo={content.site.logo} />
      <HeroSection content={content.hero} />
      <MetricsBar content={content.metricsBar} />
      <ServicesSection content={content.services} />
      <PortfolioSection content={content.portfolio} />
      <HowItWorks content={content.howItWorks} />
      <AnalyticsSection content={content.analytics} />
      <CaseStudies content={content.caseStudies} />
      <Testimonials content={content.testimonials} />
      <LeadMagnet content={content.leadMagnet} />
      <BookingSection content={content.booking} />
      <ContactSection content={content.contact} />
      <Footer content={content.footer} logo={content.site.logo} contactInfo={content.contact.info} />
      <WhatsAppButton content={content.site} />
    </main>
  )
}
