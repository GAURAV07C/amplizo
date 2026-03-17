import { SecondaryPageLayout } from "@/components/secondary-page-layout"

export default async function PrivacyPolicyPage() {
  return (
    <SecondaryPageLayout
      eyebrow="Privacy Policy"
      title="A live privacy page is now in place for footer navigation and visitor trust."
      description="This page can be replaced with your final legal copy later without changing any navigation structure."
    >
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-[2rem] border border-white/80 bg-white/84 p-7 text-slate-600 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/60 backdrop-blur">
            Amplizo may collect basic contact details shared through forms, calls, or WhatsApp so the team can respond to service enquiries and project discussions. Final legal text should be reviewed before launch, but this route now works and matches the site theme.
          </div>
        </div>
      </section>
    </SecondaryPageLayout>
  )
}
