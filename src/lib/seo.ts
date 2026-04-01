export const siteConfig = {
  name: 'Rodolphe Optique',
  url: 'https://www.rodolphe-optique.bj',
  locale: 'fr_BJ',
  description:
    'Votre opticien de confiance à Cotonou — examens de vue, lunettes de créateur, lentilles de contact et solaires. Expertise et style au service de votre vision.',
  ogImage: 'https://www.rodolphe-optique.bj/og.png',
  twitterHandle: '@rodolpheoptique',
  themeColor: '#6d28d9',
  phone: '+229 21 31 45 67',
  email: 'contact@rodolphe-optique.bj',
  address: {
    street: '127 Boulevard Saint-Michel, Cadjèhoun',
    city: 'Cotonou',
    postalCode: '',
    country: 'BJ',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} — ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/services',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
] as const
