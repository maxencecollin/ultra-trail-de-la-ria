import Link from "next/link";
import { courses, eventInfo } from "@/data/courses";

export const metadata = {
  title: "Inscription - Ultra Trail de la Ria",
  description: "Inscrivez-vous a l'Ultra Trail de la Ria d'Etel 2027 - 80km, Relais et 30km",
};

export default function InscriptionPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-cyan-600 to-cyan-800 py-20 px-[5%] text-white text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
          Inscription
        </h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Rejoignez l'aventure Ultra Trail de la Ria le {eventInfo.date}
        </p>
      </section>

      {/* Status */}
      <section className="py-12 px-[5%] bg-yellow-50 border-b-4 border-yellow-400">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-800 mb-2">
            Inscriptions bientot ouvertes
          </h2>
          <p className="text-yellow-700">
            Les inscriptions ouvriront prochainement sur la plateforme Klikego.
            <br />
            Cloture des inscriptions : <strong>16 mai 2027 a 20h</strong>
          </p>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 px-[5%] bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider mb-12 text-center">
            Tarifs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
                  {course.badge}
                </span>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{course.name}</h3>
                <p className="text-gray-500 mb-4">{course.subtitle}</p>
                <p className="text-4xl font-black text-cyan-600 mb-2">
                  {course.price} <span className="text-lg">EUR</span>
                </p>
                <p className="text-sm text-gray-500 mb-6">par personne</p>
                <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dossard et puce de chronometrage
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ravitaillements sur le parcours
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Assistance medicale
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Repas d'arrivee
                  </li>
                  {course.id !== "trail-30" && (
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Traversee en bateau
                    </li>
                  )}
                </ul>
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-block w-full border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-2 px-4 rounded transition-all"
                >
                  Details de la course
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="py-16 px-[5%] bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider mb-12 text-center">
            Procedure d'inscription
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Creer un compte</h3>
              <p className="text-sm text-gray-600">
                Inscrivez-vous sur la plateforme Klikego si ce n'est pas deja fait
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Choisir votre course</h3>
              <p className="text-sm text-gray-600">
                Selectionnez l'epreuve qui vous correspond parmi nos 3 formats
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fournir vos documents</h3>
              <p className="text-sm text-gray-600">
                Certificat medical ou licence FFA en cours de validite
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Payer et valider</h3>
              <p className="text-sm text-gray-600">
                Reglez votre inscription par carte bancaire de maniere securisee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider mb-12 text-center">
            Documents requis
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Certificat medical</h3>
              <p className="text-gray-600 mb-4">
                Un certificat medical de non contre-indication a la pratique de la course a pied
                en competition, datant de moins d'un an au jour de la course.
              </p>
              <p className="text-sm text-gray-500">
                Le certificat doit mentionner explicitement "course a pied en competition" ou "trail".
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">OU Licence FFA</h3>
              <p className="text-gray-600 mb-4">
                Une licence FFA (Federation Francaise d'Athletisme) ou licence d'une federation
                affiliee a l'IAAF en cours de validite.
              </p>
              <p className="text-sm text-gray-500">
                La licence doit etre valide au jour de la course (23 mai 2027).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remboursement */}
      <section className="py-16 px-[5%] bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Politique de remboursement
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-gray-700">
                  <strong>Jusqu'au 31 mars 2027 :</strong> Remboursement a 80% du montant de l'inscription
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-gray-700">
                  <strong>Du 1er avril au 30 avril 2027 :</strong> Remboursement a 50% du montant de l'inscription
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-gray-700">
                  <strong>A partir du 1er mai 2027 :</strong> Aucun remboursement possible
                </p>
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              En cas d'annulation de l'evenement par l'organisateur, l'integralite des inscriptions sera remboursee.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%] bg-gradient-to-br from-gray-900 to-gray-800 text-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-4">
          Des questions ?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          N'hesitez pas a nous contacter pour toute question relative aux inscriptions.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded text-lg transition-all btn-transition"
        >
          Nous contacter
        </Link>
      </section>
    </div>
  );
}
