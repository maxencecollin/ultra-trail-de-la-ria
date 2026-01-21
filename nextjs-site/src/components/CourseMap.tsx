"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamic import for Leaflet (client-side only)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Polyline = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polyline),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface Point {
  lat: number;
  lon: number;
  ele: number;
}

interface CourseMapProps {
  gpxFile: string;
  courseName: string;
}

export default function CourseMap({ gpxFile, courseName }: CourseMapProps) {
  const [points, setPoints] = useState<Point[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGPX = async () => {
      try {
        const response = await fetch(gpxFile);
        if (!response.ok) throw new Error("Fichier GPX non trouve");

        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");

        const trkpts = xmlDoc.getElementsByTagName("trkpt");
        const parsedPoints: Point[] = [];

        for (let i = 0; i < trkpts.length; i++) {
          const pt = trkpts[i];
          const lat = parseFloat(pt.getAttribute("lat") || "0");
          const lon = parseFloat(pt.getAttribute("lon") || "0");
          const eleNode = pt.getElementsByTagName("ele")[0];
          const ele = eleNode ? parseFloat(eleNode.textContent || "0") : 0;
          parsedPoints.push({ lat, lon, ele });
        }

        setPoints(parsedPoints);
        setIsLoading(false);
      } catch (err) {
        setError("Erreur lors du chargement du parcours");
        setIsLoading(false);
      }
    };

    loadGPX();
  }, [gpxFile]);

  if (isLoading) {
    return (
      <div className="map-container bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Chargement de la carte...</p>
      </div>
    );
  }

  if (error || points.length === 0) {
    return (
      <div className="map-container bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">{error || "Aucun point trouve"}</p>
      </div>
    );
  }

  const center: [number, number] = [
    points.reduce((sum, p) => sum + p.lat, 0) / points.length,
    points.reduce((sum, p) => sum + p.lon, 0) / points.length,
  ];

  const positions: [number, number][] = points.map((p) => [p.lat, p.lon]);

  return (
    <div className="map-container">
      <MapContainer
        center={center}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline
          positions={positions}
          pathOptions={{ color: "#00A0D2", weight: 4 }}
        />
        {/* Start marker */}
        {points.length > 0 && (
          <Marker position={[points[0].lat, points[0].lon]}>
            <Popup>Depart - {courseName}</Popup>
          </Marker>
        )}
        {/* End marker */}
        {points.length > 1 && (
          <Marker position={[points[points.length - 1].lat, points[points.length - 1].lon]}>
            <Popup>Arrivee - {courseName}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
