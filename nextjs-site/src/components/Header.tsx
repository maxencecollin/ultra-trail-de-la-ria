'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Epreuves', href: '/epreuves' },
  { label: 'Infos Pratiques', href: '/infos-pratiques' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ocean-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-white.png"
              alt="UTR"
              width={40}
              height={47}
              className="w-8 h-auto md:w-10"
            />
            <span className="font-display font-bold text-white text-sm md:text-base hidden sm:block">
              Ultra Trail de la Ria
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ocean-200 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/inscription"
              className="bg-sable-500 hover:bg-sable-400 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Inscription
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ocean-900/98 backdrop-blur-md border-t border-ocean-800"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-ocean-200 hover:text-white transition-colors font-medium py-3 px-4 rounded-lg hover:bg-ocean-800"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/inscription"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-sable-500 hover:bg-sable-400 text-white px-5 py-3 rounded-lg font-semibold transition-colors text-center mt-2"
              >
                Inscription
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
