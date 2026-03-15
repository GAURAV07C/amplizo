import Link from "next/link"
import { ArrowUpRight, Bot, Layers3, Mail, Settings2, Sparkles } from "lucide-react"
import { AdminLoginForm } from "@/components/admin/admin-login-form"
import { AdminShell } from "@/components/admin/admin-shell"
import { isAdminAuthenticated } from "@/lib/admin-auth"

const modules = [
  {
    title: "Site Data",
    description: "Website copy, images, logo sizing, links, and public-facing content manage karo.",
    href: "/admin/sitedata",
    icon: Settings2,
  },
  {
    title: "AI Agents",
    description: "Future automation workflows, assistants, and agent orchestration ke liye reserved module.",
    href: "/admin/ai-agents",
    icon: Bot,
  },
  {
    title: "Mailer",
    description: "Campaign emails, templates, and outbound sequences ke liye CRM space.",
    href: "/admin/mailer",
    icon: Mail,
  },
]

export default async function AdminDashboardPage() {
  const isAuthenticated = await isAdminAuthenticated()

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_24%),linear-gradient(180deg,#f8fbff,#ffffff)] px-4 py-12 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-900/80 bg-[linear-gradient(180deg,#081120,#0f172a)] p-8 text-white shadow-[0_36px_90px_-44px_rgba(15,23,42,0.85)] md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100">
              <Sparkles className="h-3.5 w-3.5" />
              Amplizo CRM
            </div>
            <h1 className="mt-6 max-w-lg text-4xl font-bold leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
              Premium admin workspace for content, ops, and automation.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Login ke baad aapko ek polished CRM shell milega jisme site data, future AI agents, mailer workflows aur aur bhi modules manage kar paoge.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                <Layers3 className="h-5 w-5 text-sky-300" />
                <p className="mt-3 text-sm font-semibold text-white">Structured Modules</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">Clear separation for CRM tools and web content.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                <Settings2 className="h-5 w-5 text-emerald-300" />
                <p className="mt-3 text-sm font-semibold text-white">Site Control</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">Text, images, order, links, and visual settings.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                <Bot className="h-5 w-5 text-violet-300" />
                <p className="mt-3 text-sm font-semibold text-white">Future Ready</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">AI agents, mailer, and automation modules ready.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Admin Access</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
              Login to CRM
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Clean workspace, premium layout, aur future business tools ke saath admin dashboard access karo.
            </p>
            <div className="mt-8">
              <AdminLoginForm />
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <AdminShell title="CRM Dashboard" description="Admin modules ka central workspace. Yahan se future tools, content systems, aur operations ko polished way mein manage kar sakte ho.">
      <div className="mb-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-[1.75rem] border border-white/80 bg-white/90 p-5 shadow-[0_18px_50px_-36px_rgba(15,23,42,0.35)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Active Modules</p>
          <p className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>3</p>
          <p className="mt-2 text-sm text-slate-600">Current admin modules available in the CRM workspace.</p>
        </div>
        <div className="rounded-[1.75rem] border border-white/80 bg-white/90 p-5 shadow-[0_18px_50px_-36px_rgba(15,23,42,0.35)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Content Control</p>
          <p className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>Full</p>
          <p className="mt-2 text-sm text-slate-600">Website text, image URLs, order, CTA labels, and logo settings editable.</p>
        </div>
        <div className="rounded-[1.75rem] border border-white/80 bg-white/90 p-5 shadow-[0_18px_50px_-36px_rgba(15,23,42,0.35)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Workspace Status</p>
          <p className="mt-3 text-3xl font-bold text-emerald-600" style={{ fontFamily: "var(--font-display)" }}>Ready</p>
          <p className="mt-2 text-sm text-slate-600">CRM shell is live and ready for more modules.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon

          return (
            <Link
              key={module.href}
              href={module.href}
              className="group rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.9))] p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_70px_-38px_rgba(15,23,42,0.42)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                {module.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-950">
                Open module
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          )
        })}
      </div>
    </AdminShell>
  )
}
