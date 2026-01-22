export type RaceFormat = 'ultra' | 'relais' | '30km'

export interface GpxTrack {
  id: string
  name: string
  file: string
  color: string
  distance: number
  elevation: number
}

export interface RaceSegment {
  id: string
  name: string
  description: string
  gpxFile: string
  distance: number
  elevation: number
  startLocation: string
  endLocation: string
}

export interface Race {
  id: RaceFormat
  name: string
  shortName: string
  distance: number
  elevation: number
  description: string
  longDescription: string
  startTime: string
  startLocation: string
  price: number
  priceEarly?: number
  maxParticipants: number
  barrierTime?: string
  gpxTracks: GpxTrack[]
  segments?: RaceSegment[]
  highlights: string[]
  requirements: string[]
}

export const EVENT_DATE = '22 Mai 2027'
export const EVENT_LOCATION = 'Salle Emeraude, Locoal-Mendon'

export const races: Race[] = [
  {
    id: 'ultra',
    name: 'Le 80km',
    shortName: '80KM',
    distance: 81,
    elevation: 530,
    description: 'Le defi roi. Le tour complet de la Ria.',
    longDescription: 'Le 80km (Tour de la Ria) vous emmene pour un tour complet de la Ria d\'Etel. Une immersion totale dans les paysages bretons, entre pinedes, sentiers cotiers et traversee maritime. Un parcours en semi-autonomie qui revelera le trailer qui sommeille en vous.',
    startTime: '08:00',
    startLocation: 'Salle Emeraude, Locoal-Mendon',
    price: 70,
    maxParticipants: 350,
    barrierTime: '23:00 (15h de course)',
    gpxTracks: [
      {
        id: 'ultra-complet',
        name: '80km - Parcours complet',
        file: '/docs/UTR-complet-ravitaillement.gpx',
        color: '#d97e1a',
        distance: 81,
        elevation: 530,
      },
    ],
    highlights: [
      'Traversee bateau (temps neutralise)',
      'Passage sur les sites Natura 2000',
      'Ravitaillements tous les 10-15km',
      'Cadeau coureur et cadeau finisher',
    ],
    requirements: [
      'Licence FFA (Athle Competition/Entreprise/Running) OU attestation PPS',
      'Age minimum 20 ans (categorie Espoir)',
      'Batons INTERDITS',
      'Equipement obligatoire controle',
    ],
  },
  {
    id: 'relais',
    name: 'Le Relais Duo',
    shortName: 'RELAIS',
    distance: 77,
    elevation: 616,
    description: 'L\'aventure partagee. 80km a deux.',
    longDescription: 'Le Relais Duo permet de partager l\'aventure du 80km en equipe de deux. Le premier relayeur effectue 47km, ou le second prend le relais pour les 30km restants. Une experience de cohesion unique avec traversee bateau.',
    startTime: '08:00',
    startLocation: 'Salle Emeraude, Locoal-Mendon',
    price: 100,
    maxParticipants: 100,
    barrierTime: '23:00 (15h de course)',
    gpxTracks: [
      {
        id: 'relais-a',
        name: 'Segment A - Relayeur 1 (47km)',
        file: '/docs/UTR-47-Locoal-saint_hélène.gpx',
        color: '#3a7eb3',
        distance: 47,
        elevation: 396,
      },
      {
        id: 'relais-b',
        name: 'Segment B - Relayeur 2 (30km)',
        file: '/docs/UTR-30-saint_Hélène-Locoal.gpx',
        color: '#e59a42',
        distance: 30,
        elevation: 220,
      },
    ],
    segments: [
      {
        id: 'segment-a',
        name: 'Segment A',
        description: 'Relayeur 1',
        gpxFile: '/docs/UTR-47-Locoal-saint_hélène.gpx',
        distance: 47,
        elevation: 396,
        startLocation: 'Locoal-Mendon',
        endLocation: 'Zone de relais (Sainte-Helene)',
      },
      {
        id: 'segment-b',
        name: 'Segment B',
        description: 'Relayeur 2',
        gpxFile: '/docs/UTR-30-saint_Hélène-Locoal.gpx',
        distance: 30,
        elevation: 220,
        startLocation: 'Zone de relais (Sainte-Helene)',
        endLocation: 'Locoal-Mendon',
      },
    ],
    highlights: [
      'Partage de l\'experience en duo',
      'Traversee bateau (temps neutralise)',
      'Passage de relais au km 50',
      'Classement par equipe',
    ],
    requirements: [
      'Inscription par equipe de 2 (capitaine)',
      'Licence FFA OU attestation PPS pour chaque relayeur',
      'Age minimum 20 ans',
      'Batons INTERDITS',
    ],
  },
  {
    id: '30km',
    name: 'Le 30km',
    shortName: '30KM',
    distance: 30,
    elevation: 220,
    description: 'Un format explosif ou decouverte.',
    longDescription: 'Le 30km est le format ideal pour decouvrir l\'univers du trail ou pour les coureurs recherchant un format plus court mais intense. Depart depuis le stade municipal de Sainte-Helene, vous rejoindrez Locoal-Mendon par les plus beaux sentiers de la Ria.',
    startTime: '10:00',
    startLocation: 'Stade municipal de Sainte-Helene',
    price: 30,
    maxParticipants: 450,
    barrierTime: '16:00 (6h de course)',
    gpxTracks: [
      {
        id: '30km-parcours',
        name: 'Le 30km - Parcours complet',
        file: '/docs/UTR-30-saint_Hélène-Locoal.gpx',
        color: '#2a9d5c',
        distance: 30,
        elevation: 220,
      },
    ],
    highlights: [
      'Format accessible',
      'Depart groupe depuis Sainte-Helene',
      'Ravitaillements solides et liquides',
      'Arrivee festive a Locoal-Mendon',
    ],
    requirements: [
      'Licence FFA OU attestation PPS',
      'Age minimum 20 ans',
      'Batons INTERDITS',
      'Equipement obligatoire allege',
    ],
  },
]

export function getRaceById(id: RaceFormat): Race | undefined {
  return races.find((race) => race.id === id)
}

export function getAllGpxTracks(): GpxTrack[] {
  return races.flatMap((race) => race.gpxTracks)
}
