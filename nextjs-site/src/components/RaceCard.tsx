import Link from "next/link";
import { Course } from "@/data/courses";

interface RaceCardProps {
  course: Course;
  showFullDetails?: boolean;
}

export default function RaceCard({ course, showFullDetails = false }: RaceCardProps) {
  return (
    <article className="race-card bg-white rounded-lg shadow-lg overflow-hidden relative hover:shadow-xl">
      {/* Badge */}
      <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
        {course.badge}
      </div>

      {/* Header */}
      <div className="pt-8 pb-2 px-6 text-center">
        <h3 className="text-4xl font-black text-gray-900 uppercase">
          {course.name}
        </h3>
        <p className="text-gray-500 mt-1">{course.subtitle}</p>
      </div>

      {/* Details */}
      <ul className="px-6 pb-4">
        <li className="flex justify-between py-3 border-b border-gray-100">
          <span className="text-gray-500">Distance</span>
          <span className="font-semibold text-gray-900">{course.distance}</span>
        </li>
        <li className="flex justify-between py-3 border-b border-gray-100">
          <span className="text-gray-500">Denivele</span>
          <span className="font-semibold text-gray-900">{course.elevation}</span>
        </li>
        <li className="flex justify-between py-3 border-b border-gray-100">
          <span className="text-gray-500">Depart</span>
          <span className="font-semibold text-gray-900">{course.startTime}</span>
        </li>
        <li className="flex justify-between py-3 border-b border-gray-100">
          <span className="text-gray-500">Lieu</span>
          <span className="font-semibold text-gray-900">{course.startLocation}</span>
        </li>
        <li className="flex justify-between py-3 border-b border-gray-100">
          <span className="text-gray-500">Temps max</span>
          <span className="font-semibold text-gray-900">{course.maxTime}</span>
        </li>
        <li className="flex justify-between py-3">
          <span className="text-gray-500">Tarif</span>
          <span className="font-semibold text-gray-900">{course.price} EUR</span>
        </li>
      </ul>

      {/* Features */}
      <div className="px-6 pb-4 flex flex-wrap justify-center gap-2">
        {course.features.map((feature, index) => (
          <span
            key={index}
            className="bg-gray-100 text-cyan-600 px-3 py-1 rounded-full text-xs"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Description (if full details) */}
      {showFullDetails && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            {course.description}
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="px-6 pb-6">
        <Link
          href={`/courses/${course.id}`}
          className="block text-center border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-2 px-4 rounded transition-all"
        >
          Decouvrir le parcours
        </Link>
      </div>
    </article>
  );
}
