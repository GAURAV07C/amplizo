import Image from "next/image"
import { Quote, Star } from "lucide-react"
import type { SiteContent } from "@/lib/site-content"

type TestimonialsProps = {
  content: SiteContent["testimonials"]
}

export function Testimonials({ content }: TestimonialsProps) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{content.eyebrow}</p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {content.title} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{content.titleHighlight}</span>
          </h2>
          <p className="text-pretty text-lg leading-8 text-slate-600">{content.description}</p>
        </div>

        {/* Stats Bar */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 rounded-3xl bg-gradient-to-r from-primary/8 via-primary/5 to-secondary/8 px-6 py-8 md:gap-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">500+</p>
            <p className="text-sm text-slate-500">Businesses Served</p>
          </div>
          <div className="h-12 w-px bg-slate-200" />
          <div className="text-center">
            <p className="text-4xl font-bold text-secondary">10K+</p>
            <p className="text-sm text-slate-500">Leads Generated</p>
          </div>
          <div className="h-12 w-px bg-slate-200" />
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600">4.9</p>
            <p className="text-sm text-slate-500">Average Rating</p>
          </div>
          <div className="h-12 w-px bg-slate-200" />
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">300%</p>
            <p className="text-sm text-slate-500">Avg. Growth</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((testimonial) => (
            <article
              key={testimonial.name}
              className="card-hover relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/84 p-7 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.38)] ring-1 ring-slate-200/60 backdrop-blur"
            >
              <div className="absolute right-6 top-6 rounded-full bg-slate-100 p-3 text-slate-300">
                <Quote className="h-5 w-5" />
              </div>
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-8 text-lg leading-8 text-slate-700">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl ring-2 ring-white">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
