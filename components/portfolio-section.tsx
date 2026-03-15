"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import type { SiteContent } from "@/lib/site-content"

type PortfolioSectionProps = {
  content: SiteContent["portfolio"]
}

export function PortfolioSection({ content }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" ? content.items : content.items.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(248,250,252,0.7),rgba(241,245,249,0.8),rgba(255,255,255,0.92))]" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4 rounded-full border border-white/70 bg-white/80 px-4 py-1.5 text-slate-700">
            {content.eyebrow}
          </Badge>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {content.title} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{content.titleHighlight}</span>
          </h2>
          <p className="text-pretty text-lg leading-8 text-slate-600">{content.description}</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {content.categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className={`rounded-full border-white/80 px-4 ${activeCategory === category ? "bg-slate-950 text-white hover:bg-slate-900" : "bg-white/80 text-slate-700 hover:bg-white"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.4)] ring-1 ring-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_-34px_rgba(15,23,42,0.45)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} website design`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.68))]" />
                <div className="absolute left-5 top-5">
                  <Badge className="rounded-full bg-white/90 text-slate-900">{item.results}</Badge>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/75">{item.category}</p>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      {item.title}
                    </h3>
                  </div>
                  <Button size="icon" className="rounded-full bg-white/14 text-white backdrop-blur hover:bg-white hover:text-slate-950">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-5 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {item.services.map((service) => (
                    <span key={service} className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                      {service}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="-ml-4 rounded-full px-4 text-slate-900 hover:bg-slate-100/80">
                  {content.viewProjectLabel}
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
