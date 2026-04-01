import { Star } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'

const topRow = [
  {
    name: 'Ariane K.',
    role: 'Enseignante, Cotonou',
    quote: "Depuis que j'ai mes nouvelles lunettes progressives, je n'ai plus de maux de tête. L'équipe a été d'une patience remarquable.",
    stars: 5,
  },
  {
    name: 'Gérard A.',
    role: 'Chef d\'entreprise, Porto-Novo',
    quote: 'Un service irréprochable. L\'examen de vue était très complet et on m\'a conseillé des verres parfaitement adaptés à mon travail sur écran.',
    stars: 5,
  },
  {
    name: 'Félicité D.',
    role: 'Étudiante, Abomey-Calavi',
    quote: 'J\'adore mes nouvelles montures ! Le choix est immense et les prix sont honnêtes. Je recommande à tous mes amis.',
    stars: 5,
  },
  {
    name: 'Romuald T.',
    role: 'Médecin, Cotonou',
    quote: 'En tant que professionnel de santé, j\'apprécie la rigueur des examens et la qualité des équipements. Rodolphe Optique est une référence.',
    stars: 5,
  },
  {
    name: 'Christelle M.',
    role: 'Comptable, Parakou',
    quote: "Mes lentilles de contact sont d'un confort incroyable. L'adaptation a été faite avec beaucoup de soin et de professionnalisme.",
    stars: 5,
  },
] as const

const bottomRow = [
  {
    name: 'Brice H.',
    role: 'Architecte, Cotonou',
    quote: "Les lunettes de soleil polarisées que j'ai achetées sont de qualité exceptionnelle. Parfaites pour conduire à Cotonou.",
    stars: 5,
  },
  {
    name: 'Nadège S.',
    role: 'Mère de famille, Bohicon',
    quote: 'J\'ai équipé toute ma famille ici. Les lunettes des enfants sont solides et bien ajustées. Le suivi après-vente est top.',
    stars: 5,
  },
  {
    name: 'Isidore F.',
    role: 'Avocat, Cotonou',
    quote: "Un cadre élégant, un accueil professionnel et des montures de créateurs qu'on ne trouve pas ailleurs au Bénin.",
    stars: 5,
  },
  {
    name: 'Sènan L.',
    role: 'Informaticien, Cotonou',
    quote: "Les verres anti-lumière bleue ont changé ma vie devant l'ordinateur. Merci pour les conseils avisés !",
    stars: 4,
  },
  {
    name: 'Grâce O.',
    role: 'Pharmacienne, Ouidah',
    quote: 'Rapide, efficace et à l\'écoute. Mes verres progressifs étaient prêts en trois jours. Service exceptionnel.',
    stars: 5,
  },
] as const

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; role: string; quote: string; stars: number }
}) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col rounded-xl border border-border/60 bg-card/80 px-5 py-4 shadow-[var(--shadow-xs)] ring-1 ring-foreground/[0.03] backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-3 ${i < testimonial.stars ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'}`}
              aria-hidden
            />
          ))}
        </div>
        <GoogleLogo />
      </div>

      <blockquote className="mt-3 flex-1">
        <p className="text-[13px] leading-relaxed text-foreground/85">
          "{testimonial.quote}"
        </p>
      </blockquote>

      <figcaption className="mt-3 flex items-center gap-2.5 border-t border-border/40 pt-3">
        <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
          {testimonial.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="truncate text-[11px] text-muted-foreground">
            {testimonial.role}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}

function MarqueeRow({
  items,
  direction,
}: {
  items: readonly { name: string; role: string; quote: string; stars: number }[]
  direction: 'left' | 'right'
}) {
  const animationClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="group relative flex overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div className={`flex shrink-0 gap-4 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}>
        {items.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
      <div aria-hidden className={`flex shrink-0 gap-4 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}>
        {items.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden border-y border-border/60 bg-muted/10">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ils nous font confiance"
          description="Des milliers de clients satisfaits à Cotonou et dans tout le Bénin nous recommandent."
        />
      </div>

      <div className="mt-10 space-y-2 pb-14 lg:pb-20">
        <MarqueeRow items={topRow} direction="left" />
        <MarqueeRow items={bottomRow} direction="right" />
      </div>
    </section>
  )
}
