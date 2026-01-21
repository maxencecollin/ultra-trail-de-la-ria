"use client";

import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ElevationPoint {
  distance: number;
  elevation: number;
}

interface ElevationProfileProps {
  gpxFile: string;
}

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function ElevationProfile({ gpxFile }: ElevationProfileProps) {
  const [data, setData] = useState<ElevationPoint[]>([]);
  const [stats, setStats] = useState({ totalDistance: 0, elevationGain: 0, elevationLoss: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGPX = async () => {
      try {
        const response = await fetch(gpxFile);
        if (!response.ok) return;

        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");

        const trkpts = xmlDoc.getElementsByTagName("trkpt");
        const points: ElevationPoint[] = [];
        let totalDistance = 0;
        let elevationGain = 0;
        let elevationLoss = 0;
        let prevLat = 0;
        let prevLon = 0;
        let prevEle = 0;

        for (let i = 0; i < trkpts.length; i++) {
          const pt = trkpts[i];
          const lat = parseFloat(pt.getAttribute("lat") || "0");
          const lon = parseFloat(pt.getAttribute("lon") || "0");
          const eleNode = pt.getElementsByTagName("ele")[0];
          const ele = eleNode ? parseFloat(eleNode.textContent || "0") : 0;

          if (i > 0) {
            totalDistance += haversineDistance(prevLat, prevLon, lat, lon);
            const eleDiff = ele - prevEle;
            if (eleDiff > 0) elevationGain += eleDiff;
            else elevationLoss += Math.abs(eleDiff);
          }

          // Sample every 50 points to reduce data size
          if (i % 50 === 0) {
            points.push({
              distance: Math.round(totalDistance * 10) / 10,
              elevation: Math.round(ele),
            });
          }

          prevLat = lat;
          prevLon = lon;
          prevEle = ele;
        }

        setData(points);
        setStats({
          totalDistance: Math.round(totalDistance * 10) / 10,
          elevationGain: Math.round(elevationGain),
          elevationLoss: Math.round(elevationLoss),
        });
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    };

    loadGPX();
  }, [gpxFile]);

  if (isLoading) {
    return (
      <div className="elevation-profile bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Chargement du profil...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Profil altimetrique</h3>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-cyan-600">{stats.totalDistance} km</p>
          <p className="text-xs text-gray-500 uppercase">Distance</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">+{stats.elevationGain} m</p>
          <p className="text-xs text-gray-500 uppercase">D+</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-red-600">-{stats.elevationLoss} m</p>
          <p className="text-xs text-gray-500 uppercase">D-</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="distance"
              tickFormatter={(value) => `${value} km`}
              fontSize={12}
            />
            <YAxis
              tickFormatter={(value) => `${value} m`}
              fontSize={12}
              domain={["dataMin - 10", "dataMax + 10"]}
            />
            <Tooltip
              formatter={(value) => [`${value} m`, "Altitude"]}
              labelFormatter={(label) => `Distance: ${label} km`}
            />
            <Area
              type="monotone"
              dataKey="elevation"
              stroke="#00A0D2"
              fill="#00A0D2"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
