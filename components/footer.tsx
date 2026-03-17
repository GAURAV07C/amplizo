import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import type { SiteContent } from "@/lib/site-content"
import { getLucideIcon } from "@/lib/icon-map"
import { resolveFooterLink } from "@/lib/marketing-utils"

const socialIconMap = { Facebook, Twitter, Instagram, Linkedin }

type FooterProps = {
  content: SiteContent["footer"]
  logo: SiteContent["site"]["logo"]
  contactInfo: SiteContent["contact"]["info"]
}

export function Footer({ content, logo, contactInfo }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-white/70 bg-[linear-gradient(180deg,rgba(241,245,249,0.62),rgba(255,255,255,0.96))]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,rgba(37,99,235,0.08),transparent_26%),radial-gradient(circle_at_right,rgba(16,185,129,0.08),transparent_24%)]" />
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <BrandLogo size="lg" className="mb-6" logo={logo} />
            <p className="mb-6 max-w-sm text-pretty leading-relaxed text-slate-600">
              {content.description}
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {content.socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon as keyof typeof socialIconMap] ?? Facebook
                return (
                  <Link
                    key={social.label}
                    href={resolveFooterLink(social.label, social.href)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/85 text-slate-500 shadow-[0_18px_35px_-28px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:bg-slate-950 hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-950">Services</h4>
            <ul className="space-y-3">
              {content.linkGroups.services.map((link) => (
                <li key={link.label}>
                  <Link href={resolveFooterLink(link.label, link.href)} className="text-sm text-slate-600 transition-colors hover:text-slate-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-950">Company</h4>
            <ul className="space-y-3">
              {content.linkGroups.company.map((link) => (
                <li key={link.label}>
                  <Link href={resolveFooterLink(link.label, link.href)} className="text-sm text-slate-600 transition-colors hover:text-slate-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-950">Support</h4>
            <ul className="space-y-3">
              {content.linkGroups.support.map((link) => (
                <li key={link.label}>
                  <Link href={resolveFooterLink(link.label, link.href)} className="text-sm text-slate-600 transition-colors hover:text-slate-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-950">Contact</h4>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = getLucideIcon(item.icon)
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/70 bg-white/85 text-slate-700 shadow-[0_16px_30px_-24px_rgba(15,23,42,0.35)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">{`\u00A9 ${new Date().getFullYear()} ${content.rightsText}`}</p>
          <p className="text-sm text-slate-500">{content.madeWithText}</p>
        </div>
      </div>
    </footer>
  )
}
