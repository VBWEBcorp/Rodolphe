import { motion } from 'framer-motion'
import { Eye, Heart, Users } from 'lucide-react'

import { SeoHead } from '@/components/seo/seo-head'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { SectionTitle } from '@/components/ui/section-title'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ease = [0.22, 1, 0.36, 1] as const

const values = [
  {
    icon: Eye,
    title: 'Expertise',
    desc: 'Nos opticiens diplômés maîtrisent les dernières technologies et vous garantissent un examen de vue rigoureux.',
  },
  {
    icon: Heart,
    title: 'Bienveillance',
    desc: 'Chaque client est unique. Nous prenons le temps d\'écouter vos besoins et de vous accompagner sans pression.',
  },
  {
    icon: Users,
    title: 'Proximité',
    desc: 'Ancrés à Cotonou depuis 15 ans, nous connaissons les besoins spécifiques de notre communauté et y répondons avec passion.',
  },
] as const

const description =
  'Découvrez Rodolphe Optique, votre opticien de confiance à Cotonou. Notre histoire, nos valeurs et notre engagement pour votre santé visuelle.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('À propos', description, '/a-propos'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'À propos', path: '/a-propos' },
    ]),
  ],
}

export function AboutPage() {
  return (
    <>
      <SeoHead
        title="À propos"
        description={description}
        canonical="/a-propos"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="À propos"
        title="Votre vision, notre vocation"
        description="Depuis plus de 15 ans, Rodolphe Optique allie expertise optique, montures de qualité et accompagnement humain pour offrir à chaque client le meilleur de la vision à Cotonou."
        image="/images/ivan-cruz-oQdpelfogoo-unsplash.jpg"
        breadcrumb="À propos"
      />

      <section className="border-b border-border/60 bg-muted/10">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle
            eyebrow="Nos valeurs"
            title="Ce qui guide notre engagement"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.05 }}
              >
                <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                  <CardHeader>
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <v.icon className="size-5" aria-hidden />
                    </span>
                    <CardTitle className="font-display text-base">
                      {v.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {v.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle
            eyebrow="En images"
            title="Notre quotidien"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[
              {
                src: '/images/ivan-cruz-oQdpelfogoo-unsplash.jpg',
                alt: 'Collection de montures variées',
              },
              {
                src: '/images/chuttersnap-G8ioIHUDfNc-unsplash.jpg',
                alt: 'Présentoir de montures en boutique',
              },
              {
                src: '/images/harpreet-singh-XbPhaw-x0i0-unsplash.jpg',
                alt: 'Essayage de lunettes en magasin',
              },
              {
                src: '/images/scott-van-daalen-UsALNdok2m4-unsplash.jpg',
                alt: 'Mur de montures colorées',
              },
            ].map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
