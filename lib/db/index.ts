import fs from "node:fs"
import path from "node:path"
import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import * as schema from "./schema.ts"

const dataDir = path.join(process.cwd(), ".data")
const dbPath = path.join(dataDir, "amplizo.sqlite")

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const sqlite = new Database(dbPath)

sqlite.exec(`
  CREATE TABLE IF NOT EXISTS site_content (
    id INTEGER PRIMARY KEY,
    data TEXT NOT NULL,
    updated_at INTEGER NOT NULL
  )
`)

export const db = drizzle(sqlite, { schema })
