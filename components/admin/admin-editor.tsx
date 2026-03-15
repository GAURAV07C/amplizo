"use client"

import type { ReactNode } from "react"
import { useMemo, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { SiteContent } from "@/lib/site-content"

type AdminEditorProps = {
  initialContent: SiteContent
}

type SaveState = Record<string, "idle" | "saving" | "saved" | "error">
type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue }

function cloneValue<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}

function setAtPath(target: JsonValue, path: Array<string | number>, nextValue: JsonValue): JsonValue {
  if (path.length === 0) return nextValue

  const [head, ...tail] = path

  if (Array.isArray(target)) {
    return target.map((item, index) => (index === head ? setAtPath(item, tail, nextValue) : item))
  }

  if (target && typeof target === "object") {
    return {
      ...target,
      [head]: setAtPath((target as Record<string, JsonValue>)[head as string], tail, nextValue),
    }
  }

  return target
}

function createEmptyValue(template: JsonValue): JsonValue {
  if (Array.isArray(template)) {
    return []
  }

  if (template && typeof template === "object") {
    return Object.fromEntries(
      Object.entries(template).map(([key, value]) => [key, createEmptyValue(value as JsonValue)]),
    ) as JsonValue
  }

  if (typeof template === "number") return 0
  if (typeof template === "boolean") return false
  return ""
}

function moveArrayItem<T>(items: T[], fromIndex: number, toIndex: number) {
  if (toIndex < 0 || toIndex >= items.length) {
    return items
  }

  const next = [...items]
  const [moved] = next.splice(fromIndex, 1)
  next.splice(toIndex, 0, moved)
  return next
}

function isImageField(fieldKey: string, value: JsonValue) {
  return (
    typeof value === "string" &&
    (/(image|logo|src)/i.test(fieldKey) || /\.(png|jpg|jpeg|webp|svg|gif)$/i.test(value) || value.startsWith("/images/"))
  )
}

function labelize(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase())
}

export function AdminEditor({ initialContent }: AdminEditorProps) {
  const router = useRouter()
  const sections = useMemo(
    () => Object.entries(initialContent) as Array<[keyof SiteContent, SiteContent[keyof SiteContent]]>,
    [initialContent],
  )
  const [drafts, setDrafts] = useState(() => cloneValue(initialContent))
  const [saveState, setSaveState] = useState<SaveState>({})
  const [isPending, startTransition] = useTransition()

  const updateSectionValue = (section: keyof SiteContent, path: Array<string | number>, nextValue: JsonValue) => {
    setDrafts((current) => ({
      ...current,
      [section]: setAtPath(current[section] as JsonValue, path, nextValue) as SiteContent[keyof SiteContent],
    }))
  }

  const saveSection = async (section: keyof SiteContent) => {
    try {
      setSaveState((current) => ({ ...current, [section]: "saving" }))

      const response = await fetch("/api/admin/content", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section, value: drafts[section] }),
      })

      if (!response.ok) {
        throw new Error("Failed to save")
      }

      setSaveState((current) => ({ ...current, [section]: "saved" }))
      startTransition(() => router.refresh())
    } catch {
      setSaveState((current) => ({ ...current, [section]: "error" }))
    }
  }

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    startTransition(() => router.refresh())
  }

  const renderField = (
    section: keyof SiteContent,
    fieldKey: string,
    value: JsonValue,
    path: Array<string | number> = [],
  ): ReactNode => {
    const fullPath = [...path, fieldKey]

    if (Array.isArray(value)) {
      const template = value[0] ?? ""
      return (
        <div className="space-y-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-medium text-slate-950">{labelize(fieldKey)}</p>
              <p className="text-xs text-slate-500">Multiple items supported</p>
            </div>
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50"
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                updateSectionValue(section, fullPath, [...value, createEmptyValue(template)] as JsonValue)
              }}
            >
              Add Item
            </button>
          </div>

          <div className="space-y-4">
            {value.map((item, index) => {
              const itemPath = [...fullPath, index]
              const isObjectItem = item && typeof item === "object" && !Array.isArray(item)

              return (
                <div key={`${fieldKey}-${index}`} className="rounded-[1.25rem] border border-white bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-700">{labelize(fieldKey)} #{index + 1}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        className="inline-flex h-10 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                        onClick={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                          updateSectionValue(section, fullPath, moveArrayItem(value, index, index - 1) as JsonValue)
                        }}
                        disabled={index === 0}
                      >
                        Move Up
                      </button>
                      <button
                        type="button"
                        className="inline-flex h-10 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                        onClick={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                          updateSectionValue(section, fullPath, moveArrayItem(value, index, index + 1) as JsonValue)
                        }}
                        disabled={index === value.length - 1}
                      >
                        Move Down
                      </button>
                      <button
                        type="button"
                        className="inline-flex h-10 items-center justify-center rounded-full border border-red-200 bg-white px-4 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 hover:text-red-700"
                        onClick={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                          updateSectionValue(
                            section,
                            fullPath,
                            value.filter((_, itemIndex) => itemIndex !== index) as JsonValue,
                          )
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {isObjectItem ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      {Object.entries(item as Record<string, JsonValue>).map(([childKey, childValue]) => (
                        <div key={`${fieldKey}-${index}-${childKey}`}>{renderField(section, childKey, childValue, itemPath)}</div>
                      ))}
                    </div>
                  ) : (
                    <input
                      value={String(item ?? "")}
                      onChange={(event) => {
                        const next = [...value]
                        next[index] = event.target.value
                        updateSectionValue(section, fullPath, next as JsonValue)
                      }}
                      className="h-11 w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 text-sm outline-none"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )
    }

    if (value && typeof value === "object") {
      return (
        <div className="space-y-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4">
          <div>
            <p className="font-medium text-slate-950">{labelize(fieldKey)}</p>
            <p className="text-xs text-slate-500">Grouped settings</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(value as Record<string, JsonValue>).map(([childKey, childValue]) => (
              <div key={`${fieldKey}-${childKey}`}>{renderField(section, childKey, childValue, fullPath)}</div>
            ))}
          </div>
        </div>
      )
    }

    if (typeof value === "boolean") {
      return (
        <label className="flex items-center justify-between rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 px-4 py-3">
          <span className="text-sm font-medium text-slate-700">{labelize(fieldKey)}</span>
          <input
            type="checkbox"
            checked={value}
            onChange={(event) => updateSectionValue(section, fullPath, event.target.checked)}
            className="h-4 w-4"
          />
        </label>
      )
    }

    const isImage = isImageField(fieldKey, value)
    const inputType = typeof value === "number" ? "number" : "text"

    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">{labelize(fieldKey)}</label>
        <input
          type={inputType}
          value={value === null ? "" : String(value)}
          onChange={(event) =>
            updateSectionValue(
              section,
              fullPath,
              typeof value === "number" ? Number(event.target.value || 0) : event.target.value,
            )
          }
          className="h-11 w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 text-sm outline-none"
        />
        {isImage && typeof value === "string" ? (
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3">
            <div className="mb-2 text-xs text-slate-500">Image Preview</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={value} alt={fieldKey} className="max-h-40 w-auto rounded-xl object-contain" />
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.88))] p-6 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.38)] backdrop-blur md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Amplizo CMS</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
              User friendly admin panel
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Ab JSON nahi. Har field form style mein editable hai, image URL dalte hi preview dikhega, aur list items ko add/remove bhi kar sakte ho.
            </p>
          </div>
          <Button type="button" variant="outline" className="rounded-full border-slate-300 bg-white shadow-sm" onClick={logout} disabled={isPending}>
            Logout
          </Button>
        </div>
      </div>

      <Accordion type="multiple" className="grid gap-6">
        {sections.map(([section, value]) => (
          <AccordionItem
            key={section}
            value={`section-${section}`}
            className="overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,250,252,0.9))] px-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.35)] backdrop-blur"
          >
            <AccordionTrigger className="py-6 hover:no-underline">
              <div className="flex w-full flex-col gap-3 text-left md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold capitalize text-slate-950" style={{ fontFamily: "var(--font-display)" }}>
                    {section}
                  </h2>
                  <p className="text-sm text-slate-500">Is section ka form-based editor.</p>
                </div>
                <div className="flex items-center gap-3">
                  {saveState[section] === "saved" ? <span className="text-sm text-emerald-600">Saved</span> : null}
                  {saveState[section] === "error" ? <span className="text-sm text-red-600">Save failed</span> : null}
                  <Button
                    type="button"
                    className="rounded-full bg-slate-950 text-white hover:bg-slate-800"
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      saveSection(section)
                    }}
                    disabled={saveState[section] === "saving"}
                  >
                    {saveState[section] === "saving" ? "Saving..." : `Save ${section}`}
                  </Button>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <Accordion type="multiple" className="space-y-4">
                {Object.entries(drafts[section] as Record<string, JsonValue>).map(([fieldKey, fieldValue]) => (
                  <AccordionItem
                    key={`${section}-${fieldKey}`}
                    value={`${section}-${fieldKey}`}
                    className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white px-4"
                  >
                    <AccordionTrigger className="py-5 text-base font-semibold text-slate-950 hover:no-underline">
                      <div className="flex flex-col text-left">
                        <span>{labelize(fieldKey)}</span>
                        <span className="mt-1 text-xs font-normal text-slate-500">
                          {Array.isArray(fieldValue)
                            ? `${fieldValue.length} item${fieldValue.length === 1 ? "" : "s"}`
                            : fieldValue && typeof fieldValue === "object"
                              ? "Grouped settings"
                              : "Single field"}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      {renderField(section, fieldKey, fieldValue)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
