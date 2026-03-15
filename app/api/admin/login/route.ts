import { NextResponse } from "next/server"
import { ADMIN_EMAIL, ADMIN_PASSWORD, setAdminSession } from "@/lib/admin-auth"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (!body || body.email !== ADMIN_EMAIL || body.password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  await setAdminSession()

  return NextResponse.json({ success: true })
}
