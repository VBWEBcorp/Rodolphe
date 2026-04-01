import { Link } from 'react-router-dom'

import { SeoHead } from '@/components/seo/seo-head'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { siteConfig } from '@/lib/seo'

const description =
  "Mentions légales du site Rodolphe Optique — informations sur l'éditeur, l'hébergement et les conditions d'utilisation."

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Mentions légales', description, '/mentions-legales'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Mentions légales', path: '/mentions-legales' },
    ]),
  ],
}

export function LegalPage() {
  return (
    <>
      <SeoHead
        title="Mentions légales"
        description={description}
        canonical="/mentions-legales"
        noindex
        jsonLd={jsonLd}
      />

      <Breadcrumb items={[{ label: 'Mentions légales' }]} />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Mentions légales
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Dernière mise à jour : 29 mars 2026
          </p>

          <article className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground">

            <section className="space-y-3">
              <h2>1. Éditeur du site</h2>
              <p>
                Le site <strong>{siteConfig.url}</strong> est édité par :
              </p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>Raison sociale : {siteConfig.name}</li>
                <li>Forme juridique : Entreprise individuelle</li>
                <li>RCCM : [À compléter]</li>
                <li>IFU : [À compléter]</li>
                <li>
                  Siège social : {siteConfig.address.street},{' '}
                  {siteConfig.address.city}, Bénin
                </li>
                <li>Téléphone : {siteConfig.phone}</li>
                <li>Email : {siteConfig.email}</li>
              </ul>
              <p>
                Directeur de la publication : [Nom et prénom du responsable]
              </p>
            </section>

            <section className="space-y-3">
              <h2>2. Hébergement</h2>
              <p>Le site est hébergé par :</p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>Raison sociale : [Nom de l'hébergeur]</li>
                <li>Adresse : [Adresse de l'hébergeur]</li>
                <li>Site web : [URL de l'hébergeur]</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2>3. Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus présents sur le site (textes,
                photographies, illustrations, logos, icônes, éléments
                graphiques, code source) est protégé par les lois béninoises
                et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification ou publication
                totale ou partielle de ces éléments est interdite sauf
                autorisation écrite préalable de {siteConfig.name}.
              </p>
            </section>

            <section className="space-y-3">
              <h2>4. Limitation de responsabilité</h2>
              <p>
                {siteConfig.name} s'efforce de fournir des informations aussi
                précises que possible. Toutefois, il ne pourra être tenu
                responsable des omissions, inexactitudes ou carences dans la
                mise à jour de ces informations.
              </p>
            </section>

            <section className="space-y-3">
              <h2>5. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers d'autres sites.
                {siteConfig.name} n'assume aucune responsabilité quant au
                contenu de ces sites externes.
              </p>
            </section>

            <section className="space-y-3">
              <h2>6. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit
                béninois. En cas de litige, les tribunaux de Cotonou seront
                seuls compétents.
              </p>
            </section>

            <section className="space-y-3">
              <h2>7. Crédits</h2>
              <p>Conception et développement : VBWEBcorp</p>
              <p>Crédits photos : Unsplash</p>
            </section>

            <section className="space-y-3 rounded-xl border border-border/60 bg-muted/20 p-5">
              <p className="text-foreground">
                Pour connaître nos pratiques en matière de collecte et de
                traitement des données personnelles, consultez notre{' '}
                <Link
                  to="/politique-de-confidentialite"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  )
}
