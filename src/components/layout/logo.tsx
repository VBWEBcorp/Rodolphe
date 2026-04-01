import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/seo'

function EyeScanIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      stroke="currentColor"
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Corner brackets */}
      <path d="M80 160V80h80" />
      <path d="M432 160V80h-80" />
      <path d="M80 352v80h80" />
      <path d="M432 352v80h-80" />
      {/* Eye shape */}
      <path d="M256 176c-90 0-152 80-152 80s62 80 152 80 152-80 152-80-62-80-152-80z" />
      {/* Iris */}
      <circle cx="256" cy="256" r="56" />
      {/* Pupil */}
      <circle cx="256" cy="256" r="24" fill="currentColor" stroke="none" />
    </svg>
  )
}

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'group inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90',
        className
      )}
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-[1.03]">
        <EyeScanIcon className="size-[20px]" />
      </span>
      <span>{siteConfig.name}</span>
    </Link>
  )
}
