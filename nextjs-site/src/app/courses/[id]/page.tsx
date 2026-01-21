import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, ravitaillements, materielObligatoire } from "@/data/courses";
import CourseMap from "@/components/CourseMap";
import ElevationProfile from "@/components/ElevationProfile";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) return { title: "Course non trouvee" };

  return {
    title: `${course.name} - ${course.subtitle} | Ultra Trail de la Ria`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  const courseRavitaillements = ravitaillements.filter((r) =>
    r.courses.includes(course.id)
  );

  const courseMateriel = materielObligatoire[course.id as keyof typeof materielObligatoire] || [];

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className={`bg-gradient-to-br ${course.color} py-20 px-[5%] text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4">
            {course.badge}
          </span>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider mb-2">
            {course.name}
          </h1>
          <p className="text-xl opacity-90 mb-8">{course.subtitle}</p>

          {/* Key Stats */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-bold">{course.distance}</p>
              <p className="text-sm opacity-80">Distance</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{course.elevation}</p>
              <p className="text-sm opacity-80">Denivele</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{course.maxTime}</p>
              <p className="text-sm opacity-80">Temps limite</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{course.price} EUR</p>
              <p className="text-sm opacity-80">Tarif</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 px-[5%] bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wider mb-4">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{course.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 mt-6">
            {course.features.map((feature, index) => (
              <span
                key={index}
                className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Elevation */}
      <section className="py-12 px-[5%] bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Parcours et Profil
          </h2>

          {/* Map */}
          <div className="mb-8">
            <CourseMap gpxFile={course.gpxFile} courseName={course.name} />
          </div>

          {/* Elevation Profile */}
          <ElevationProfile gpxFile={course.gpxFile} />

          {/* GPX Download */}
          <div className="text-center mt-6">
            <a
              href={course.gpxFile}
              download
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Telecharger le fichier GPX
            </a>
          </div>
        </div>
      </section>

      {/* Start Info */}
      <section className="py-12 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Informations de depart
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Lieu de depart</h3>
              <p className="text-gray-700 text-lg">{course.startLocation}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Heure de depart</h3>
              <p className="text-gray-700 text-lg">{course.startTime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ravitaillements */}
      <section className="py-12 px-[5%] bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Ravitaillements
          </h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">KM</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Lieu</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Type</th>
                </tr>
              </thead>
              <tbody>
                {courseRavitaillements.map((rav, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-bold text-cyan-600">{rav.km}</td>
                    <td className="px-4 py-3 text-gray-700">{rav.name}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          rav.type === "complet"
                            ? "bg-green-100 text-green-700"
                            : rav.type === "liquide"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {rav.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Materiel */}
      <section className="py-12 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Materiel obligatoire
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="grid md:grid-cols-2 gap-3">
              {courseMateriel.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 px-[5%] bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Conditions d&#39;inscription
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-3">
              {course.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%] bg-gradient-to-br from-gray-900 to-gray-800 text-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-4">
          Pret pour le {course.name} ?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Inscrivez-vous des maintenant et rejoignez l&#39;aventure Ultra Trail de la Ria.
        </p>
        <Link
          href="/inscription"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded text-lg transition-all btn-transition"
        >
          S&#39;inscrire au {course.name}
        </Link>
      </section>
    </div>
  );
}
