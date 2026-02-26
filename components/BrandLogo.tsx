import Image from 'next/image'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
  imageClassName?: string
  priority?: boolean
}

export function BrandLogo({ className, imageClassName, priority = false }: BrandLogoProps) {
  return (
    <div
      className={cn(
        'relative isolate transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_28px_oklch(0.72_0.18_236_/_0.4)]',
        className
      )}
    >
      <div className="overflow-hidden rounded-3xl border border-primary/30 bg-background/70 px-1 py-1 backdrop-blur-sm shadow-[0_12px_30px_oklch(0.12_0.04_252_/_0.65)]">
        <Image
          src="/image.png"
          alt="Amplizo logo"
          width={520}
          height={180}
          priority={priority}
          className={cn('h-auto w-full rounded-2xl object-contain', imageClassName)}
        />
      </div>
    </div>
  )
}
