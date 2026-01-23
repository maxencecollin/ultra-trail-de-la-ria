'use client'

import Image from 'next/image'
import Link from 'next/link'
import { EVENT_DATE } from '@/data/races'
import { getAssetPath } from '@/lib/utils'

const links = {
  courses: [
    { label: 'Ultra 80km', href: '/epreuves' },
    { label: 'Relais Duo', href: '/epreuves' },
    { label: 'Le 30km', href: '/epreuves' },
  ],
  infos: [
    { label: 'Reglement', href: '/infos-pratiques' },
    { label: 'Environnement', href: '/environnement' },
    { label: 'Parcours GPX', href: '/epreuves' },
  ],
  legal: [
    { label: 'Mentions legales', href: '#' },
    { label: 'Politique de confidentialite', href: '#' },
    { label: 'CGV', href: '#' },
  ],
}

const socials = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: 'Strava',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src={getAssetPath('/images/logo-white.png')}
              alt="Ultra Trail de la Ria"
              width={120}
              height={140}
              className="mb-6"
            />
            <p className="text-dark-400 mb-6 max-w-sm">
              Une grande fete du trail autour de la Ria d'Etel.
              Rendez-vous le {EVENT_DATE} pour vivre une experience unique en Bretagne.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-dark-700 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Les courses</h4>
            <ul className="space-y-3">
              {links.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Informations</h4>
            <ul className="space-y-3">
              {links.infos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-dark-500 text-sm text-center mb-6">Nos partenaires</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="w-24 h-12 bg-dark-800 rounded flex items-center justify-center text-dark-500 text-xs">
              Partenaire 1
            </div>
            <div className="w-24 h-12 bg-dark-800 rounded flex items-center justify-center text-dark-500 text-xs">
              Partenaire 2
            </div>
            <div className="w-24 h-12 bg-dark-800 rounded flex items-center justify-center text-dark-500 text-xs">
              Partenaire 3
            </div>
            <div className="w-24 h-12 bg-dark-800 rounded flex items-center justify-center text-dark-500 text-xs">
              Partenaire 4
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-dark-500 text-sm text-center">
            {new Date().getFullYear()} Ultra Trail de la Ria. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
