import type { SiteContent } from "@/lib/site-content"

type MetricsBarProps = {
  content: SiteContent["metricsBar"]
}

export function MetricsBar({ content }: MetricsBarProps) {

  return (
    <section className="relative py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-[2rem] border border-white/80 bg-white/80 px-6 py-7 shadow-[0_22px_55px_-35px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/60 backdrop-blur">
          <div className="mb-6 flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              {content.eyebrow}
            </p>
            <p className="text-sm text-slate-500">{content.subtext}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {content.companies.map((company) => (
              <span
                key={company}
                className="rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white hover:text-slate-950"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
