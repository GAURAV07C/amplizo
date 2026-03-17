"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { getLucideIcon } from "@/lib/icon-map"
import type { SiteContent } from "@/lib/site-content"
import { slugify } from "@/lib/marketing-utils"

type ServicesSectionProps = {
  content: SiteContent["services"]
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{content.eyebrow}</p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {content.title} <span className="bg-gradient-to-r from-primary via-amber-600 to-accent bg-clip-text text-transparent">{content.titleHighlight}</span>
          </h2>
          <p className="text-pretty text-lg leading-8 text-slate-600">{content.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((service) => {
            const Icon = getLucideIcon(service.icon)
            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/82 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.4)] ring-1 ring-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.46)]"
              >
                <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${service.accent} opacity-90`} />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-slate-950 text-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                    {service.title}
                  </h3>
                  <p className="mb-6 text-base leading-7 text-slate-600">{service.description}</p>
                  <Button variant="ghost" className="-ml-4 rounded-full px-4 text-slate-900 hover:bg-slate-100/80 hover:text-slate-950" asChild>
                    <Link href={`/services#${slugify(service.title)}`}>
                      {content.learnMoreLabel}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/80 px-5 py-3 text-sm text-slate-600 shadow-[0_18px_35px_-28px_rgba(15,23,42,0.35)] backdrop-blur">
            <Sparkles className="h-4 w-4 text-accent" />
            {content.note}
          </div>
        </div>
      </div>
    </section>
  )
}
