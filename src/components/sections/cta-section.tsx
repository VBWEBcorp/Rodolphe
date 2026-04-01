import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

export function CtaSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/70 p-10 text-center shadow-[var(--shadow-lg)] ring-1 ring-foreground/10 sm:p-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_0%,oklch(0.62_0.18_285/0.16),transparent_55%)]"
          />
          <div className="relative space-y-6">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Prêt à voir la vie autrement ?
            </p>
            <h2 className="mx-auto max-w-xl font-display text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
              Prenez rendez-vous dès aujourd'hui
            </h2>
            <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Un examen de vue complet, des conseils personnalisés et un large
              choix de montures vous attendent dans notre boutique de Cotonou.
            </p>
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Prendre rendez-vous
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
