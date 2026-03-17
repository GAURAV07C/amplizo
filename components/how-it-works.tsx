import { Search, Lightbulb, Rocket, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getLucideIcon } from "@/lib/icon-map"
import type { SiteContent } from "@/lib/site-content"

type HowItWorksProps = {
  content: SiteContent["howItWorks"]
}

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section id="process" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{content.eyebrow}</p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {content.title} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{content.titleHighlight}</span>
          </h2>
          <p className="text-pretty text-lg leading-8 text-slate-600">{content.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {content.steps.map((step) => {
            const Icon = getLucideIcon(step.icon)
            return (
              <article
                key={step.number}
                className="rounded-[2rem] border border-white/80 bg-white/82 p-7 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.38)] ring-1 ring-slate-200/60 backdrop-blur"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{step.number}</p>
                      <h3 className="text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <Badge className="rounded-full bg-primary/12 px-3 py-1.5 text-primary hover:bg-primary/12">{step.timeline}</Badge>
                </div>
                <p className="mb-6 text-base leading-7 text-slate-600">{step.description}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {step.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-2xl border border-slate-200/80 bg-slate-50/70 px-4 py-3 text-sm leading-6 text-slate-700">
                      {bullet}
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="rounded-full bg-slate-950 px-8 text-white hover:bg-slate-800" asChild>
            <a href="#contact">
              {content.ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
