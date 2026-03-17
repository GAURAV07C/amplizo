import fs from "node:fs"
import path from "node:path"
import Database from "better-sqlite3"
import { Pool } from "pg"
import { defaultSiteContent, type SiteContent } from "./site-content.ts"

type SiteContentSection = keyof SiteContent

const DATABASE_URL = process.env.DATABASE_URL?.trim()
const usePostgres = Boolean(DATABASE_URL)

let sqliteDb: any = null
let postgresPool: Pool | null = null
let postgresReadyPromise: Promise<void> | null = null

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

function getSqliteDb() {
  if (sqliteDb) {
    return sqliteDb
  }

  const dataDir = path.join(process.cwd(), ".data")
  const dbPath = path.join(dataDir, "amplizo.sqlite")

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  const db = new Database(dbPath)

  db.exec(`
    CREATE TABLE IF NOT EXISTS site_content (
      id INTEGER PRIMARY KEY,
      data TEXT NOT NULL,
      updated_at INTEGER NOT NULL
    )
  `)

  sqliteDb = db
  return db
}

function getPostgresPool() {
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.")
  }

  if (!postgresPool) {
    postgresPool = new Pool({
      connectionString: DATABASE_URL,
      ssl: DATABASE_URL.includes("supabase.com") ? { rejectUnauthorized: false } : undefined,
    })
  }

  return postgresPool
}

async function ensurePostgresReady() {
  if (!usePostgres) {
    return
  }

  if (!postgresReadyPromise) {
    postgresReadyPromise = (async () => {
      const pool = getPostgresPool()

      await pool.query(`
        CREATE TABLE IF NOT EXISTS site_content (
          id INTEGER PRIMARY KEY,
          data TEXT NOT NULL,
          updated_at BIGINT NOT NULL
        )
      `)
    })()
  }

  await postgresReadyPromise
}

async function getStoredContentRow() {
  if (usePostgres) {
    await ensurePostgresReady()
    const pool = getPostgresPool()
    const result = await pool.query("SELECT data FROM site_content WHERE id = $1 LIMIT 1", [1])
    return result.rows[0]?.data ? { data: result.rows[0].data as string } : null
  }

  const db = getSqliteDb()
  const row = db.prepare("SELECT data FROM site_content WHERE id = ?").get(1) as { data: string } | undefined
  return row ?? null
}

async function writeStoredContent(content: SiteContent) {
  const payload = JSON.stringify(content)
  const updatedAt = Date.now()

  if (usePostgres) {
    await ensurePostgresReady()
    const pool = getPostgresPool()
    await pool.query(
      `
        INSERT INTO site_content (id, data, updated_at)
        VALUES ($1, $2, $3)
        ON CONFLICT (id) DO UPDATE SET
          data = EXCLUDED.data,
          updated_at = EXCLUDED.updated_at
      `,
      [1, payload, updatedAt],
    )
    return
  }

  const db = getSqliteDb()
  db.prepare(
    `
      INSERT INTO site_content (id, data, updated_at)
      VALUES (@id, @data, @updatedAt)
      ON CONFLICT(id) DO UPDATE SET
        data = excluded.data,
        updated_at = excluded.updated_at
    `,
  ).run({
    id: 1,
    data: payload,
    updatedAt,
  })
}

export async function getSiteContent() {
  const existing = await getStoredContentRow()

  if (!existing) {
    const seeded = cloneDefaultContent()
    await writeStoredContent(seeded)
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

  await writeStoredContent(next)
  return next
}

export async function replaceSiteContent(content: SiteContent) {
  const next = normalizeContent(content)
  await writeStoredContent(next)
  return next
}
