"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { getLucideIcon } from "@/lib/icon-map"
import type { SiteContent } from "@/lib/site-content"

function AnimatedProgressBar({ before, after, showK }: { before: number; after: number; showK?: boolean }) {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const maxValue = after * 1.2
  const beforeWidth = (before / maxValue) * 100
  const afterWidth = animated ? (after / maxValue) * 100 : 0

  const formatValue = (val: number) => {
    if (showK && val >= 1000) return `${(val / 1000).toFixed(1)}K`
    return val.toString()
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <span className="w-16 text-xs uppercase tracking-[0.18em] text-slate-400">Before</span>
        <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-slate-100">
          <div className="absolute left-0 top-0 h-full rounded-full bg-slate-300" style={{ width: `${beforeWidth}%` }} />
        </div>
        <span className="w-14 text-right text-sm text-slate-500">{formatValue(before)}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-16 text-xs uppercase tracking-[0.18em] text-primary">After</span>
        <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-slate-100">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
            style={{ width: `${afterWidth}%` }}
          />
        </div>
        <span className="w-14 text-right text-sm font-semibold text-slate-950">{formatValue(after)}</span>
      </div>
    </div>
  )
}

type AnalyticsSectionProps = {
  content: SiteContent["analytics"]
}

export function AnalyticsSection({ content }: AnalyticsSectionProps) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{content.eyebrow}</p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {content.title} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{content.titleHighlight}</span>
          </h2>
          <p className="text-pretty text-lg leading-8 text-slate-600">{content.description}</p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {content.stats.map((stat) => {
            const Icon = getLucideIcon(stat.icon)
            return (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 text-center shadow-[0_24px_60px_-38px_rgba(15,23,42,0.38)] ring-1 ring-slate-200/60 backdrop-blur">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-4xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                  {stat.label === "Client Rating" && <Star className="ml-1 inline h-5 w-5 fill-amber-400 text-amber-400" />}
                </p>
                <p className="mt-2 font-medium text-slate-900">{stat.label}</p>
                <p className="mt-1 text-sm text-slate-600">{stat.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/80 bg-white/82 p-7 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.38)] ring-1 ring-slate-200/60 backdrop-blur">
            <h3 className="mb-7 text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
              {content.featuresTitle}
            </h3>
            <div className="space-y-5">
              {content.features.map((feature) => {
                const Icon = getLucideIcon(feature.icon)
                return (
                  <div key={feature.title} className="rounded-2xl border border-slate-200/80 bg-slate-50/75 p-4">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mb-1 font-semibold text-slate-950">{feature.title}</h4>
                    <p className="text-sm leading-6 text-slate-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-900/90 bg-slate-950 p-7 text-white shadow-[0_30px_80px_-38px_rgba(15,23,42,0.7)]">
            <h4 className="mb-2 text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              {content.resultsTitle}
            </h4>
            <p className="mb-8 text-sm leading-6 text-slate-300">{content.resultsDescription}</p>
            <div className="space-y-8">
              {content.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="font-medium text-white">{metric.label}</span>
                    <span className="text-sm text-emerald-300">+{Math.round(((metric.after - metric.before) / metric.before) * 100)}%</span>
                  </div>
                  <AnimatedProgressBar before={metric.before} after={metric.after} showK={"showK" in metric ? metric.showK : undefined} />
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-slate-400">{content.resultsDisclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
