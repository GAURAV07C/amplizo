import { SecondaryPageLayout } from "@/components/secondary-page-layout"

const faqs = [
  {
    question: "How do I start with Amplizo?",
    answer: "Use the booking form or WhatsApp button to request a strategy call. Both flows are now connected and working.",
  },
  {
    question: "Which services are best for local businesses?",
    answer: "Most businesses start with a mix of local visibility work, website conversion improvements, and paid demand capture.",
  },
  {
    question: "How quickly can campaigns or website work begin?",
    answer: "After the initial discussion, next steps can be scoped around goals, timelines, and available assets.",
  },
]

export default async function HelpCenterPage() {
  return (
    <SecondaryPageLayout
      eyebrow="Help Center"
      title="Quick answers for prospects exploring services, booking, and support."
      description="This page replaces the previous dead footer link with a usable destination that helps visitors keep moving."
    >
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl space-y-4 px-4 md:px-6">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[2rem] border border-white/80 bg-white/84 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/60 backdrop-blur">
              <h2 className="text-xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                {faq.question}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </SecondaryPageLayout>
  )
}
