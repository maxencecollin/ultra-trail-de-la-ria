import { eventInfo } from "@/data/courses";

export default function CommunesSection() {
  return (
    <section className="py-16 px-[5%] bg-gray-100 text-center">
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-wider mb-8">
        Les Communes du Parcours
      </h2>
      <div className="flex justify-center flex-wrap gap-3 mb-6 max-w-4xl mx-auto">
        {eventInfo.communes.map((commune, index) => (
          <span
            key={index}
            className="bg-white px-4 py-2 rounded-full text-sm shadow-sm"
          >
            {commune}
          </span>
        ))}
      </div>
      <p className="text-gray-500 text-sm italic">
        En partenariat avec {eventInfo.partners.join(" et ")}
      </p>
    </section>
  );
}
