import { motion } from 'framer-motion'
import {
  Baby,
  Contact,
  Eye,
  Glasses,
  HeartPulse,
  Microscope,
  ShieldCheck,
  SunMedium,
} from 'lucide-react'

import { SeoHead } from '@/components/seo/seo-head'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'
import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  {
    icon: Eye,
    title: 'Examen de vue complet',
    desc: 'Bilan visuel approfondi avec des équipements de dernière génération : autoréfractomètre, tonomètre et lampe à fente.',
  },
  {
    icon: Glasses,
    title: 'Lunettes de vue',
    desc: 'Plus de 500 montures de marques internationales et locales, avec des verres unifocaux, progressifs ou de bureau.',
  },
  {
    icon: SunMedium,
    title: 'Lunettes de soleil',
    desc: 'Protection UV certifiée et style garanti — solaires correctrices ou non, polarisées ou photochromiques.',
  },
  {
    icon: Contact,
    title: 'Lentilles de contact',
    desc: 'Adaptation sur mesure de lentilles souples, rigides ou toriques, avec suivi personnalisé et contrôles réguliers.',
  },
  {
    icon: Baby,
    title: 'Optique enfant',
    desc: 'Montures résistantes et ludiques adaptées aux plus jeunes, avec un accompagnement doux et patient.',
  },
  {
    icon: Microscope,
    title: 'Dépistage visuel',
    desc: 'Détection précoce de pathologies comme le glaucome, la cataracte ou la dégénérescence maculaire.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantie & ajustements',
    desc: 'Garantie complète sur toutes nos montures et verres, ajustements gratuits et réparations en boutique.',
  },
  {
    icon: HeartPulse,
    title: 'Suivi santé visuelle',
    desc: 'Programme de suivi annuel avec rappels personnalisés pour préserver votre capital visuel sur le long terme.',
  },
] as const

const description =
  'Examens de vue, lunettes de vue et soleil, lentilles de contact, optique enfant — découvrez tous les services de Rodolphe Optique à Cotonou.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Services', description, '/services'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    ...services.map((s) => serviceJsonLd(s.title, s.desc, '/services')),
  ],
}

export function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Services"
        description={description}
        canonical="/services"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Services"
        title="Des solutions complètes pour votre vue"
        description="De l'examen de vue au suivi régulier, en passant par le choix de montures et l'adaptation de lentilles, nous prenons soin de vos yeux à chaque étape."
        image="/images/ivan-cruz-oQdpelfogoo-unsplash.jpg"
        breadcrumb="Services"
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.03 }}
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
        </div>
      </section>

      <CtaSection />
    </>
  )
}
