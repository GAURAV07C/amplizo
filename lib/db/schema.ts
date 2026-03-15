import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const siteContentTable = sqliteTable("site_content", {
  id: integer("id").primaryKey(),
  data: text("data").notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
})
