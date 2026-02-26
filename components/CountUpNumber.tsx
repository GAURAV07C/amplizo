'use client'

import * as React from 'react'

type CountUpNumberProps = {
  value: number
  suffix?: string
  className?: string
  durationMs?: number
}

export function CountUpNumber({ value, suffix = '', className, durationMs = 1200 }: CountUpNumberProps) {
  const [count, setCount] = React.useState(0)
  const ref = React.useRef<HTMLSpanElement | null>(null)
  const hasAnimated = React.useRef(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (!first.isIntersecting || hasAnimated.current) return
        hasAnimated.current = true

        const start = performance.now()
        const animate = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / durationMs, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(value * eased))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [durationMs, value])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}
