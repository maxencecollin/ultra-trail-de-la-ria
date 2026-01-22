'use client'

import { useEffect, useState, useMemo } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { parseGpxFile, calculateCenterAndZoom, type ParsedGpx } from '@/lib/gpx-parser'
import type { GpxTrack } from '@/data/races'

interface TrackData {
  track: GpxTrack
  gpxData: ParsedGpx
}

interface InteractiveMapProps {
  tracks: GpxTrack[]
  className?: string
}

function MapBoundsUpdater({ tracksData }: { tracksData: TrackData[] }) {
  const map = useMap()

  useEffect(() => {
    if (tracksData.length === 0) return

    const allBounds = tracksData.map((t) => t.gpxData.bounds)
    const minLat = Math.min(...allBounds.map((b) => b.minLat))
    const maxLat = Math.max(...allBounds.map((b) => b.maxLat))
    const minLng = Math.min(...allBounds.map((b) => b.minLng))
    const maxLng = Math.max(...allBounds.map((b) => b.maxLng))

    const bounds = L.latLngBounds(
      [minLat, minLng],
      [maxLat, maxLng]
    )

    map.fitBounds(bounds, { padding: [30, 30] })
  }, [map, tracksData])

  return null
}

function createStartIcon(color: string) {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 24px;
        height: 24px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  })
}

function createEndIcon(color: string) {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 24px;
        height: 24px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
          <path d="M5,4h3v16h-3v-16M12,4l9,8-9,8v-16z"/>
        </svg>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  })
}

export default function InteractiveMap({ tracks, className = '' }: InteractiveMapProps) {
  const [tracksData, setTracksData] = useState<TrackData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const trackIds = useMemo(() => tracks.map((t) => t.id).join(','), [tracks])

  useEffect(() => {
    let cancelled = false

    async function loadTracks() {
      setLoading(true)
      setError(null)

      try {
        const results = await Promise.all(
          tracks.map(async (track) => {
            const gpxData = await parseGpxFile(track.file)
            return { track, gpxData }
          })
        )

        if (!cancelled) {
          setTracksData(results)
        }
      } catch (err) {
        if (!cancelled) {
          setError('Erreur lors du chargement des traces GPX')
          console.error(err)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadTracks()

    return () => {
      cancelled = true
    }
  }, [trackIds, tracks])

  const defaultCenter = useMemo(() => {
    if (tracksData.length > 0) {
      const allBounds = tracksData.map((t) => t.gpxData.bounds)
      const minLat = Math.min(...allBounds.map((b) => b.minLat))
      const maxLat = Math.max(...allBounds.map((b) => b.maxLat))
      const minLng = Math.min(...allBounds.map((b) => b.minLng))
      const maxLng = Math.max(...allBounds.map((b) => b.maxLng))

      const { center } = calculateCenterAndZoom({
        minLat,
        maxLat,
        minLng,
        maxLng,
      })
      return center
    }
    return [47.68, -3.17] as [number, number]
  }, [tracksData])

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-ocean-800 rounded-xl ${className}`}>
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-ocean-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-ocean-300">Chargement de la carte...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-ocean-800 rounded-xl ${className}`}>
        <div className="text-center text-red-400">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <MapContainer
        center={defaultCenter}
        zoom={11}
        className="w-full h-full"
        scrollWheelZoom={true}
        style={{ background: '#f5f5f5' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <MapBoundsUpdater tracksData={tracksData} />

        {tracksData.map(({ track, gpxData }) => {
          const positions = gpxData.points.map((p) => [p.lat, p.lng] as [number, number])
          const startPoint = gpxData.points[0]
          const endPoint = gpxData.points[gpxData.points.length - 1]

          return (
            <div key={track.id}>
              <Polyline
                positions={positions}
                color={track.color}
                weight={4}
                opacity={0.9}
              />

              <Marker
                position={[startPoint.lat, startPoint.lng]}
                icon={createStartIcon(track.color)}
              >
                <Popup>
                  <div className="text-sm">
                    <strong>Depart</strong>
                    <br />
                    {track.name}
                  </div>
                </Popup>
              </Marker>

              <Marker
                position={[endPoint.lat, endPoint.lng]}
                icon={createEndIcon(track.color)}
              >
                <Popup>
                  <div className="text-sm">
                    <strong>Arrivee</strong>
                    <br />
                    {track.name}
                  </div>
                </Popup>
              </Marker>
            </div>
          )
        })}
      </MapContainer>

      {/* Legend */}
      {tracksData.length > 0 && (
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 z-[1000] shadow-lg border border-gray-200">
          <p className="text-xs text-gray-500 mb-2 font-semibold">Legende</p>
          <div className="space-y-1">
            {tracksData.map(({ track }) => (
              <div key={track.id} className="flex items-center gap-2 text-xs">
                <div
                  className="w-4 h-1 rounded"
                  style={{ backgroundColor: track.color }}
                />
                <span className="text-gray-700">{track.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
