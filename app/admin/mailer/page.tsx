import { redirect } from "next/navigation"
import { AdminShell } from "@/components/admin/admin-shell"
import { isAdminAuthenticated } from "@/lib/admin-auth"

export default async function AdminMailerPage() {
  const isAuthenticated = await isAdminAuthenticated()

  if (!isAuthenticated) {
    redirect("/admin")
  }

  return (
    <AdminShell title="Mailer" description="Email campaigns, templates, lists, aur automated sequences ke liye CRM mailer module.">
      <div className="rounded-[2rem] border border-white/80 bg-white/88 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Coming Soon</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
          Mailer workspace
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Yahan future mein campaigns, templates, sending domains, schedules, aur delivery analytics manage honge.
        </p>
      </div>
    </AdminShell>
  )
}
