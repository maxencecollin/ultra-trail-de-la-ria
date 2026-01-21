import Link from "next/link";
import { eventInfo } from "@/data/courses";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-6 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Event Info */}
          <div>
            <h4 className="text-cyan-400 font-bold text-lg mb-4 uppercase tracking-wider">
              {eventInfo.name}
            </h4>
            <p className="text-gray-300 leading-relaxed">
              {eventInfo.date}
              <br />
              {eventInfo.location}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cyan-400 font-bold text-lg mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <p className="text-gray-300">
              <a
                href="mailto:contact@ultratraildelaria.fr"
                className="hover:text-cyan-400 transition-colors"
              >
                contact@ultratraildelaria.fr
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cyan-400 font-bold text-lg mb-4 uppercase tracking-wider">
              Liens utiles
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/inscription"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Inscription
                </Link>
              </li>
              <li>
                <Link
                  href="/parcours"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Parcours
                </Link>
              </li>
              <li>
                <Link
                  href="/infos-pratiques"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Reglement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            2027 Ultra Trail de la Ria d'Etel - Tous droits reserves
          </p>
        </div>
      </div>
    </footer>
  );
}
