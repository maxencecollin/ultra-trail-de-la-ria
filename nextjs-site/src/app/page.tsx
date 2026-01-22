'use client'

import { useRef } from 'react'
import HeroSection from '@/components/HeroSection'
import RaceExplorer, { type RaceExplorerHandle } from '@/components/RaceExplorer'
import EspritRiaSection from '@/components/EspritRiaSection'

export default function Home() {
  const raceExplorerRef = useRef<RaceExplorerHandle>(null)

  const handleRaceSelect = (raceId: string) => {
    raceExplorerRef.current?.selectRace(raceId)
  }

  return (
    <main className="min-h-screen">
      <HeroSection onRaceSelect={handleRaceSelect} />
      <RaceExplorer ref={raceExplorerRef} />
      <EspritRiaSection />
    </main>
  )
}
