import { Link } from 'react-router-dom'

import { SeoHead } from '@/components/seo/seo-head'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { siteConfig } from '@/lib/seo'

const description =
  'Politique de confidentialité de Rodolphe Optique — découvrez comment nous collectons, utilisons et protégeons vos données personnelles.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Politique de confidentialité',
      description,
      '/politique-de-confidentialite'
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      {
        name: 'Politique de confidentialité',
        path: '/politique-de-confidentialite',
      },
    ]),
  ],
}

export function PrivacyPage() {
  return (
    <>
      <SeoHead
        title="Politique de confidentialité"
        description={description}
        canonical="/politique-de-confidentialite"
        noindex
        jsonLd={jsonLd}
      />

      <Breadcrumb items={[{ label: 'Politique de confidentialité' }]} />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Dernière mise à jour : 29 mars 2026
          </p>

          <article className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground">

            <section className="space-y-3">
              <p>
                La société {siteConfig.name} ({'"'}nous{'"'}, {'"'}notre{'"'},{' '}
                {'"'}nos{'"'}) accorde une grande importance à la protection de
                vos données personnelles. La présente politique décrit les
                données que nous collectons, pourquoi nous les collectons et
                comment nous les utilisons, conformément à la loi n° 2009-09
                du 22 mai 2009 portant protection des données à caractère
                personnel en République du Bénin.
              </p>
            </section>

            <section className="space-y-3">
              <h2>1. Responsable du traitement</h2>
              <p>Le responsable du traitement des données est :</p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>{siteConfig.name}</li>
                <li>
                  {siteConfig.address.street},{' '}
                  {siteConfig.address.city}, Bénin
                </li>
                <li>Email : {siteConfig.email}</li>
                <li>Téléphone : {siteConfig.phone}</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2>2. Données personnelles collectées</h2>
              <p>
                Nous collectons uniquement les données strictement nécessaires
                aux finalités décrites ci-dessous :
              </p>

              <h3 className="pt-2">
                a) Données collectées via le formulaire de contact
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Contenu du message</li>
              </ul>

              <h3 className="pt-2">
                b) Données collectées automatiquement
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>Adresse IP</li>
                <li>Type de navigateur et système d'exploitation</li>
                <li>Pages consultées et durée de visite</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2>3. Finalités du traitement</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">
                        Finalité
                      </th>
                      <th className="py-2 text-left font-semibold text-foreground">
                        Durée de conservation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    <tr>
                      <td className="py-2.5 pr-4">Répondre à vos demandes de rendez-vous</td>
                      <td className="py-2.5">3 ans après le dernier contact</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4">Suivi de votre santé visuelle</td>
                      <td className="py-2.5">Durée de la relation client</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4">Analyser la fréquentation du site</td>
                      <td className="py-2.5">25 mois maximum</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4">Assurer la sécurité du site</td>
                      <td className="py-2.5">12 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2>4. Destinataires des données</h2>
              <p>
                Vos données personnelles ne sont ni vendues, ni louées, ni
                cédées à des tiers à des fins commerciales.
              </p>
              <p>Elles peuvent être transmises uniquement :</p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>
                  À nos sous-traitants techniques (hébergeur, prestataire
                  email), dans le cadre strict de leurs missions
                </li>
                <li>
                  Aux autorités compétentes si la loi l'exige
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2>5. Cookies</h2>
              <h3 className="pt-2">a) Cookies strictement nécessaires</h3>
              <p>
                Ces cookies sont indispensables au fonctionnement du site
                (préférences de thème). Ils ne nécessitent pas votre
                consentement.
              </p>

              <h3 className="pt-2">b) Cookies d'analyse (optionnels)</h3>
              <p>
                Si un outil d'analyse est utilisé, ces cookies ne sont déposés
                qu'après votre consentement explicite.
              </p>
            </section>

            <section className="space-y-3">
              <h2>6. Vos droits</h2>
              <p>
                Conformément à la loi béninoise sur la protection des données
                personnelles, vous disposez des droits suivants :
              </p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>
                  <strong>Droit d'accès</strong> — obtenir une copie de vos
                  données
                </li>
                <li>
                  <strong>Droit de rectification</strong> — corriger des données
                  inexactes
                </li>
                <li>
                  <strong>Droit à l'effacement</strong> — demander la
                  suppression de vos données
                </li>
                <li>
                  <strong>Droit d'opposition</strong> — vous opposer au
                  traitement de vos données
                </li>
              </ul>
              <p>
                Pour exercer vos droits, contactez-nous par email à{' '}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  {siteConfig.email}
                </a>{' '}
                ou par courrier à l'adresse indiquée ci-dessus. Nous répondons
                dans un délai maximum de 30 jours.
              </p>
              <p>
                En cas de litige, vous pouvez saisir l'Autorité de Protection
                des Données Personnelles (APDP) du Bénin.
              </p>
            </section>

            <section className="space-y-3">
              <h2>7. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et
                organisationnelles appropriées pour protéger vos données :
                chiffrement SSL/TLS, accès restreints, sauvegardes régulières.
              </p>
            </section>

            <section className="space-y-3">
              <h2>8. Modification de la politique</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique à tout
                moment. La version en vigueur est celle accessible sur cette
                page, identifiée par sa date de dernière mise à jour.
              </p>
            </section>

            <section className="space-y-3 rounded-xl border border-border/60 bg-muted/20 p-5">
              <p className="text-foreground">
                Consultez également nos{' '}
                <Link
                  to="/mentions-legales"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Mentions légales
                </Link>{' '}
                pour les informations relatives à l'éditeur et à l'hébergement
                du site.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  )
}
