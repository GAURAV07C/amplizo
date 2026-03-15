import { replaceSiteContent } from "../lib/content-store"
import { defaultSiteContent } from "../lib/site-content"

async function main() {
  await replaceSiteContent(defaultSiteContent)
  console.log("Amplizo default content inserted into database.")
}

main().catch((error) => {
  console.error("Failed to seed content:", error)
  process.exit(1)
})
