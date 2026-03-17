"use client"

import { MessageCircle } from "lucide-react"
import type { SiteContent } from "@/lib/site-content"
import { buildGeneralInquiryMessage, buildWhatsAppLink } from "@/lib/marketing-utils"

type WhatsAppButtonProps = {
  content: SiteContent["site"]
}

export function WhatsAppButton({ content }: WhatsAppButtonProps) {
  const whatsappLink = buildWhatsAppLink(content.whatsappNumber, buildGeneralInquiryMessage(content))

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label={content.whatsappMessage}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
