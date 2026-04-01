import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

import { SeoHead } from '@/components/seo/seo-head'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

const description =
  'Prenez rendez-vous chez Rodolphe Optique à Cotonou. Examen de vue, conseil personnalisé — contactez-nous par téléphone, email ou en boutique.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Contact', description, '/contact'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ],
}

export function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact"
        description={description}
        canonical="/contact"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Contact"
        title="Prenez rendez-vous"
        description="Remplissez le formulaire ou contactez-nous directement. Nous vous répondons dans les plus brefs délais."
        image="/images/chuttersnap-G8ioIHUDfNc-unsplash.jpg"
        breadcrumb="Contact"
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <Card className="rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-md)] ring-1 ring-foreground/5">
                <CardHeader>
                  <CardTitle className="font-display text-lg">
                    Demander un rendez-vous
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstname">Prénom</Label>
                        <Input
                          id="firstname"
                          name="firstname"
                          placeholder="Rodolphe"
                          autoComplete="given-name"
                          className="h-11 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastname">Nom</Label>
                        <Input
                          id="lastname"
                          name="lastname"
                          placeholder="Agossou"
                          autoComplete="family-name"
                          className="h-11 rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="rodolphe@email.com"
                        autoComplete="email"
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+229 97 12 34 56"
                        autoComplete="tel"
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Votre besoin</Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Décrivez votre besoin : examen de vue, renouvellement de lunettes, lentilles de contact..."
                        className="w-full rounded-xl border border-input bg-transparent px-3 py-2.5 text-sm leading-relaxed text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.06 }}
              className="space-y-5"
            >
              <Card className="rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Phone className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Téléphone
                      </p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Mail className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <MapPin className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Adresse
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.city}, Bénin
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Clock className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Horaires d'ouverture
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Lun – Ven : 8h00 – 18h30
                        <br />
                        Sam : 9h00 – 14h00
                        <br />
                        Dim : Fermé
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="overflow-hidden rounded-2xl border border-border/80 bg-muted/30 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <iframe
                  title="Localisation Rodolphe Optique, Cotonou"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d2.4075!3d6.3654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCotonou%2C+B%C3%A9nin!5e0!3m2!1sfr!2sbj!4v1"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
