"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageCircle, Star } from "lucide-react"
import { getLucideIcon } from "@/lib/icon-map"
import type { SiteContent } from "@/lib/site-content"
import { buildGeneralInquiryMessage, buildWhatsAppLink } from "@/lib/marketing-utils"

type HeroSectionProps = {
  content: SiteContent["hero"]
  site: SiteContent["site"]
}

export function HeroSection({ content, site }: HeroSectionProps) {
  const whatsappLink = buildWhatsAppLink(site.whatsappNumber, buildGeneralInquiryMessage(site))

  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(168,85,47,0.14),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(86,107,88,0.12),transparent_22%),linear-gradient(180deg,rgba(255,251,247,0.98),rgba(247,242,235,0.84)_46%,rgba(255,255,255,1))] pb-20 pt-10 md:pb-28 md:pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="relative max-w-2xl">
            <Badge
              variant="secondary"
              className="mb-6 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-[0.8rem] shadow-[0_12px_30px_-20px_rgba(15,23,42,0.45)] backdrop-blur"
            >
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/15">
                <Star className="h-3.5 w-3.5 text-accent" />
              </span>
              {content.badge}
            </Badge>

            <h1
              className="max-w-xl text-balance text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-6xl lg:text-[4.25rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {content.title}{" "}
              <span className="bg-gradient-to-r from-primary via-amber-600 to-accent bg-clip-text text-transparent">
                {content.titleHighlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">
              {content.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {content.proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-full border border-slate-200/80 bg-white/85 px-4 py-2 text-sm text-slate-700 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.45)] backdrop-blur"
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-13 rounded-full bg-slate-950 px-8 text-base text-white shadow-[0_18px_35px_-18px_rgba(15,23,42,0.55)] hover:bg-slate-800"
                asChild
              >
                <Link href="/#booking">
                  {content.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-slate-300 bg-white/80 px-8 text-base text-slate-900 backdrop-blur hover:bg-white"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {content.secondaryCta}
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {content.stats.map((stat) => {
                const Icon = getLucideIcon(stat.icon)
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] backdrop-blur"
                  >
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${stat.tone}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-3xl font-bold tracking-tight text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative mx-auto max-w-[580px]">
              <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.35)] backdrop-blur lg:block" />
              <div className="absolute -right-6 bottom-24 hidden h-28 w-28 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl lg:block" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 p-3 shadow-[0_36px_80px_-36px_rgba(15,23,42,0.65)]">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-2">
                  <div className="relative overflow-hidden rounded-[1.25rem]">
                    <Image
                      src={content.image}
                      alt={content.imageAlt}
                      width={760}
                      height={860}
                      className="h-[420px] w-full object-cover object-top md:h-[520px]"
                      priority
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.4))]" />
                  </div>
                </div>

                <div className="absolute left-5 top-5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white shadow-lg backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">{content.roiLabel}</p>
                  <p className="mt-2 text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {content.roiValue}
                  </p>
                  <p className="text-sm text-white/75">{content.roiDescription}</p>
                </div>

                <div className="absolute -bottom-6 left-4 right-4 rounded-[1.6rem] border border-slate-200/80 bg-white/92 p-5 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.55)] backdrop-blur md:left-auto md:right-6 md:w-[280px]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">{content.pulseLabel}</p>
                      <p className="mt-2 text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                        {content.pulseValue}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{content.pulseDescription}</p>
                    </div>
                    <div className="rounded-2xl bg-primary/12 px-3 py-2 text-sm font-semibold text-primary">{content.pulseStatus}</div>
                  </div>
                </div>

                <div className="absolute -left-4 bottom-24 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.55)] backdrop-blur md:block">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{content.conversionLabel}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                    {content.conversionValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
