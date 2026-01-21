import Link from "next/link";
import { eventInfo } from "@/data/courses";

export default function CTASection() {
  return (
    <section className="py-20 px-[5%] bg-gradient-to-br from-gray-900 to-gray-800 text-center">
      <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-4">
        Pret a relever le defi ?
      </h2>
      <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
        Rejoignez-nous le {eventInfo.date} pour une aventure inoubliable autour de la Ria d&#39;Etel.
      </p>
      <Link
        href="/inscription"
        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded text-lg transition-all btn-transition"
      >
        S&#39;inscrire maintenant
      </Link>
    </section>
  );
}
