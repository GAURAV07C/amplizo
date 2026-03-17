"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, CheckCircle2 } from "lucide-react"
import type { SiteContent } from "@/lib/site-content"
import { buildBookingMessage, buildWhatsAppLink } from "@/lib/marketing-utils"

type BookingSectionProps = {
  content: SiteContent["booking"]
  site: SiteContent["site"]
}

export function BookingSection({ content, site }: BookingSectionProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
    }
  })

  const handleConfirmBooking = () => {
    if (selectedDate === null || !selectedTime) {
      return
    }

    const slotLabel = `${dates[selectedDate].day}, ${dates[selectedDate].month} ${dates[selectedDate].date} at ${selectedTime}`
    const bookingLink = buildWhatsAppLink(site.whatsappNumber, buildBookingMessage(slotLabel))
    window.open(bookingLink, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="booking" className="relative scroll-mt-24 py-20 md:scroll-mt-28 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{content.eyebrow}</p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {content.title} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{content.titleHighlight}</span>
          </h2>
          <p className="text-pretty text-lg leading-8 text-slate-600">{content.description}</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[2rem] border border-slate-900/90 bg-slate-950 p-8 text-white shadow-[0_30px_80px_-38px_rgba(15,23,42,0.75)]">
            <Badge className="mb-6 rounded-full bg-white/10 px-4 py-1.5 text-white hover:bg-white/10">{content.badge}</Badge>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Video className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  {content.cardTitle}
                </h3>
                <p className="text-sm text-slate-300">{content.cardDescription}</p>
              </div>
            </div>
            <div className="space-y-3">
              {content.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span className="text-sm leading-6 text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/86 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.38)] ring-1 ring-slate-200/60 backdrop-blur md:p-8">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-900">
                <Calendar className="h-4 w-4" />
                {content.dateLabel}
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                {dates.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(i)}
                    className={`rounded-2xl border px-3 py-4 text-center transition-all ${
                      selectedDate === i
                        ? "border-slate-950 bg-slate-950 text-white shadow-lg"
                        : "border-slate-200/80 bg-slate-50/80 text-slate-700 hover:border-primary/30 hover:bg-white"
                    }`}
                  >
                    <span className="block text-xs uppercase tracking-[0.18em] opacity-70">{d.day}</span>
                    <span className="mt-2 block text-2xl font-semibold">{d.date}</span>
                    <span className="block text-xs uppercase tracking-[0.18em] opacity-70">{d.month}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-900">
                <Clock className="h-4 w-4" />
                {content.timeLabel}
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {content.timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    disabled={selectedDate === null}
                    className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-all ${
                      selectedTime === time
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-slate-200/80 bg-white text-slate-600 hover:border-primary/40 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <Button
              className="h-12 w-full rounded-full bg-slate-950 text-white hover:bg-slate-800"
              size="lg"
              disabled={selectedDate === null || !selectedTime}
              onClick={handleConfirmBooking}
            >
              {content.confirmLabel}
            </Button>

            {selectedDate !== null && selectedTime && (
              <p className="mt-4 text-center text-sm text-slate-500">
                {content.selectedPrefix} {dates[selectedDate].day}, {dates[selectedDate].month} {dates[selectedDate].date} at {selectedTime}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
