import type { ReactNode } from "react"
import { ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

type AdminShellProps = {
  title: string
  description: string
  children: ReactNode
}

export function AdminShell({ title, description, children }: AdminShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_22%),linear-gradient(180deg,#f8fbff_0%,#f4f8fc_42%,#ffffff_100%)] px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 lg:flex-row">
        <AdminSidebar />

        <section className="min-w-0 flex-1">
          <div className="mb-6 overflow-hidden rounded-[2rem] border border-white/80 bg-white/92 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
            <div className="bg-[linear-gradient(90deg,rgba(15,23,42,0.04),rgba(59,130,246,0.05),rgba(16,185,129,0.05))] px-6 py-6 md:px-8">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                  <Sparkles className="h-3.5 w-3.5 text-sky-600" />
                  Workspace
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Secure Session
                </div>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-slate-950 md:text-[2.2rem]" style={{ fontFamily: "var(--font-display)" }}>
                    {title}
                  </h1>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>
                </div>
                <form action="/api/admin/logout" method="post">
                  <Button type="submit" variant="outline" className="rounded-full border-slate-300 bg-white px-5 shadow-sm">
                    Logout
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {children}
        </section>
      </div>
    </main>
  )
}
