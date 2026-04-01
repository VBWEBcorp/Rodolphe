import { motion } from 'framer-motion'
import { ArrowRight, Eye, Glasses, SunMedium, Contact } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Eye,
    title: 'Examen de vue',
    desc: 'Bilan visuel complet réalisé avec des équipements de dernière génération pour un diagnostic précis.',
  },
  {
    icon: Glasses,
    title: 'Lunettes de vue',
    desc: 'Large sélection de montures de créateurs et verres correcteurs haute définition adaptés à chaque besoin.',
  },
  {
    icon: SunMedium,
    title: 'Lunettes de soleil',
    desc: 'Protection UV optimale alliée au style — solaires correctrices ou non, pour tous les goûts.',
  },
  {
    icon: Contact,
    title: 'Lentilles de contact',
    desc: 'Adaptation personnalisée de lentilles journalières, mensuelles ou progressives avec suivi complet.',
  },
] as const

const ease = [0.22, 1, 0.36, 1] as const

export function ServicesPreview() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Nos services"
          title="Prenez soin de votre vue"
          description="De l'examen de vue au choix de vos montures, nous vous accompagnons à chaque étape avec expertise et bienveillance."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.04 }}
            >
              <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
                <CardHeader>
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="font-display text-base">
                    {s.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {s.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" className="group" asChild>
            <Link to="/services">
              Voir tous nos services
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
