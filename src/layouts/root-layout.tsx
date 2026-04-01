import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { PromoBanner } from '@/components/layout/promo-banner'
import { ScrollToTop } from '@/components/scroll-to-top'

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />
      <PromoBanner />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
