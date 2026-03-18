"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bot, ChevronRight, LayoutDashboard, Mail, Settings2, Sparkles, ShoppingCart, Store, DollarSign, Package } from "lucide-react"
import { cn } from "@/lib/utils"

const adminNavItems = [
  { href: "/admin", label: "Dashboard", sublabel: "Overview and quick actions", icon: LayoutDashboard },
  { href: "/admin/sitedata", label: "Site Data", sublabel: "Public website content", icon: Settings2 },
  { href: "/admin/ecommerce", label: "E-Commerce", sublabel: "List products on marketplaces", icon: ShoppingCart },
  { href: "/admin/ai-agents", label: "AI Agents", sublabel: "Future automations", icon: Bot },
  { href: "/admin/mailer", label: "Mailer", sublabel: "Campaigns and sequences", icon: Mail },
]

const ecommercePlatforms = [
  { label: "Etsy Listings", icon: Store, desc: "List on Etsy marketplace" },
  { label: "eBay Listings", icon: Package, desc: "Sell on eBay globally" },
  { label: "Amazon Listings", icon: ShoppingCart, desc: "Amazon seller listings" },
  { label: "Flipkart Listings", icon: Store, desc: "India's top marketplace" },
  { label: "Meesho Listings", icon: ShoppingCart, desc: "Reselling platform" },
  { label: "Shopify Store", icon: Store, desc: "Your own online store" },
  { label: "Lead Management", icon: DollarSign, desc: "Track leads & revenue" },
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
            <p className="mt-2 text-2xl font-bold text-white">5</p>
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

      {/* E-Commerce Platforms Section */}
      <div className="relative mt-6">
        <div className="mb-3 flex items-center gap-2 px-4">
          <ShoppingCart className="h-4 w-4 text-emerald-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Marketplace Listings</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {ecommercePlatforms.map((platform) => {
            const Icon = platform.icon
            return (
              <button
                key={platform.label}
                className="group flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5 text-left transition-all hover:border-white/15 hover:bg-white/10"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-white truncate">{platform.label}</p>
                  <p className="text-[10px] text-slate-400 truncate">{platform.desc}</p>
                </div>
              </button>
            )
          })}
        </div>
        <p className="mt-3 px-4 text-[10px] leading-4 text-slate-500">
          List your products on multiple platforms to maximize reach and generate more leads for your clients.
        </p>
      </div>
    </aside>
  )
}
