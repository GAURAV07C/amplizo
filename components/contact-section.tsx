"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle2 } from "lucide-react"
import { getLucideIcon } from "@/lib/icon-map"
import type { SiteContent } from "@/lib/site-content"
import { buildContactMessage, buildWhatsAppLink, slugify } from "@/lib/marketing-utils"

type ContactSectionProps = {
  content: SiteContent["contact"]
  site: SiteContent["site"]
}

export function ContactSection({ content, site }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const serviceLabel =
      selectedService && content.serviceOptions.length
        ? content.serviceOptions.find((service) => slugify(service) === selectedService) ?? "General Inquiry"
        : "General Inquiry"
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      business: String(formData.get("business") ?? "").trim(),
      service: serviceLabel,
      message: String(formData.get("message") ?? "").trim() || "I would like to know more about your services.",
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    window.open(buildWhatsAppLink(site.whatsappNumber, buildContactMessage(payload)), "_blank", "noopener,noreferrer")
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(248,250,252,0.65),rgba(255,255,255,1))]" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{content.eyebrow}</p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {content.title} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{content.titleHighlight}</span>
          </h2>
          <p className="text-pretty text-lg leading-8 text-slate-600">{content.description}</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="space-y-4">
            {content.info.map((info) => {
              const Icon = getLucideIcon(info.icon)
              return (
                <div key={info.label} className="flex items-start gap-4 rounded-[1.75rem] border border-white/80 bg-white/84 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.32)] ring-1 ring-slate-200/60 backdrop-blur">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-950">{info.label}</p>
                    <p className="text-sm leading-6 text-slate-600">{info.value}</p>
                  </div>
                </div>
              )
            })}

            <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-slate-950 p-6 text-white shadow-[0_30px_70px_-38px_rgba(15,23,42,0.75)]">
              <div className="flex h-full min-h-[220px] flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{content.visitLabel}</p>
                  <h3 className="mt-3 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {content.cardTitle}
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                  {content.cardDescription}
                </div>
              </div>
            </div>
          </div>

          <Card className="rounded-[2rem] border-white/80 bg-white/88 shadow-[0_28px_70px_-38px_rgba(15,23,42,0.38)] ring-1 ring-slate-200/60 backdrop-blur">
            <CardContent className="p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/12">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="mb-2 text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                    {content.successTitle}
                  </h4>
                  <p className="max-w-md text-slate-600">{content.successDescription}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FieldGroup>
                      <Field>
                        <FieldLabel>{content.nameLabel}</FieldLabel>
                        <Input name="name" placeholder={content.namePlaceholder} required className="rounded-2xl border-slate-200/80 bg-slate-50/70" />
                      </Field>
                    </FieldGroup>
                    <FieldGroup>
                      <Field>
                        <FieldLabel>{content.phoneLabel}</FieldLabel>
                        <Input name="phone" type="tel" placeholder={content.phonePlaceholder} required className="rounded-2xl border-slate-200/80 bg-slate-50/70" />
                      </Field>
                    </FieldGroup>
                  </div>

                  <FieldGroup>
                    <Field>
                      <FieldLabel>{content.businessLabel}</FieldLabel>
                      <Input name="business" placeholder={content.businessPlaceholder} required className="rounded-2xl border-slate-200/80 bg-slate-50/70" />
                    </Field>
                  </FieldGroup>

                  <FieldGroup>
                    <Field>
                      <FieldLabel>{content.serviceLabel}</FieldLabel>
                      <Select required value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger className="rounded-2xl border-slate-200/80 bg-slate-50/70">
                          <SelectValue placeholder={content.servicePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {content.serviceOptions.map((service) => (
                            <SelectItem key={service} value={slugify(service)}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </FieldGroup>

                  <FieldGroup>
                    <Field>
                      <FieldLabel>{content.messageLabel}</FieldLabel>
                      <Textarea name="message" placeholder={content.messagePlaceholder} className="min-h-[140px] rounded-2xl border-slate-200/80 bg-slate-50/70" />
                    </Field>
                  </FieldGroup>

                  <Button type="submit" className="h-12 w-full rounded-full bg-slate-950 text-white hover:bg-slate-800" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {content.submittingLabel}
                      </>
                    ) : (
                      content.submitLabel
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
