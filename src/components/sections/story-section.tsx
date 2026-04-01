import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

export function StorySection() {
  return (
    <section className="border-b border-border/60 bg-muted/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-primary/10 via-transparent to-transparent blur-2xl"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/80 bg-muted/40 shadow-[var(--shadow-md)] ring-1 ring-foreground/5">
              <img
                src="/images/ivan-cruz-oQdpelfogoo-unsplash.jpg"
                alt="Examen de vue dans notre centre optique"
                className="size-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease, delay: 0.06 }}
            className="space-y-6"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Notre histoire
            </p>
            <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              L'expertise optique au cœur de Cotonou
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Depuis plus de 15 ans, Rodolphe Optique accompagne les familles
              béninoises dans le soin de leur vue. Notre engagement : allier
              technologie de pointe, montures tendance et un accueil
              chaleureux dans un cadre moderne.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Chaque client bénéficie d'un suivi personnalisé, de l'examen
              visuel au choix de la monture idéale, parce que votre regard
              mérite toute notre attention.
            </p>
            <Button variant="outline" className="group" asChild>
              <Link to="/a-propos">
                En savoir plus
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
