'use client'

import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import HistoireSection from '@/components/HistoireSection'
import { getAssetPath } from '@/lib/utils'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HistoireSection />

      {/* Photo paysage */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={getAssetPath('/images/XBGL5940-web.jpg')}
          alt="Sentier côtier de la Ria d'Étel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </section>

      {/* Partenaires - à venir */}
      {/*
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold text-dark-900 mb-8">Nos partenaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            // Logos partenaires ici
          </div>
        </div>
      </section>
      */}
    </main>
  )
}
