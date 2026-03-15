"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bot, ChevronRight, LayoutDashboard, Mail, Settings2, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const adminNavItems = [
  { href: "/admin", label: "Dashboard", sublabel: "Overview and quick actions", icon: LayoutDashboard },
  { href: "/admin/sitedata", label: "Site Data", sublabel: "Public website content", icon: Settings2 },
  { href: "/admin/ai-agents", label: "AI Agents", sublabel: "Future automations", icon: Bot },
  { href: "/admin/mailer", label: "Mailer", sublabel: "Campaigns and sequences", icon: Mail },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="relative w-full overflow-hidden rounded-[2rem] border border-slate-800/80 bg-[linear-gradient(180deg,#081120_0%,#0f172a_42%,#111827_100%)] p-5 text-white shadow-[0_36px_90px_-42px_rgba(15,23,42,0.82)] lg:sticky lg:top-6 lg:w-[320px] lg:self-start">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_24%)]" />

      <div className="relative mb-8 rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100">
          <Sparkles className="h-3.5 w-3.5" />
          Amplizo CRM
        </div>
        <h2 className="mt-4 text-[1.8rem] font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          Premium Admin Workspace
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">Content, automation, and growth operations ke liye structured control center.</p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Modules</p>
            <p className="mt-2 text-2xl font-bold text-white">4</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Status</p>
            <p className="mt-2 text-sm font-semibold text-emerald-300">Operational</p>
          </div>
        </div>
      </div>

      <nav className="relative space-y-2">
        {adminNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-2xl border px-4 py-3.5 transition-all",
                isActive
                  ? "border-white/40 bg-white text-slate-950 shadow-[0_18px_40px_-28px_rgba(255,255,255,0.65)]"
                  : "border-transparent bg-transparent text-slate-300 hover:border-white/10 hover:bg-white/8 hover:text-white",
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-2xl transition-all",
                    isActive ? "bg-slate-950 text-white" : "bg-white/8 text-slate-100 group-hover:bg-white/12",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className={cn("text-xs", isActive ? "text-slate-500" : "text-slate-400")}>{item.sublabel}</p>
                </div>
              </div>
              <ChevronRight className={cn("h-4 w-4 shrink-0 transition-transform", isActive ? "text-slate-500" : "text-slate-500 group-hover:translate-x-0.5")} />
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
