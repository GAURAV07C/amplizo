import { SecondaryPageLayout } from "@/components/secondary-page-layout"

export default async function CookiePolicyPage() {
  return (
    <SecondaryPageLayout
      eyebrow="Cookie Policy"
      title="The cookie policy route is now live and linked properly from the footer."
      description="It currently serves as a themed placeholder page so the website remains complete and professionally navigable."
    >
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-[2rem] border border-white/80 bg-white/84 p-7 text-slate-600 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/60 backdrop-blur">
            This website may use basic analytics and session technologies to understand visitor behavior and improve experience. Update this page with your final cookie disclosures whenever your legal copy is ready.
          </div>
        </div>
      </section>
    </SecondaryPageLayout>
  )
}
