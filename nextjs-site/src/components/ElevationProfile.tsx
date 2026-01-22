'use client'

import { useEffect, useState } from 'react'
import { parseGpxFile, type GpxPoint } from '@/lib/gpx-parser'

interface ElevationProfileProps {
  gpxFile: string
  color: string
  className?: string
}

export default function ElevationProfile({ gpxFile, color, className = '' }: ElevationProfileProps) {
  const [points, setPoints] = useState<GpxPoint[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadGpx() {
      try {
        const data = await parseGpxFile(gpxFile)
        setPoints(data.points)
      } catch (error) {
        console.error('Error loading GPX for elevation:', error)
      } finally {
        setLoading(false)
      }
    }
    loadGpx()
  }, [gpxFile])

  if (loading) {
    return (
      <div className={`bg-ocean-800 rounded-xl p-4 ${className}`}>
        <div className="h-32 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-ocean-400 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  if (points.length === 0) {
    return null
  }

  // Calculate elevation data
  const elevations = points.map((p) => p.ele)
  const minEle = Math.min(...elevations)
  const maxEle = Math.max(...elevations)
  const eleRange = maxEle - minEle || 1

  // Sample points for smoother rendering (max 200 points)
  const sampleRate = Math.max(1, Math.floor(points.length / 200))
  const sampledPoints = points.filter((_, i) => i % sampleRate === 0)

  // Calculate cumulative distance
  let cumulativeDistance = 0
  const pointsWithDistance = sampledPoints.map((point, i) => {
    if (i > 0) {
      const prev = sampledPoints[i - 1]
      const dLat = point.lat - prev.lat
      const dLng = point.lng - prev.lng
      const distance = Math.sqrt(dLat * dLat + dLng * dLng) * 111 // Approximate km
      cumulativeDistance += distance
    }
    return { ...point, distance: cumulativeDistance }
  })

  const totalDistance = cumulativeDistance

  // Generate SVG path
  const width = 100
  const height = 100
  const pathPoints = pointsWithDistance.map((p, i) => {
    const x = (p.distance / totalDistance) * width
    const y = height - ((p.ele - minEle) / eleRange) * height * 0.8 - 10
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')

  // Area path (closed)
  const areaPath = `${pathPoints} L ${width} ${height} L 0 ${height} Z`

  return (
    <div className={`bg-ocean-800 rounded-xl p-4 ${className}`}>
      <div className="flex justify-between text-xs text-ocean-400 mb-2">
        <span>0 km</span>
        <span className="text-ocean-300 font-medium">Profil d'elevation</span>
        <span>{totalDistance.toFixed(0)} km</span>
      </div>

      <div className="relative h-32">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          <line x1="0" y1="25" x2="100" y2="25" stroke="#1a4d77" strokeWidth="0.5" strokeDasharray="2" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#1a4d77" strokeWidth="0.5" strokeDasharray="2" />
          <line x1="0" y1="75" x2="100" y2="75" stroke="#1a4d77" strokeWidth="0.5" strokeDasharray="2" />

          {/* Area fill */}
          <path
            d={areaPath}
            fill={color}
            fillOpacity="0.2"
          />

          {/* Line */}
          <path
            d={pathPoints}
            fill="none"
            stroke={color}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Elevation labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-ocean-500 -ml-1">
          <span>{maxEle.toFixed(0)}m</span>
          <span>{minEle.toFixed(0)}m</span>
        </div>
      </div>
    </div>
  )
}
