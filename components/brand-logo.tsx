import Image from "next/image"
import Link from "next/link"
import type { SiteContent } from "@/lib/site-content"

type BrandLogoProps = {
  href?: string
  size?: "sm" | "md" | "lg"
  className?: string
  logo?: SiteContent["site"]["logo"]
}

const defaultLogo: SiteContent["site"]["logo"] = {
  src: "/images/amplizo-logo.png",
  alt: "Amplizo - Marketing & Business Solution",
  sizes: {
    sm: { width: 164, height: 48, scale: 1.9, radius: "rounded-xl", paddingX: "px-3" },
    md: { width: 180, height: 56, scale: 1.9, radius: "rounded-xl", paddingX: "px-3" },
    lg: { width: 210, height: 64, scale: 1.95, radius: "rounded-2xl", paddingX: "px-4" },
  },
}

export function BrandLogo({ href = "/", size = "md", className = "", logo = defaultLogo }: BrandLogoProps) {
  const config = logo.sizes[size] ?? defaultLogo.sizes[size]

  return (
    <Link href={href} className={`inline-flex items-center ${className}`}>
      <div
        className={`group relative overflow-hidden border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(250,250,252,0.95)_45%,rgba(250,250,255,0.95))] shadow-[0_18px_42px_-26px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/70 backdrop-blur ${config.radius} ${config.paddingX}`}
        style={{ width: `${config.width}px`, height: `${config.height}px` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(139,92,246,0.12),transparent_28%),radial-gradient(circle_at_right,rgba(99,102,241,0.12),transparent_24%)] opacity-80" />
        <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          priority={size !== "sm"}
          className="relative z-10 object-contain object-center transition-transform duration-300"
          style={{ transform: `scale(${config.scale})` }}
        />
      </div>
    </Link>
  )
}
