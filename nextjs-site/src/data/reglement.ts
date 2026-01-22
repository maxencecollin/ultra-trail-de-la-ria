export interface ReglementSection {
  id: string
  title: string
  icon: string
  content: ReglementItem[]
}

export interface ReglementItem {
  title?: string
  text: string
  list?: string[]
  important?: boolean
}

export const reglementSections: ReglementSection[] = [
  {
    id: 'inscription',
    title: 'Conditions d\'inscription',
    icon: 'clipboard',
    content: [
      {
        text: 'L\'inscription a l\'Ultra Trail de la Ria est ouverte a toute personne majeure (18 ans revolus le jour de la course) ou mineure de 16 ans minimum avec autorisation parentale pour le 30km uniquement.',
      },
      {
        title: 'Documents obligatoires',
        text: 'Pour valider votre inscription, vous devez fournir :',
        list: [
          'Un certificat medical de non contre-indication a la pratique du trail running en competition, date de moins d\'un an au jour de la course',
          'OU une licence FFA (Federation Francaise d\'Athletisme) en cours de validite avec mention "competition"',
          'OU une licence d\'une federation membre de World Athletics',
        ],
      },
      {
        text: 'Les inscriptions sont nominatives et ne peuvent etre transferees a un tiers. En cas d\'annulation, les conditions de remboursement sont detaillees dans les CGV.',
        important: true,
      },
    ],
  },
  {
    id: 'equipement',
    title: 'Equipement obligatoire',
    icon: 'backpack',
    content: [
      {
        text: 'Le port de l\'equipement obligatoire est verifie au depart et peut l\'etre a tout moment sur le parcours. Tout coureur ne presentant pas l\'integralite de l\'equipement sera disqualifie.',
        important: true,
      },
      {
        title: 'Ultra 80km et Relais',
        text: 'Equipement obligatoire pour les formats longs :',
        list: [
          'Telephone portable charge avec le numero de l\'organisation enregistre',
          'Gobelet ou gourde reutilisable (pas de gobelet jetable sur les ravitaillements)',
          'Reserve d\'eau minimum 1L',
          'Reserve alimentaire de secours',
          'Couverture de survie (min 1,40m x 2m)',
          'Sifflet',
          'Lampe frontale avec piles de rechange (obligatoire pour l\'Ultra)',
          'Vetement chaud (manches longues, min 180g)',
          'Vetement impermeables haut et bas (coutures etanches)',
          'Bonnet ou bandeau couvrant les oreilles',
          'Gants',
        ],
      },
      {
        title: 'Le 30km',
        text: 'Equipement obligatoire allege :',
        list: [
          'Telephone portable charge',
          'Gobelet ou gourde reutilisable',
          'Reserve d\'eau minimum 500ml',
          'Couverture de survie',
          'Sifflet',
          'Vetement chaud (selon meteo)',
        ],
      },
    ],
  },
  {
    id: 'barrieres',
    title: 'Barrieres horaires',
    icon: 'clock',
    content: [
      {
        text: 'Des barrieres horaires sont mises en place pour garantir la securite des coureurs et le bon deroulement de l\'evenement. Tout coureur arrivant apres l\'heure limite sera arrete et pris en charge par l\'organisation.',
      },
      {
        title: 'Ultra 80km',
        text: 'Barrieres horaires de l\'Ultra :',
        list: [
          'Depart : 6h00',
          'Km 25 (Ravito 2) : 10h00 (4h de course)',
          'Km 45 - Traversee bateau : 14h00 (8h de course)',
          'Km 60 (Ravito 5) : 17h00 (11h de course)',
          'Arrivee Km 80 : 20h00 (14h de course)',
        ],
      },
      {
        title: 'Relais Duo',
        text: 'Le Relayeur 1 doit arriver a Sainte-Helene (Km 47) avant 14h00 pour permettre le passage de relais.',
      },
      {
        title: 'Le 30km',
        text: 'Barriere horaire unique :',
        list: [
          'Depart : 8h30',
          'Arrivee : 15h30 (7h de course)',
        ],
      },
    ],
  },
  {
    id: 'securite',
    title: 'Securite et abandon',
    icon: 'shield',
    content: [
      {
        text: 'La securite des coureurs est notre priorite absolue. Le parcours est balise et securise, mais vous evoluez en milieu naturel avec ses aleas.',
      },
      {
        title: 'En cas de probleme',
        text: 'Procedure a suivre :',
        list: [
          'Alertez immediatement l\'organisation au numero inscrit sur votre dossard',
          'Restez sur place si vous etes blesse ou en difficulte',
          'Aidez les autres coureurs en difficulte si vous le pouvez',
          'Suivez les instructions des benevoles et secouristes',
        ],
      },
      {
        title: 'Abandon',
        text: 'En cas d\'abandon, vous devez imperativement :',
        list: [
          'Prevenir l\'organisation par telephone',
          'Vous rendre au point de controle le plus proche',
          'Remettre votre dossard a un benevole',
          'Ne jamais quitter le parcours sans prevenir',
        ],
        important: true,
      },
      {
        text: 'Des navettes de recuperation sont prevues aux principaux ravitaillements pour ramener les coureurs au village depart/arrivee.',
      },
    ],
  },
  {
    id: 'environnement',
    title: 'Respect de l\'environnement',
    icon: 'leaf',
    content: [
      {
        text: 'L\'Ultra Trail de la Ria traverse des sites naturels proteges, notamment des zones Natura 2000. Le respect de l\'environnement est une condition sine qua non de participation.',
        important: true,
      },
      {
        title: 'Regles imperatives',
        text: 'Tout manquement entraine la disqualification :',
        list: [
          'Aucun dechet ne doit etre jete sur le parcours (meme biodegradable)',
          'Restez sur les sentiers balises, ne coupez jamais',
          'Ne cueillez pas de plantes, ne derangez pas la faune',
          'Utilisez les toilettes seches mises a disposition',
          'Respectez les proprietes privees traversees',
        ],
      },
      {
        title: 'Demarche eco-responsable',
        text: 'L\'organisation s\'engage dans une demarche environnementale :',
        list: [
          'Zero gobelet jetable : apportez votre contenant',
          'Ravitaillements avec produits locaux et de saison',
          'Signalétique reutilisable et recyclable',
          'Incitation au covoiturage et transports en commun',
          'Compensation carbone de l\'evenement',
        ],
      },
    ],
  },
  {
    id: 'bateau',
    title: 'Traversee en bateau',
    icon: 'anchor',
    content: [
      {
        text: 'La traversee de la Ria en bateau est un moment unique de l\'Ultra 80km. Cette section est a temps neutralise.',
      },
      {
        title: 'Fonctionnement',
        text: 'Details de la traversee :',
        list: [
          'Embarquement au ponton de la Pointe (Km 45)',
          'Traversee d\'environ 10 minutes',
          'Debarquement a Sainte-Helene',
          'Le temps de traversee n\'est pas compte dans votre temps de course',
          'Gilets de sauvetage obligatoires fournis par l\'organisation',
        ],
      },
      {
        text: 'En cas de conditions meteo defavorables, l\'organisation se reserve le droit de modifier le parcours et de supprimer la traversee. Les coureurs seront alors deroutes par un parcours terrestre alternatif.',
        important: true,
      },
    ],
  },
]

export function getReglementSectionById(id: string): ReglementSection | undefined {
  return reglementSections.find((section) => section.id === id)
}
