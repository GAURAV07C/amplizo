import { redirect } from "next/navigation"
import { AdminEditor } from "@/components/admin/admin-editor"
import { AdminShell } from "@/components/admin/admin-shell"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getSiteContent } from "@/lib/content-store"

export default async function AdminSiteDataPage() {
  const isAuthenticated = await isAdminAuthenticated()

  if (!isAuthenticated) {
    redirect("/admin")
  }

  const content = await getSiteContent()

  return (
    <AdminShell title="Site Data" description="Public website ka saara visible content, images, logo settings, CTA copy aur structure yahan manage karo.">
      <AdminEditor initialContent={content} />
    </AdminShell>
  )
}
