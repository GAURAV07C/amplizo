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
    "I’m evaluating how Amplizo’s local growth marketing services can help our business increase bookings and qualified leads.",
    "Please share your current availability for an introductory consultation and any materials we should prepare ahead of the call.",
    "",
    "Best regards,",
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
    "I’m seeking a focused engagement and would like to review the right next steps with your team.",
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Business: ${fields.business}`,
    `Service Needed: ${fields.service}`,
    `Project Details: ${fields.message}`,
    "",
    "Please outline your availability, proposed deliverables, and any preparation you need from our side.",
    "",
    "Best regards,",
    fields.name || "",
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
    "Please prepare the complimentary Google Business Profile audit for the following business.",
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Business: ${fields.business}`,
    `Google Maps or Website: ${fields.mapsLink || "Not shared yet"}`,
    "",
    "I would appreciate the audit insights along with your recommended next steps for implementation.",
    "",
    "Looking forward to your response.",
  ].join("\n")
}

export function buildBookingMessage(slotLabel: string) {
  return [
    "Hello Amplizo Team,",
    "",
    "I would like to confirm the following strategy call slot:",
    `Preferred Slot: ${slotLabel}`,
    "",
    "Please send over the meeting confirmation, dial-in/link details, and any pre-call materials.",
    "",
    "Best regards,",
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
