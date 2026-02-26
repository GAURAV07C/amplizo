import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/35 blur-md animate-ping" />
      <a
        href="https://wa.me/919430804147?text=Hi%2C%20I%20want%20to%20discuss%20my%20business%20growth%20options."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent to-primary text-primary-foreground rounded-full shadow-[0_12px_28px_oklch(0.12_0.05_252_/_0.7)] hover:scale-110 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 bg-background/95 text-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap border border-primary/20">
        Chat on WhatsApp
      </span>
    </div>
  )
}

