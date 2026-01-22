import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ultra Trail de la Ria | 23 Mai 2027',
  description: 'Ultra Trail de la Ria d\'Etel - Une grande fete du trail en Bretagne. 80km Ultra, Relais Duo, 30km. Traversee bateau, nature preservee Natura 2000.',
  keywords: 'trail, ultra trail, ria etel, bretagne, course nature, 80km, relais, running',
  openGraph: {
    title: 'Ultra Trail de la Ria | 23 Mai 2027',
    description: 'Une grande fete du trail autour de la Ria d\'Etel en Bretagne',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
