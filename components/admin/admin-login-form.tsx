"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AdminLoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const data = await response.json().catch(() => ({ error: "Login failed" }))
      setError(data.error ?? "Login failed")
      return
    }

    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Admin Email</label>
        <Input
          type="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-12 rounded-2xl border-slate-200/80 bg-slate-50/80"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Password</label>
        <Input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="h-12 rounded-2xl border-slate-200/80 bg-slate-50/80"
        />
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <Button type="submit" className="h-12 w-full rounded-full bg-slate-950 text-white shadow-[0_18px_35px_-18px_rgba(15,23,42,0.45)] hover:bg-slate-800" disabled={isPending}>
        {isPending ? "Signing in..." : "Login to Admin"}
      </Button>
    </form>
  )
}
