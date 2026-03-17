import Image from "next/image"
import { SecondaryPageLayout } from "@/components/secondary-page-layout"
import { getSiteContent } from "@/lib/content-store"
import { slugify } from "@/lib/marketing-utils"

export default async function PortfolioPage() {
  const content = await getSiteContent()

  return (
    <SecondaryPageLayout
      eyebrow="Portfolio"
      title="Selected work built for conversion clarity, faster trust, and stronger local demand."
      description="These projects balance premium presentation with practical business outcomes like calls, bookings, and qualified lead volume."
    >
      <section className="py-16 md:py-20">
        <div className="container mx-auto grid gap-8 px-4 md:px-6">
          {content.portfolio.items.map((item) => (
            <article
              key={item.title}
              id={slugify(item.title)}
              className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/80 bg-white/86 shadow-[0_26px_70px_-40px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/60 backdrop-blur"
            >
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[280px]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{item.category}</p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.services.map((service) => (
                      <span key={service} className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl bg-slate-950 px-5 py-4 text-white">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Outcome</p>
                    <p className="mt-2 text-xl font-semibold">{item.results}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SecondaryPageLayout>
  )
}
