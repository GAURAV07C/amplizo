import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getSiteContent, updateSiteContentSection } from "@/lib/content-store"
import type { SiteContent } from "@/lib/site-content"

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const content = await getSiteContent()
  return NextResponse.json(content)
}

export async function PATCH(request: Request) {
  try {
    if (!(await isAdminAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json().catch(() => null) as { section?: keyof SiteContent; value?: unknown } | null

    if (!body?.section || typeof body.value === "undefined") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const content = await updateSiteContentSection(body.section, body.value as SiteContent[keyof SiteContent])

    revalidatePath("/")
    revalidatePath("/about")
    revalidatePath("/blog")
    revalidatePath("/careers")
    revalidatePath("/cookie-policy")
    revalidatePath("/help-center")
    revalidatePath("/portfolio")
    revalidatePath("/privacy-policy")
    revalidatePath("/services")
    revalidatePath("/terms-of-service")
    revalidatePath("/admin")
    revalidatePath("/admin/sitedata")

    return NextResponse.json(content)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong while saving content."
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
