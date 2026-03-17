import { SecondaryPageLayout } from "@/components/secondary-page-layout"

const roles = [
  "Performance Marketing Specialist",
  "Website Designer for Local Brands",
  "Client Success and Operations Coordinator",
]

export default async function CareersPage() {
  return (
    <SecondaryPageLayout
      eyebrow="Careers"
      title="Join a team building sharper digital growth systems for local businesses."
      description="This careers page is now live and aligned with the main site theme. It can be expanded later with application workflows if needed."
    >
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="space-y-4">
            {roles.map((role) => (
              <article key={role} className="rounded-[2rem] border border-white/80 bg-white/84 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/60 backdrop-blur">
                <h2 className="text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                  {role}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  To express interest, share your profile and portfolio through the main contact or WhatsApp flow and the team can follow up directly.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SecondaryPageLayout>
  )
}
