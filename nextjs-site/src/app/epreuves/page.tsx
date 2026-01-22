'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import ElevationProfile from '@/components/ElevationProfile'
import { races, type Race, type RaceFormat } from '@/data/races'

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-ocean-800 rounded-xl flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-ocean-400 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
})

export default function Epreuves() {
  const [selectedRace, setSelectedRace] = useState<RaceFormat>('ultra')
  const currentRace = races.find((r) => r.id === selectedRace) as Race

  return (
    <main className="min-h-screen bg-ocean-900">
      <PageHeader
        title="Les Epreuves"
        subtitle="Trois formats pour vivre l'aventure de la Ria d'Etel"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Race Cards Overview */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {races.map((race) => (
              <motion.button
                key={race.id}
                onClick={() => setSelectedRace(race.id)}
                whileHover={{ y: -4 }}
                className={`
                  relative text-left p-6 rounded-2xl transition-all duration-300
                  ${selectedRace === race.id
                    ? 'bg-ocean-700 ring-2 ring-sable-500'
                    : 'bg-ocean-800 hover:bg-ocean-750'
                  }
                `}
              >
                {selectedRace === race.id && (
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-sable-500" />
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${race.gpxTracks[0].color}20` }}
                >
                  <span
                    className="font-display font-bold text-lg"
                    style={{ color: race.gpxTracks[0].color }}
                  >
                    {race.distance}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {race.name}
                </h3>
                <p className="text-ocean-300 text-sm mb-4">{race.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-ocean-400">
                    D+{race.elevation}m
                  </span>
                  <span className="text-ocean-400">
                    {race.startTime}
                  </span>
                  <span className="text-sable-400 font-semibold">
                    {race.price}EUR
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Race Details */}
      <section className="py-12 px-4 bg-ocean-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={selectedRace}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Race Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {currentRace.name}
                </h2>
                <p className="text-ocean-300 text-lg">{currentRace.longDescription}</p>
              </div>
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center bg-sable-500 hover:bg-sable-400 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors whitespace-nowrap"
              >
                S'inscrire - {currentRace.price}EUR
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard
                label="Distance"
                value={`${currentRace.distance} km`}
                color={currentRace.gpxTracks[0].color}
              />
              <StatCard
                label="Denivele positif"
                value={`D+${currentRace.elevation}m`}
                color={currentRace.gpxTracks[0].color}
              />
              <StatCard
                label="Heure de depart"
                value={currentRace.startTime}
                color={currentRace.gpxTracks[0].color}
              />
              <StatCard
                label="Places"
                value={`${currentRace.maxParticipants} max`}
                color={currentRace.gpxTracks[0].color}
              />
            </div>

            {/* Map and Elevation */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-display font-bold text-white mb-4">Parcours</h3>
                <InteractiveMap
                  tracks={currentRace.gpxTracks}
                  className="h-[400px]"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-white mb-4">Profil</h3>
                {currentRace.gpxTracks.map((track) => (
                  <ElevationProfile
                    key={track.id}
                    gpxFile={track.file}
                    color={track.color}
                    className="mb-4"
                  />
                ))}

                {/* Download GPX */}
                <div className="bg-ocean-800 rounded-xl p-4">
                  <p className="text-ocean-400 text-sm mb-3">Telecharger les traces GPX</p>
                  <div className="flex flex-wrap gap-2">
                    {currentRace.gpxTracks.map((track) => (
                      <a
                        key={track.id}
                        href={track.file}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-700 hover:bg-ocean-600 rounded-lg text-sm text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {track.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Segments for Relais */}
            {currentRace.segments && (
              <div className="mb-8">
                <h3 className="font-display font-bold text-white mb-4">Segments du Relais</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentRace.segments.map((segment, index) => (
                    <div
                      key={segment.id}
                      className="bg-ocean-800 rounded-xl p-6"
                      style={{ borderLeft: `4px solid ${currentRace.gpxTracks[index]?.color || '#fff'}` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-display font-bold text-white">
                          {segment.name} - {segment.description}
                        </h4>
                        <span className="text-ocean-400 text-sm">
                          {segment.distance}km - D+{segment.elevation}m
                        </span>
                      </div>
                      <p className="text-ocean-300">
                        {segment.startLocation} → {segment.endLocation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Barrier Time */}
            {currentRace.barrierTime && (
              <div className="bg-sable-500/10 border border-sable-500/30 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sable-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-sable-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sable-400 text-sm">Barriere horaire</p>
                    <p className="text-white font-bold text-xl">{currentRace.barrierTime}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Highlights and Requirements */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-ocean-800 rounded-xl p-6">
                <h3 className="font-display font-bold text-white mb-4">Points forts</h3>
                <ul className="space-y-3">
                  {currentRace.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-ocean-200">
                      <svg className="w-5 h-5 text-pinede-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ocean-800 rounded-xl p-6">
                <h3 className="font-display font-bold text-white mb-4">Conditions de participation</h3>
                <ul className="space-y-3">
                  {currentRace.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-ocean-200">
                      <svg className="w-5 h-5 text-ocean-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Pret a relever le defi ?
          </h2>
          <p className="text-ocean-300 mb-8">
            Rejoignez-nous le 23 Mai 2027 pour vivre une experience unique sur les sentiers de la Ria d'Etel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center bg-sable-500 hover:bg-sable-400 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors"
            >
              S'inscrire maintenant
            </Link>
            <Link
              href="/infos-pratiques"
              className="inline-flex items-center justify-center bg-ocean-700 hover:bg-ocean-600 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors"
            >
              Voir le reglement
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-ocean-800 rounded-xl p-4">
      <p className="text-ocean-400 text-sm mb-1">{label}</p>
      <p className="font-display font-bold text-2xl" style={{ color }}>
        {value}
      </p>
    </div>
  )
}
