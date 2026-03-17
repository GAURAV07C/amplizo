import { cookies } from "next/headers"

export const ADMIN_EMAIL = "admin@amplizo.com"
export const ADMIN_PASSWORD = "Amplizo@2024#Secure"
export const ADMIN_COOKIE_NAME = "amplizo_admin_session"
const ADMIN_COOKIE_VALUE = "authenticated"

export async function isAdminAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.get(ADMIN_COOKIE_NAME)?.value === ADMIN_COOKIE_VALUE
}

export async function setAdminSession() {
  const cookieStore = await cookies()
  cookieStore.set(ADMIN_COOKIE_NAME, ADMIN_COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function clearAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_COOKIE_NAME)
}
