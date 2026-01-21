"use client";

import Link from "next/link";
import { eventInfo } from "@/data/courses";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-bg.jpg"
      >
        <source src="/images/drone/drone-1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 z-[2]" />

      {/* Content */}
      <div className="relative z-[3] max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4 drop-shadow-lg">
          Ultra Trail de la Ria
        </h1>
        <p className="text-xl md:text-2xl font-bold text-cyan-400 mb-2 drop-shadow-md">
          {eventInfo.date}
        </p>
        <p className="text-lg md:text-xl tracking-widest mb-1 drop-shadow-md">
          80km - Relais - 30km
        </p>
        <p className="text-base md:text-lg opacity-90 mb-8 drop-shadow-md">
          {eventInfo.location}
        </p>
        <Link
          href="/inscription"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded transition-all btn-transition"
        >
          S&#39;inscrire
        </Link>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#infos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
        aria-label="Defiler vers le bas"
      >
        <span className="block w-8 h-12 border-2 border-white/70 rounded-full relative">
          <span className="scroll-indicator-dot absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full top-2" />
        </span>
      </a>
    </section>
  );
}
