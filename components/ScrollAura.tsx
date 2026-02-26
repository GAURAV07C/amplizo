'use client'

import * as React from 'react'

export function ScrollAura() {
  React.useEffect(() => {
    let ticking = false

    const update = () => {
      const root = document.documentElement
      const maxScroll = Math.max(root.scrollHeight - window.innerHeight, 1)
      const progress = Math.min(window.scrollY / maxScroll, 1)
      root.style.setProperty('--scroll-progress', progress.toFixed(4))
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return null
}
