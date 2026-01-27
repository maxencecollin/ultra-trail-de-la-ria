'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'
import { EVENT_DATE } from '@/data/races'

const stats = [
  { value: '900', label: 'coureurs' },
  { value: '80', label: 'kilomètres de parcours' },
  { value: '3', label: 'épreuves' },
  { value: '100+', label: 'bénévoles recherchés' },
]

const postes = [
  {
    title: 'Ravitaillements',
    description: 'Accueillir les coureurs, servir eau et nourriture, encourager et soutenir.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Signaleurs',
    description: 'Guider les coureurs aux intersections et points stratégiques du parcours.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Accueil & Retrait des dossards',
    description: 'Accueillir les coureurs, distribuer les dossards et le matériel.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Sécurité & Secourisme',
    description: 'Assurer la sécurité sur le parcours et aux points sensibles.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Logistique',
    description: 'Aide au montage/démontage, transport de matériel, préparation des sites.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: 'Traversée bateau',
    description: 'Accompagner les coureurs lors de la traversée maritime.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
]

const avantages = [
  'Repas offerts pendant votre mission',
  'Une expérience humaine unique',
  'Participer à la création d\'un événement local',
]

export default function Benevoles() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end justify-center">
        <Image
          src={getAssetPath('/images/IEAP5443-web.jpg')}
          alt="Bénévoles Ultra Trail de la Ria"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 text-center pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-ria-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Première édition - {EVENT_DATE}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Devenez Bénévole
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Vivez l'aventure de l'intérieur et participez à la réussite de cet événement unique
            </p>
            <a
              href="mailto:ultratraildelaria@gmail.com?subject=Inscription%20bénévole%20-%20Ultra%20Trail%20de%20la%20Ria"
              className="inline-flex items-center gap-2 bg-white hover:bg-ria-50 text-ria-600 px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors"
            >
              Je veux devenir bénévole
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ria-500 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-ria-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi devenir bénévole */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-6">
                Pourquoi devenir bénévole ?
              </h2>
              <p className="text-dark-600 text-lg leading-relaxed mb-6">
                Rejoindre l'équipe de bénévoles de l'Ultra Trail de la Ria, c'est participer à la création d'un événement sportif unique autour de la Ria d'Étel.
              </p>
              <p className="text-dark-600 text-lg leading-relaxed mb-6">
                Votre soutien est essentiel pour accompagner les coureurs, assurer leur sécurité et leur offrir une expérience inoubliable. Vivez une aventure humaine exceptionnelle et contribuez à faire de cette première édition un moment mémorable !
              </p>
              <p className="text-dark-600 text-lg leading-relaxed">
                Que vous soyez disponible quelques heures ou toute la journée, chaque contribution compte. Rejoignez une équipe passionnée et vivez le trail de l'intérieur.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src={getAssetPath('/images/XGXK9412-web.jpg')}
                alt="Ambiance trail"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Les postes */}
      <section className="py-20 px-4 bg-dark-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
              Les postes bénévoles
            </h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              Découvrez les différentes missions disponibles et trouvez celle qui vous correspond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postes.map((poste, index) => (
              <motion.div
                key={poste.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-dark-100"
              >
                <div className="w-14 h-14 rounded-xl bg-ria-100 flex items-center justify-center text-ria-600 mb-4">
                  {poste.icon}
                </div>
                <h3 className="font-display font-bold text-dark-900 text-lg mb-2">
                  {poste.title}
                </h3>
                <p className="text-dark-600">{poste.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
              Les avantages bénévoles
            </h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              En remerciement de votre engagement, vous bénéficierez de nombreux avantages.
            </p>
          </motion.div>

          <div className="bg-ria-50 rounded-2xl p-8 md:p-12">
            <ul className="grid md:grid-cols-2 gap-4">
              {avantages.map((avantage, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-ria-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-dark-700 font-medium">{avantage}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-dark-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Rejoignez l'aventure !
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
              Pour cette première édition, nous avons besoin de vous. Inscrivez-vous dès maintenant et faites partie de l'histoire de l'Ultra Trail de la Ria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ultratraildelaria@gmail.com?subject=Inscription%20bénévole%20-%20Ultra%20Trail%20de%20la%20Ria"
                className="inline-flex items-center justify-center bg-ria-500 hover:bg-ria-600 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors"
              >
                S'inscrire comme bénévole
              </a>
              <Link
                href="/epreuves"
                className="inline-flex items-center justify-center bg-white hover:bg-dark-100 text-dark-900 px-8 py-4 rounded-xl font-display font-bold text-lg transition-colors"
              >
                Découvrir les épreuves
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
