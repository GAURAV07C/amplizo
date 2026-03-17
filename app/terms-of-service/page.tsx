import { SecondaryPageLayout } from "@/components/secondary-page-layout"

export default async function TermsOfServicePage() {
  return (
    <SecondaryPageLayout
      eyebrow="Terms of Service"
      title="A working terms page is now available from the footer."
      description="This placeholder keeps navigation functional today and can be replaced with finalized legal content later."
    >
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-[2rem] border border-white/80 bg-white/84 p-7 text-slate-600 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/60 backdrop-blur">
            Services, deliverables, timelines, and commercial terms are typically confirmed during proposal and onboarding. This page is active so users do not hit a dead link while you prepare final legal copy.
          </div>
        </div>
      </section>
    </SecondaryPageLayout>
  )
}
