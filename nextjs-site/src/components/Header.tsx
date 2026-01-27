'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { getAssetPath } from '@/lib/utils'

interface SubLink {
  label: string
  href: string
  external?: boolean
}

interface NavLink {
  label: string
  href: string
  submenu?: SubLink[]
}

const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Épreuves',
    href: '/epreuves',
    submenu: [
      { label: 'Le 80km', href: '/epreuves/ultra' },
      { label: 'Le Relais Duo', href: '/epreuves/relais' },
      { label: 'Le 30km', href: '/epreuves/30km' },
    ],
  },
  { label: 'Environnement', href: '/environnement' },
  {
    label: 'Infos',
    href: '/infos-pratiques',
    submenu: [
      { label: 'Guide Coureur', href: '/infos-pratiques' },
      { label: 'Règlement', href: '/docs/Reglement_Ultra_Trail_Ria_2027.pdf', external: true },
      { label: 'Résultats', href: '/resultats' },
    ],
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

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
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={getAssetPath('/images/logo.png')}
              alt="UTR"
              width={40}
              height={47}
              className="w-8 h-auto md:w-10"
            />
            <span className={`font-display font-bold text-sm md:text-base hidden sm:block transition-colors ${
              isScrolled ? 'text-dark-900' : 'text-white'
            }`}>
              Ultra Trail de la Ria
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenSubmenu(link.href)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <button
                    className={`transition-colors font-medium flex items-center gap-1 ${
                      isScrolled
                        ? 'text-dark-600 hover:text-dark-900'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${openSubmenu === link.href ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openSubmenu === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-dark-100 py-2 min-w-[180px]"
                      >
                        {link.submenu.map((sublink) =>
                          sublink.external ? (
                            <a
                              key={sublink.href}
                              href={getAssetPath(sublink.href)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-dark-600 hover:text-dark-900 hover:bg-dark-50 transition-colors"
                            >
                              {sublink.label}
                            </a>
                          ) : (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className="block px-4 py-2 text-dark-600 hover:text-dark-900 hover:bg-dark-50 transition-colors"
                            >
                              {sublink.label}
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-medium ${
                    isScrolled
                      ? 'text-dark-600 hover:text-dark-900'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/inscription"
              className="bg-ria-500 hover:bg-ria-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Inscription
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors ${
              isScrolled ? 'text-dark-900' : 'text-white'
            }`}
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
            className="md:hidden bg-white/98 backdrop-blur-md border-t border-dark-100"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.href}>
                    <div className="text-dark-400 text-sm font-medium py-2 px-4">
                      {link.label}
                    </div>
                    {link.submenu.map((sublink) =>
                      sublink.external ? (
                        <a
                          key={sublink.href}
                          href={getAssetPath(sublink.href)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-dark-700 hover:text-dark-900 transition-colors font-medium py-3 px-4 pl-8 rounded-lg hover:bg-dark-50 block"
                        >
                          {sublink.label}
                        </a>
                      ) : (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-dark-700 hover:text-dark-900 transition-colors font-medium py-3 px-4 pl-8 rounded-lg hover:bg-dark-50 block"
                        >
                          {sublink.label}
                        </Link>
                      )
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-dark-700 hover:text-dark-900 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-dark-50"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/inscription"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-ria-500 hover:bg-ria-600 text-white px-5 py-3 rounded-lg font-semibold transition-colors text-center mt-2"
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
