"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { CheckCircle2, Loader2, ArrowRight, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getLucideIcon } from "@/lib/icon-map"
import type { SiteContent } from "@/lib/site-content"

type LeadMagnetProps = {
  content: SiteContent["leadMagnet"]
}

export function LeadMagnet({ content }: LeadMagnetProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="audit" className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4 rounded-full bg-accent/10 text-accent">
            {content.eyebrow}
          </Badge>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {content.title}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{content.titleHighlight}</span>{" "}
            {content.titleSuffix}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{content.description}</p>
        </div>

        <div className="mx-auto mb-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.deliverables.map((item) => {
            const Icon = getLucideIcon(item.icon)
            return (
              <Card key={item.title} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="mb-2 font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4 rounded-t-xl bg-accent/10 py-3">
            {content.urgencyItems.map((item) => {
              const Icon = getLucideIcon(item.icon)
              return (
                <div key={item.text} className="flex items-center gap-2 text-sm">
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              )
            })}
          </div>

          <Card className="overflow-hidden rounded-t-none border-border/50 shadow-xl">
            <CardContent className="p-8 md:p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/20">
                    <CheckCircle2 className="h-10 w-10 text-accent" />
                  </div>
                  <h4 className="mb-3 text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                    {content.successTitle}
                  </h4>
                  <p className="mb-6 max-w-md text-muted-foreground">{content.successDescription}</p>
                  <Button variant="outline" className="rounded-full" asChild>
                    <a href="#contact">
                      {content.successButton}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ) : (
                <>
                  <h4 className="mb-2 text-center text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                    {content.formTitle}
                  </h4>
                  <p className="mb-6 text-center text-sm text-muted-foreground">{content.formDescription}</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FieldGroup>
                        <Field>
                          <FieldLabel>{content.nameLabel}</FieldLabel>
                          <Input placeholder={content.namePlaceholder} required className="rounded-lg" />
                        </Field>
                      </FieldGroup>
                      <FieldGroup>
                        <Field>
                          <FieldLabel>{content.phoneLabel}</FieldLabel>
                          <Input type="tel" placeholder={content.phonePlaceholder} required className="rounded-lg" />
                        </Field>
                      </FieldGroup>
                    </div>
                    <FieldGroup>
                      <Field>
                        <FieldLabel>{content.businessLabel}</FieldLabel>
                        <Input placeholder={content.businessPlaceholder} required className="rounded-lg" />
                      </Field>
                    </FieldGroup>
                    <FieldGroup>
                      <Field>
                        <FieldLabel>{content.mapsLabel}</FieldLabel>
                        <Input placeholder={content.mapsPlaceholder} className="rounded-lg" />
                      </Field>
                    </FieldGroup>
                    <Button type="submit" className="w-full rounded-lg" size="lg" disabled={isSubmitting}>
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

                  <div className="mt-6 flex flex-col items-center gap-3 border-t border-border pt-6">
                    <div className="flex -space-x-2">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background">
                        <Image src="/images/testimonial-1.jpg" alt="" fill className="object-cover" />
                      </div>
                      <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background">
                        <Image src="/images/testimonial-2.jpg" alt="" fill className="object-cover" />
                      </div>
                      <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background">
                        <Image src="/images/testimonial-3.jpg" alt="" fill className="object-cover" />
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-medium text-primary-foreground">
                        +
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{content.socialProof}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Shield className="h-3 w-3" />
                    <span>{content.privacyNote}</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
