import type { SiteContent } from "@/lib/site-content"

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function buildWhatsAppLink(phoneNumber: string, message: string) {
  const normalizedPhone = phoneNumber.replace(/[^\d]/g, "")
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`
}

export function buildGeneralInquiryMessage(content: SiteContent["site"]) {
  return [
    "Hello Amplizo Team,",
    "",
    "I would like to learn more about your growth marketing services for my business.",
    "Please share the next steps for a consultation.",
    "",
    "Thank you.",
  ].join("\n")
}

export function buildContactMessage(fields: {
  name: string
  phone: string
  business: string
  service: string
  message: string
}) {
  return [
    "Hello Amplizo Team,",
    "",
    "I would like to discuss a project with your team.",
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Business: ${fields.business}`,
    `Service Needed: ${fields.service}`,
    `Project Details: ${fields.message}`,
    "",
    "Please get back to me with the best next step.",
    "",
    "Thank you.",
  ].join("\n")
}

export function buildAuditMessage(fields: {
  name: string
  phone: string
  business: string
  mapsLink: string
}) {
  return [
    "Hello Amplizo Team,",
    "",
    "I would like to request a free Google Business Profile audit.",
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Business: ${fields.business}`,
    `Google Maps or Website: ${fields.mapsLink || "Not shared yet"}`,
    "",
    "Please let me know the next steps for the audit.",
    "",
    "Thank you.",
  ].join("\n")
}

export function buildBookingMessage(slotLabel: string) {
  return [
    "Hello Amplizo Team,",
    "",
    "I would like to confirm my free strategy call.",
    `Preferred Slot: ${slotLabel}`,
    "",
    "Please share the meeting confirmation and next steps.",
    "",
    "Thank you.",
  ].join("\n")
}

export function resolveFooterLink(label: string, href: string) {
  if (href && href !== "#") {
    return href
  }

  const normalized = slugify(label)

  const routeMap: Record<string, string> = {
    home: "/#top",
    services: "/services",
    portfolio: "/portfolio",
    "case-studies": "/#case-studies",
    contact: "/#contact",
    "google-business-profile": "/services#google-business-profile",
    "google-ads": "/services#google-ads-management",
    "social-media-marketing": "/services#social-media-marketing",
    "website-development": "/services#website-development",
    "local-seo": "/services#local-seo",
    "lead-generation": "/services#lead-generation-systems",
    "about-us": "/about",
    blog: "/blog",
    careers: "/careers",
    "help-center": "/help-center",
    "privacy-policy": "/privacy-policy",
    "terms-of-service": "/terms-of-service",
    "cookie-policy": "/cookie-policy",
    facebook: "/#contact",
    twitter: "/#contact",
    instagram: "/#contact",
    linkedin: "/#contact",
  }

  return routeMap[normalized] ?? "/#contact"
}
