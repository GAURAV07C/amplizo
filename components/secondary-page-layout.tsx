import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getSiteContent } from "@/lib/content-store"

type SecondaryPageLayoutProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export async function SecondaryPageLayout({ eyebrow, title, description, children }: SecondaryPageLayoutProps) {
  const content = await getSiteContent()

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar content={content.navbar} site={content.site} />
      <section className="relative overflow-hidden border-b border-white/70 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(16,185,129,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,249,0.9)_54%,rgba(255,255,255,1))] pb-14 pt-12 md:pb-20 md:pt-18">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
            <h1 className="text-balance text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">{description}</p>
          </div>
        </div>
      </section>
      {children}
      <Footer content={content.footer} logo={content.site.logo} contactInfo={content.contact.info} />
      <WhatsAppButton content={content.site} />
    </main>
  )
}
