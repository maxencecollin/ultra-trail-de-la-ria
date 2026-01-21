import RaceCard from "@/components/RaceCard";
import { courses } from "@/data/courses";

export const metadata = {
  title: "Les Courses - Ultra Trail de la Ria",
  description: "Decouvrez les 3 epreuves de l&#39;Ultra Trail de la Ria d&#39;Etel : 80km, Relais et 30km",
};

export default function CoursesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gray-100 py-16 px-[5%]">
        <h1 className="text-4xl md:text-5xl font-black text-center text-cyan-600 uppercase tracking-wider">
          Les Courses
        </h1>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Trois epreuves pour tous les niveaux, de l'ultra-traileur experimente au debutant en quete de decouverte.
        </p>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-[5%] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <RaceCard key={course.id} course={course} showFullDetails />
          ))}
        </div>
      </section>

      {/* Common Info */}
      <section className="py-16 px-[5%] bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Informations communes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Semi-autonomie</h3>
              <p className="text-gray-600 text-sm">
                Toutes les courses sont en semi-autonomie. Les ravitaillements sont espaces
                de 10 a 15 km. Vous devez porter votre materiel obligatoire et vos reserves
                alimentaires personnelles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Traversee en bateau</h3>
              <p className="text-gray-600 text-sm">
                Le 80km et le Relais incluent une traversee de la ria en bateau au km 40.
                Ce moment unique vous offre une pause bien meritee avec une vue exceptionnelle
                sur le Golfe du Morbihan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Parcours balise</h3>
              <p className="text-gray-600 text-sm">
                L'ensemble du parcours est balise avec des fleches directionnelles.
                Des marquages supplementaires sont places aux points strategiques.
                Le trace GPX est disponible en telechargement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Securite</h3>
              <p className="text-gray-600 text-sm">
                Une equipe medicale est presente sur l&#39;ensemble du parcours.
                Des points de controle permettent de suivre votre progression.
                En cas de probleme, appelez le numero d&#39;urgence fourni au depart.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
