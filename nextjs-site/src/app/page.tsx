import HeroSection from "@/components/HeroSection";
import KeyInfoBar from "@/components/KeyInfoBar";
import RaceCard from "@/components/RaceCard";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import CommunesSection from "@/components/CommunesSection";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { courses } from "@/data/courses";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KeyInfoBar />

      {/* Presentation */}
      <section className="py-20 px-[5%] md:px-[10%] bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-wider mb-6">
            L'Ultra Trail de la Ria
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Vivez une experience unique au coeur de la <strong>Ria d&#39;Etel</strong>,
            l'un des plus beaux sites naturels de Bretagne. Parcourez des sentiers
            sauvages entre terre et mer, traversez des villages de caractere et
            admirez la celebre <strong>maison de Nichtarguer</strong> sur son ilot.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ce trail en semi-autonomie vous fera decouvrir un territoire classe
            <strong> Natura 2000</strong>, sur les sentiers du Conservatoire du Littoral
            et du departement du Morbihan.
          </p>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
              Traversee en bateau
            </span>
            <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
              Site Natura 2000
            </span>
            <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
              7 communes
            </span>
          </div>
        </div>
      </section>

      {/* Races Section */}
      <section className="py-20 px-[5%] bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 uppercase tracking-wider mb-12">
          Les Epreuves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <RaceCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <Gallery />

      {/* Info Summary */}
      <section className="py-20 px-[5%] bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 uppercase tracking-wider mb-12">
          Infos Pratiques
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">Retrait des dossards</h3>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Salle Emeraude</strong><br />Locoal-Mendon
            </p>
            <p className="text-gray-500 text-sm">Piece d&#39;identite obligatoire</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">Inscriptions</h3>
            <p className="text-gray-600 text-sm mb-2">
              Ouverture prochaine sur <strong>Klikego</strong>
            </p>
            <p className="text-gray-500 text-sm">Cloture : 16 mai 2027 a 20h</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">Materiel obligatoire</h3>
            <p className="text-gray-600 text-sm mb-2">
              Reserve d'eau, telephone, couverture de survie, veste impermeable...
            </p>
            <Link href="/infos-pratiques#materiel" className="text-cyan-500 text-sm hover:underline">
              Voir la liste complete
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">Ravitaillements</h3>
            <p className="text-gray-600 text-sm mb-2">
              Tous les <strong>10 a 15 km</strong>
            </p>
            <p className="text-gray-500 text-sm">Solide et liquide</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/infos-pratiques"
            className="inline-block border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-2 px-6 rounded transition-all"
          >
            Toutes les infos pratiques
          </Link>
        </div>
      </section>

      <VideoSection />
      <CommunesSection />
      <CTASection />
    </>
  );
}
