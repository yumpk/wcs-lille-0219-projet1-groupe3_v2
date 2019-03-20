// CREATION DE LA CLASSE INCUBATOR
class Incubator {
  constructor(name, city, companies, since, info, img) {
    this.name = name;
    this.city = city;
    this.companies = companies;
    this.since = since;
    this.info = info;
    this.img = img;
  }

  //DESCRIPTION DE L'INCUBATEUR
  describe() {
    return `L'incubateur ${this.name} est situé à ${this.city} a été créé en ${
      this.since
    } et a accueilli à ce jour ${this.companies} entreprises.`;
  }
}

const euratechnologies = new Incubator(
  "Euratechnologies",
  "Lille",
  320,
  2009,
  "EuraTechnologies : incubator & startups accelerator, events...",
  "images/timeline-euratek.jpg"
);

const eurasante = new Incubator(
  "Eurasanté",
  "Loos",
  170,
  1994,
  "European-wide economic and scientific pole.",
  "images/56b1e4980000000000000000_MEDIUM.jpg"
);

const creinnov = new Incubator(
  "Cré'Innov",
  "V. d'Ascq",
  52,
  2002,
  "Academic incubator of Lille 1 University",
  "images/36191_hubInnov.jpg"
);

const blanchemaille = new Incubator(
  "Blanchemaille",
  "Roubaix",
  39,
  2015,
  "E-commerce accelerator by Euratechnologies.",
  "images/B9710371249Z.1_20161129174109_000+GJV831N16.2-0.jpg"
);

const alacrite = new Incubator(
  "Alacrité",
  "Lille",
  12,
  2017,
  "Start-up Studio generator of young companies.",
  "images/ECH22474094_1.jpg"
);

const euralimentaire = new Incubator(
  "Euralimentaire",
  "Lille",
  21,
  2017,
  "Innovation around fresh products and their logistics.",
  "images/projets_eurasante_euralimentaire.png"
);

const ovh = new Incubator(
  "OVH",
  "Roubaix",
  2000,
  1999,
  "Innovation for freedom.",
  "images/timeline-euratek.jpg"
);

// CREATION DU TABLEAU INCUBATEUR CONTENANT LES OBJETS INCUBATEURS
const incubatorsArray = [];

// PUSH DES OBJETS INCUBATEURS
incubatorsArray.push(
  euratechnologies,
  eurasante,
  creinnov,
  blanchemaille,
  alacrite,
  euralimentaire,
  ovh
);
