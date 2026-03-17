import { ArrowRight } from "lucide-react"
import { SecondaryPageLayout } from "@/components/secondary-page-layout"
import { getSiteContent } from "@/lib/content-store"
import { getLucideIcon } from "@/lib/icon-map"
import { slugify } from "@/lib/marketing-utils"

export default async function ServicesPage() {
  const content = await getSiteContent()

  return (
    <SecondaryPageLayout
      eyebrow="Services"
      title="Growth services designed to turn local discovery into qualified demand."
      description="Explore the solutions Amplizo uses to improve visibility, drive better leads, and build stronger digital trust for local brands."
    >
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.services.items.map((service) => {
              const Icon = getLucideIcon(service.icon)

              return (
                <article
                  key={service.title}
                  id={slugify(service.title)}
                  className="scroll-mt-24 rounded-[2rem] border border-white/80 bg-white/84 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.4)] ring-1 ring-slate-200/60 backdrop-blur"
                >
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-slate-950`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                  <a
                    href="/#contact"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-slate-950 transition-colors hover:text-primary"
                  >
                    Discuss this service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </SecondaryPageLayout>
  )
}
