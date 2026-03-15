import { eq } from "drizzle-orm"
import { db } from "./db/index.ts"
import { siteContentTable } from "./db/schema.ts"
import { defaultSiteContent, type SiteContent } from "./site-content.ts"

type SiteContentSection = keyof SiteContent

function cloneDefaultContent() {
  return JSON.parse(JSON.stringify(defaultSiteContent)) as SiteContent
}

function deepMerge<T>(base: T, incoming: unknown): T {
  if (Array.isArray(base)) {
    return (Array.isArray(incoming) ? incoming : base) as T
  }

  if (base && typeof base === "object") {
    const result: Record<string, unknown> = { ...(base as Record<string, unknown>) }
    const source = incoming && typeof incoming === "object" ? (incoming as Record<string, unknown>) : {}

    for (const key of Object.keys(result)) {
      result[key] = deepMerge(result[key], source[key])
    }

    for (const [key, value] of Object.entries(source)) {
      if (!(key in result)) {
        result[key] = value
      }
    }

    return result as T
  }

  return (typeof incoming === "undefined" ? base : incoming) as T
}

function normalizeContent(raw: unknown) {
  if (!raw || typeof raw !== "object") {
    return cloneDefaultContent()
  }

  return deepMerge(cloneDefaultContent(), raw) satisfies SiteContent
}

export async function getSiteContent() {
  const existing = db.select().from(siteContentTable).where(eq(siteContentTable.id, 1)).get()

  if (!existing) {
    const seeded = cloneDefaultContent()
    db.insert(siteContentTable).values({
      id: 1,
      data: JSON.stringify(seeded),
      updatedAt: new Date(),
    }).run()

    return seeded
  }

  return normalizeContent(JSON.parse(existing.data))
}

export async function updateSiteContentSection<TSection extends SiteContentSection>(section: TSection, value: SiteContent[TSection]) {
  const current = await getSiteContent()
  const next = {
    ...current,
    [section]: value,
  } satisfies SiteContent

  db.update(siteContentTable)
    .set({
      data: JSON.stringify(next),
      updatedAt: new Date(),
    })
    .where(eq(siteContentTable.id, 1))
    .run()

  return next
}

export async function replaceSiteContent(content: SiteContent) {
  const next = normalizeContent(content)

  db.insert(siteContentTable)
    .values({
      id: 1,
      data: JSON.stringify(next),
      updatedAt: new Date(),
    })
    .onConflictDoUpdate({
      target: siteContentTable.id,
      set: {
        data: JSON.stringify(next),
        updatedAt: new Date(),
      },
    })
    .run()

  return next
}
