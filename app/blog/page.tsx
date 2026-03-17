import { SecondaryPageLayout } from "@/components/secondary-page-layout"

const posts = [
  {
    title: "How local brands can improve Google Maps visibility",
    excerpt: "A practical look at profile completeness, reviews, and local relevance signals that move ranking.",
  },
  {
    title: "What makes a local service website convert better",
    excerpt: "Messaging, trust proof, mobile speed, and CTA placement that turn visits into enquiries.",
  },
  {
    title: "When to choose Google Ads vs. Local SEO",
    excerpt: "A simple framework for balancing quick demand capture with long-term organic visibility.",
  },
]

export default async function BlogPage() {
  return (
    <SecondaryPageLayout
      eyebrow="Blog"
      title="Insights for operators who want smarter local marketing decisions."
      description="This section is ready for future article publishing and already provides live navigation instead of a dead placeholder page."
    >
      <section className="py-16 md:py-20">
        <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[2rem] border border-white/80 bg-white/84 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/60 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Coming soon</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </SecondaryPageLayout>
  )
}
