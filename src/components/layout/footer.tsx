import { Link } from 'react-router-dom'
import { Clock, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'

import { Logo } from '@/components/layout/logo'
import { siteConfig } from '@/lib/seo'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
] as const

const legalLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Confidentialité', to: '/politique-de-confidentialite' },
] as const

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/80 bg-gradient-to-b from-muted/30 to-muted/60">
      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Votre opticien de confiance au coeur de Cotonou. Expertise, style et bienveillance depuis plus de 15 ans.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-foreground/5 text-muted-foreground ring-1 ring-border/80 transition-all hover:bg-primary/10 hover:text-primary hover:ring-primary/30"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-foreground/5 text-muted-foreground ring-1 ring-border/80 transition-all hover:bg-primary/10 hover:text-primary hover:ring-primary/30"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex size-9 items-center justify-center rounded-full bg-foreground/5 text-muted-foreground ring-1 ring-border/80 transition-all hover:bg-primary/10 hover:text-primary hover:ring-primary/30"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation" className="space-y-4">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Explorer
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Phone className="size-3.5 shrink-0 text-primary/70" aria-hidden />
                <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-primary">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-3.5 shrink-0 text-primary/70" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary/70" aria-hidden />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}, Benin
                </span>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div className="space-y-4">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Horaires
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Clock className="size-3.5 shrink-0 text-primary/70" aria-hidden />
                <span>Lun - Ven : 8h - 18h30</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-3.5 shrink-0 text-primary/70" aria-hidden />
                <span>Sam : 9h - 14h</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-3.5 shrink-0 text-primary/70" aria-hidden />
                <span className="text-destructive/70">Dim : Ferme</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits reserves.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs text-muted-foreground/70 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
