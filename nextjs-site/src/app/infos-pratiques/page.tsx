import Link from "next/link";
import { courses, materielObligatoire, eventInfo } from "@/data/courses";

export const metadata = {
  title: "Infos Pratiques - Ultra Trail de la Ria",
  description: "Toutes les informations pratiques pour l'Ultra Trail de la Ria d'Etel 2027",
};

export default function InfosPratiquesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gray-100 py-16 px-[5%]">
        <h1 className="text-4xl md:text-5xl font-black text-center text-cyan-600 uppercase tracking-wider">
          Infos Pratiques
        </h1>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Tout ce que vous devez savoir pour preparer votre participation a l'Ultra Trail de la Ria.
        </p>
      </section>

      {/* Quick Links */}
      <section className="py-8 px-[5%] bg-white sticky top-16 z-40 shadow-sm">
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#retrait" className="px-4 py-2 text-sm text-cyan-600 hover:underline">Retrait dossards</a>
          <a href="#materiel" className="px-4 py-2 text-sm text-cyan-600 hover:underline">Materiel</a>
          <a href="#horaires" className="px-4 py-2 text-sm text-cyan-600 hover:underline">Horaires</a>
          <a href="#reglement" className="px-4 py-2 text-sm text-cyan-600 hover:underline">Reglement</a>
          <a href="#acces" className="px-4 py-2 text-sm text-cyan-600 hover:underline">Acces</a>
        </div>
      </section>

      {/* Retrait dossards */}
      <section id="retrait" className="py-16 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider mb-8">
            Retrait des dossards
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Lieu</h3>
              <p className="text-gray-700 text-lg mb-2">
                <strong>Salle Emeraude</strong>
              </p>
              <p className="text-gray-600">
                Rue du Stade<br />
                56550 Locoal-Mendon
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Horaires</h3>
              <p className="text-gray-700 mb-2">
                <strong>Samedi 22 mai 2027</strong>
              </p>
              <p className="text-gray-600 mb-4">14h00 - 20h00</p>
              <p className="text-gray-700 mb-2">
                <strong>Dimanche 23 mai 2027</strong>
              </p>
              <p className="text-gray-600">4h30 - 5h45 (80km et Relais uniquement)</p>
            </div>
          </div>
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-yellow-800">
              <strong>Important :</strong> Une piece d'identite est obligatoire pour le retrait du dossard.
              Le retrait par un tiers n'est pas autorise.
            </p>
          </div>
        </div>
      </section>

      {/* Materiel */}
      <section id="materiel" className="py-16 px-[5%] bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Materiel obligatoire
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => {
              const materiel = materielObligatoire[course.id as keyof typeof materielObligatoire] || [];
              return (
                <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className={`bg-gradient-to-br ${course.color} p-4 text-white`}>
                    <span className="text-sm font-bold opacity-80">{course.badge}</span>
                    <h3 className="text-xl font-black">{course.name}</h3>
                  </div>
                  <ul className="p-6 space-y-3">
                    {materiel.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4 rounded">
            <p className="text-red-800">
              <strong>Attention :</strong> Le materiel obligatoire sera controle au depart et peut faire l'objet
              de controles inopines sur le parcours. Tout coureur sans son materiel complet sera disqualifie.
            </p>
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section id="horaires" className="py-16 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Horaires des departs
          </h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Epreuve</th>
                  <th className="px-6 py-4 text-left">Heure de depart</th>
                  <th className="px-6 py-4 text-left">Lieu</th>
                  <th className="px-6 py-4 text-left">Barriere horaire</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={course.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-bold text-gray-900">{course.name}</td>
                    <td className="px-6 py-4 text-gray-700">{course.startTime}</td>
                    <td className="px-6 py-4 text-gray-700">{course.startLocation}</td>
                    <td className="px-6 py-4 text-gray-700">{course.maxTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reglement */}
      <section id="reglement" className="py-16 px-[5%] bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Reglement
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Conditions de participation</h3>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Etre majeur le jour de la course</li>
                  <li>Presenter un certificat medical ou une licence FFA valide</li>
                  <li>Respecter le materiel obligatoire</li>
                  <li>Accepter le reglement de la course</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Barrieres horaires</h3>
                <p className="text-gray-600">
                  Des barrieres horaires sont placees sur le parcours. Tout coureur arrivant apres l'heure
                  limite sera arrete et pris en charge par l'organisation pour etre ramene a l'arrivee.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Abandon</h3>
                <p className="text-gray-600">
                  En cas d'abandon, le coureur doit imperativement signaler son abandon a un benevole
                  ou appeler le numero d'urgence fourni. Le dossard doit etre rendu a l'organisation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Respect de l'environnement</h3>
                <p className="text-gray-600">
                  Le parcours traverse des zones naturelles protegees. Il est interdit de jeter des dechets
                  sur le parcours. Les contrevenants seront disqualifies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acces */}
      <section id="acces" className="py-16 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Acces et stationnement
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">En voiture</h3>
              <p className="text-gray-600 mb-4">
                Locoal-Mendon est accessible depuis la N165 (voie express Nantes-Quimper).
                Prendre la sortie Landaul/Locoal-Mendon.
              </p>
              <p className="text-gray-600">
                Un parking gratuit est disponible a proximite de la Salle Emeraude.
                Suivre le flechage "Ultra Trail de la Ria".
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">En train</h3>
              <p className="text-gray-600 mb-4">
                Gare d'Auray (15 km) ou gare de Lorient (25 km).
                Des navettes seront mises en place depuis la gare d'Auray le samedi.
              </p>
              <p className="text-gray-600">
                Horaires des navettes a venir.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Hebergements</h3>
            <p className="text-gray-600 mb-4">
              De nombreux hebergements sont disponibles dans les communes du parcours :
              hotels, gites, campings. Nous vous recommandons de reserver a l'avance.
            </p>
            <p className="text-gray-600">
              L'Office de Tourisme d'Auray Quiberon Terre Atlantique peut vous aider
              dans vos recherches : <a href="https://www.auray-tourisme.com" className="text-cyan-600 hover:underline" target="_blank" rel="noopener noreferrer">www.auray-tourisme.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-[5%] bg-gradient-to-br from-gray-900 to-gray-800 text-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-4">
          Besoin d'informations supplementaires ?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Notre equipe est a votre disposition pour repondre a toutes vos questions.
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
