import { redirect } from "next/navigation"
import { AdminShell } from "@/components/admin/admin-shell"
import { isAdminAuthenticated } from "@/lib/admin-auth"

export default async function AdminAiAgentsPage() {
  const isAuthenticated = await isAdminAuthenticated()

  if (!isAuthenticated) {
    redirect("/admin")
  }

  return (
    <AdminShell title="AI Agents" description="Yeh module future AI agent workflows, prompts, automations, aur task routing ke liye ready rakha gaya hai.">
      <div className="rounded-[2rem] border border-white/80 bg-white/88 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Coming Soon</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
          AI Agents workspace
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Yahan future mein agent configs, knowledge bases, execution logs, aur action pipelines add kar sakte ho.
        </p>
      </div>
    </AdminShell>
  )
}
