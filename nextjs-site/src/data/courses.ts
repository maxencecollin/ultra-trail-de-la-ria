export interface Course {
  id: string;
  name: string;
  distance: string;
  distanceKm: number;
  elevation: string;
  elevationM: number;
  startTime: string;
  startLocation: string;
  maxTime: string;
  price: string;
  badge: string;
  subtitle: string;
  description: string;
  gpxFile: string;
  features: string[];
  requirements: string[];
  color: string;
}

export const courses: Course[] = [
  {
    id: "ultra-80",
    name: "80 km",
    distance: "80 km",
    distanceKm: 80,
    elevation: "1200 m D+",
    elevationM: 1200,
    startTime: "6h00",
    startLocation: "Locoal-Mendon",
    maxTime: "15h",
    price: "90",
    badge: "Ultra",
    subtitle: "Tour de la Ria",
    description: "L'epreuve reine de l'Ultra Trail de la Ria. Parcourez l'integralite du tour de la Ria d'Etel, entre terre et mer, en passant par les plus beaux sites naturels du Morbihan. Une traversee en bateau au km 40 vous offrira un moment de repit unique.",
    gpxFile: "/docs/UtR-complet.gpx",
    features: ["Traversee en bateau", "Semi-autonomie", "7 communes"],
    requirements: [
      "Certificat medical de moins d'un an",
      "Avoir deja realise un trail de 50km minimum",
      "Materiel obligatoire complet"
    ],
    color: "from-blue-600 to-blue-800"
  },
  {
    id: "relais",
    name: "Relais",
    distance: "80 km",
    distanceKm: 80,
    elevation: "1200 m D+",
    elevationM: 1200,
    startTime: "6h00",
    startLocation: "Locoal-Mendon",
    maxTime: "15h",
    price: "110",
    badge: "Duo",
    subtitle: "80 km a deux",
    description: "Partagez l'aventure a deux ! Le relais se fait au km 48, a Sainte-Helene. Le premier coureur part de Locoal-Mendon, le second prend le relais pour rejoindre l'arrivee. Une facon conviviale de decouvrir l'Ultra Trail de la Ria.",
    gpxFile: "/docs/UtR-complet.gpx",
    features: ["Traversee en bateau", "Equipe de 2", "Relais km 48"],
    requirements: [
      "Certificat medical pour chaque coureur",
      "Inscription en equipe de 2",
      "Materiel obligatoire complet"
    ],
    color: "from-teal-600 to-teal-800"
  },
  {
    id: "trail-30",
    name: "30 km",
    distance: "30 km",
    distanceKm: 30,
    elevation: "450 m D+",
    elevationM: 450,
    startTime: "8h00",
    startLocation: "Sainte-Helene",
    maxTime: "6h",
    price: "40",
    badge: "Trail",
    subtitle: "Decouverte",
    description: "Le format ideal pour decouvrir la Ria d'Etel et ses paysages exceptionnels. Un parcours accessible qui vous fera traverser les plus beaux sentiers cotiers, villages de caractere et sites naturels preserves.",
    gpxFile: "/docs/UTR-30-saint_Hélène-Locoal.gpx",
    features: ["Accessible", "Decouverte", "Parcours cotier"],
    requirements: [
      "Certificat medical de moins d'un an",
      "Materiel obligatoire adapte"
    ],
    color: "from-green-600 to-green-800"
  }
];

export const eventInfo = {
  name: "Ultra Trail de la Ria d'Etel",
  date: "23 mai 2027",
  location: "Ria d'Etel, Bretagne",
  communes: [
    "Locoal-Mendon",
    "Sainte-Helene",
    "Etel",
    "Landevant",
    "Belz",
    "Nostang",
    "Plouhinec"
  ],
  partners: [
    "Auray Quiberon Terre Atlantique",
    "Blavet Bellevue Ocean Communaute"
  ]
};

export const ravitaillements = [
  { km: 0, name: "Depart Locoal-Mendon", type: "complet", courses: ["ultra-80", "relais"] },
  { km: 15, name: "Nostang", type: "liquide", courses: ["ultra-80", "relais"] },
  { km: 28, name: "Etel", type: "complet", courses: ["ultra-80", "relais"] },
  { km: 40, name: "Traversee bateau", type: "eau", courses: ["ultra-80", "relais"] },
  { km: 48, name: "Sainte-Helene (Relais)", type: "complet", courses: ["ultra-80", "relais", "trail-30"] },
  { km: 60, name: "Belz", type: "liquide", courses: ["ultra-80", "relais", "trail-30"] },
  { km: 72, name: "Plouhinec", type: "complet", courses: ["ultra-80", "relais", "trail-30"] },
  { km: 80, name: "Arrivee Locoal-Mendon", type: "complet", courses: ["ultra-80", "relais", "trail-30"] }
];

export const materielObligatoire = {
  "ultra-80": [
    "Reserve d'eau minimum 1L",
    "Telephone portable charge",
    "Couverture de survie",
    "Veste impermeable avec capuche",
    "Lampe frontale + piles de rechange",
    "Sifflet",
    "Gobelet personnel",
    "Reserve alimentaire",
    "Piece d'identite"
  ],
  "relais": [
    "Reserve d'eau minimum 1L",
    "Telephone portable charge",
    "Couverture de survie",
    "Veste impermeable avec capuche",
    "Lampe frontale (pour le 2eme relayeur)",
    "Sifflet",
    "Gobelet personnel"
  ],
  "trail-30": [
    "Reserve d'eau minimum 500ml",
    "Telephone portable charge",
    "Couverture de survie",
    "Veste impermeable",
    "Gobelet personnel"
  ]
};
