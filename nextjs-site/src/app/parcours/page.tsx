import Link from "next/link";
import { courses, ravitaillements } from "@/data/courses";
import CourseMap from "@/components/CourseMap";
import ElevationProfile from "@/components/ElevationProfile";

export const metadata = {
  title: "Parcours - Ultra Trail de la Ria",
  description: "Decouvrez les parcours de l&#39;Ultra Trail de la Ria d&#39;Etel avec cartes interactives et profils altimetriques",
};

export default function ParcoursPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gray-100 py-16 px-[5%]">
        <h1 className="text-4xl md:text-5xl font-black text-center text-cyan-600 uppercase tracking-wider">
          Les Parcours
        </h1>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Explorez les traces de nos trois epreuves avec cartes interactives, profils altimetriques et fichiers GPX telechargeables.
        </p>
      </section>

      {/* Course Selector */}
      <section className="py-8 px-[5%] bg-white sticky top-16 z-40 shadow-sm">
        <div className="flex justify-center gap-4 flex-wrap">
          {courses.map((course) => (
            <a
              key={course.id}
              href={`#${course.id}`}
              className="px-6 py-2 rounded-full border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all font-medium"
            >
              {course.name}
            </a>
          ))}
        </div>
      </section>

      {/* Courses */}
      {courses.map((course) => (
        <section key={course.id} id={course.id} className="py-16 px-[5%] border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div>
                <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-bold mb-2">
                  {course.badge}
                </span>
                <h2 className="text-3xl font-black text-gray-900 uppercase">
                  {course.name} - {course.subtitle}
                </h2>
              </div>
              <div className="flex gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-cyan-600">{course.distance}</p>
                  <p className="text-xs text-gray-500">Distance</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-600">{course.elevation}</p>
                  <p className="text-xs text-gray-500">Denivele</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mb-8">
              <CourseMap gpxFile={course.gpxFile} courseName={course.name} />
            </div>

            {/* Elevation Profile */}
            <div className="mb-8">
              <ElevationProfile gpxFile={course.gpxFile} />
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href={course.gpxFile}
                download
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Telecharger GPX
              </a>
              <Link
                href={`/courses/${course.id}`}
                className="inline-flex items-center gap-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded transition-all"
              >
                Voir les details
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Ravitaillements */}
      <section className="py-16 px-[5%] bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">
            Points de ravitaillement
          </h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">KM</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Lieu</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Courses</th>
                </tr>
              </thead>
              <tbody>
                {ravitaillements.map((rav, index) => (
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
                    <td className="px-4 py-3">
                      <div className="flex gap-1 flex-wrap">
                        {rav.courses.map((c) => (
                          <span key={c} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {courses.find((course) => course.id === c)?.name || c}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-green-50 p-4 rounded-lg">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium mb-2">
                Complet
              </span>
              <p className="text-sm text-gray-600">Ravitaillement solide et liquide, assistance autorisee</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium mb-2">
                Liquide
              </span>
              <p className="text-sm text-gray-600">Eau et boissons energetiques uniquement</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium mb-2">
                Eau
              </span>
              <p className="text-sm text-gray-600">Point d'eau uniquement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
