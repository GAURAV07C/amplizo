import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getLucideIcon } from "@/lib/icon-map"
import type { SiteContent } from "@/lib/site-content"

type CaseStudiesProps = {
  content: SiteContent["caseStudies"]
}

export function CaseStudies({ content }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            {content.eyebrow}
          </p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            {content.title}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {content.titleHighlight}
            </span>
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{content.description}</p>
        </div>

        {/* Case study cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((study) => (
            <Card key={study.business} className="group overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
              {/* Case study image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image}
                  alt={`${study.business} - ${study.industry}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <Badge variant="secondary" className="absolute left-4 top-4 rounded-full">
                  {study.industry}
                </Badge>
              </div>
              <CardHeader className="pb-4 pt-4">
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {study.business}
                </h3>
                <p className="text-sm text-muted-foreground">{study.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {content.resultsHeading}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result) => {
                      const Icon = getLucideIcon(result.icon)
                      return (
                        <div key={result.label} className="text-center">
                          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                            {result.value}
                          </p>
                          <p className="text-xs text-muted-foreground">{result.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
