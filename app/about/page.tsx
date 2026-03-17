import { SecondaryPageLayout } from "@/components/secondary-page-layout"

const values = [
  {
    title: "Commercial clarity",
    description: "We focus on calls, bookings, and revenue movement instead of vanity metrics.",
  },
  {
    title: "Premium execution",
    description: "Every page, campaign, and local listing is designed to build trust before the first conversation.",
  },
  {
    title: "Practical partnership",
    description: "Clients get straightforward recommendations, clear reporting, and actions matched to business goals.",
  },
]

export default async function AboutPage() {
  return (
    <SecondaryPageLayout
      eyebrow="About Amplizo"
      title="A local-business growth partner focused on better positioning, better websites, and better lead flow."
      description="Amplizo helps ambitious local brands create a premium online presence that converts attention into real commercial outcomes."
    >
      <section className="py-16 md:py-20">
        <div className="container mx-auto grid gap-6 px-4 md:px-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-[2rem] border border-white/80 bg-white/84 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/60 backdrop-blur">
              <h2 className="text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                {value.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SecondaryPageLayout>
  )
}
