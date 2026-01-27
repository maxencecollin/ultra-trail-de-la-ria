'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import { getAssetPath } from '@/lib/utils'

export default function CGV() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Conditions générales de vente"
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Inscriptions via Klikego
            </h2>
            <p className="text-dark-600 mb-8">
              Les inscriptions à l'Ultra Trail de la Ria sont gérées exclusivement par la plateforme <strong>Klikego</strong>. En vous inscrivant à l'événement, vous acceptez les conditions générales de vente de Klikego.
            </p>

            <div className="bg-ria-50 border border-ria-200 rounded-xl p-6 mb-8">
              <p className="text-dark-700 mb-4">
                Lors de votre inscription sur Klikego, vous aurez accès aux conditions générales de vente complètes qui régissent :
              </p>
              <ul className="text-dark-600 space-y-2">
                <li>Les modalités d'inscription et de paiement</li>
                <li>Les conditions d'annulation et de remboursement</li>
                <li>Le transfert de dossard</li>
                <li>La protection des données personnelles</li>
              </ul>
            </div>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Règlement de l'épreuve
            </h2>
            <p className="text-dark-600 mb-8">
              En vous inscrivant à l'Ultra Trail de la Ria, vous vous engagez également à respecter le <a href={getAssetPath('/docs/Reglement_Ultra_Trail_Ria_2027.pdf')} target="_blank" rel="noopener noreferrer" className="text-ria-500 hover:text-ria-600">règlement de l'épreuve</a>.
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Contact
            </h2>
            <p className="text-dark-600 mb-8">
              Pour toute question concernant votre inscription, vous pouvez contacter :<br /><br />
              <strong>Klikego</strong> : directement via leur plateforme pour les questions techniques liées à l'inscription<br /><br />
              <strong>Association Ultra Trail de la Ria</strong> : <a href="mailto:ultratraildelaria@gmail.com" className="text-ria-500 hover:text-ria-600">ultratraildelaria@gmail.com</a> pour les questions relatives à l'événement
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Assurance
            </h2>
            <p className="text-dark-600">
              L'organisation de l'Ultra Trail de la Ria est couverte par une assurance responsabilité civile. Les participants sont invités à vérifier leur propre couverture d'assurance pour la pratique du trail running. Une licence FFA ou une assurance individuelle couvrant la pratique du trail est recommandée.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
