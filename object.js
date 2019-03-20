class Incubator {
    constructor(name, city, companies, since, info, img) {
        this.name = name;
        this.city = city;
        this.companies = companies;
        this.since = since;
        this.info = info;
        this.img = img;
    }

    //décrit l'incubateur
    describe() {
        return `L'incubateur ${this.name} est situé à ${this.city} a été créé en ${this.since} et a accueilli à ce jour ${this.companies} entreprises.`
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

const addNameEuratechnologies = document.getElementById('name-euratechnologies');
const addCityEuratechnologies = document.getElementById('city-euratechnologies');
const addCompaniesEuratechnologies = document.getElementById('companies-euratechnologies');
const addSinceEuratechnologies = document.getElementById('since-euratechnologies');
const addInfoEuratechnologies = document.getElementById('info-euratechnologies');

addNameEuratechnologies.innerHTML = euratechnologies.name;
addCityEuratechnologies.innerHTML = euratechnologies.city;
addCompaniesEuratechnologies.innerHTML = euratechnologies.companies;
addSinceEuratechnologies.innerHTML = euratechnologies.since;
addInfoEuratechnologies.innerHTML = euratechnologies.describe();

const eurasante = new Incubator(
    "Eurasanté",
    "Loos",
    170,
    1994,
    "European-wide economic and scientific pole.",
    "images/56b1e4980000000000000000_MEDIUM.jpg"
);

const addNameEurasante = document.getElementById('name-eurasante');
const addCityEurasante = document.getElementById('city-eurasante');
const addCompaniesEurasante = document.getElementById('companies-eurasante');
const addSinceEurasante = document.getElementById('since-eurasante');
const addInfoEurasante = document.getElementById('info-eurasante');

addNameEurasante.innerHTML = eurasante.name;
addCityEurasante.innerHTML = eurasante.city;
addCompaniesEurasante.innerHTML = eurasante.companies;
addSinceEurasante.innerHTML = eurasante.since;
addInfoEurasante.innerHTML = eurasante.info;

const creinnov = new Incubator(
    "Cré'Innov",
    "V. d'Ascq",
    52,
    2002,
    "European-wide economic and scientific pole.",
    "images/36191_hubInnov.jpg"
);

const addNameCreinnov = document.getElementById('name-creinnov');
const addCityCreinnov = document.getElementById('city-creinnov');
const addCompaniesCreinnov = document.getElementById('companies-creinnov');
const addSinceCreinnov = document.getElementById('since-creinnov');
const addInfoCreinnov = document.getElementById('info-creinnov');

addNameCreinnov.innerHTML = creinnov.name;
addCityCreinnov.innerHTML = creinnov.city;
addCompaniesCreinnov.innerHTML = creinnov.companies;
addSinceCreinnov.innerHTML = creinnov.since;
addInfoCreinnov.innerHTML = creinnov.info;

const blanchemaille = new Incubator(
    "Blanchemaille",
    "Roubaix",
    39,
    2015,
    "E-commerce accelerator by Euratechnologies.",
    "images/B9710371249Z.1_20161129174109_000+GJV831N16.2-0.jpg"
);

const addNameBlanchemaille = document.getElementById('name-blanchemaille');
const addCityBlanchemaille = document.getElementById('city-blanchemaille');
const addCompaniesBlanchemaille = document.getElementById('companies-blanchemaille');
const addSinceBlanchemaille = document.getElementById('since-blanchemaille');
const addInfoBlanchemaille = document.getElementById('info-blanchemaille');

addNameBlanchemaille.innerHTML = blanchemaille.name;
addCityBlanchemaille.innerHTML = blanchemaille.city;
addCompaniesBlanchemaille.innerHTML = blanchemaille.companies;
addSinceBlanchemaille.innerHTML = blanchemaille.since;
addInfoBlanchemaille.innerHTML = blanchemaille.info;

const alacrite = new Incubator(
    "Alacrité",
    "Lille",
    12,
    2017,
    "Start-up Studio generator of young companies.",
    "images/ECH22474094_1.jpg"
);

const addNameAlacrite = document.getElementById('name-alacrite');
const addCityAlacrite = document.getElementById('city-alacrite');
const addCompaniesAlacrite = document.getElementById('companies-alacrite');
const addSinceAlacrite = document.getElementById('since-alacrite');
const addInfoAlacrite = document.getElementById('info-alacrite');

addNameAlacrite.innerHTML = alacrite.name;
addCityAlacrite.innerHTML = alacrite.city;
addCompaniesAlacrite.innerHTML = alacrite.companies;
addSinceAlacrite.innerHTML = alacrite.since;
addInfoAlacrite.innerHTML = alacrite.info;

const euralimentaire = new Incubator(
    "Euralimentaire",
    "Lille",
    21,
    2017,
    "Innovation around fresh products and their logistics.",
    "images/projets_eurasante_euralimentaire.png"
);

const addNameEuralimentaire = document.getElementById('name-euralimentaire');
const addCityEuralimentaire = document.getElementById('city-euralimentaire');
const addCompaniesEuralimentaire = document.getElementById('companies-euralimentaire');
const addSinceEuralimentaire = document.getElementById('since-euralimentaire');
const addInfoEuralimentaire = document.getElementById('info-euralimentaire');

addNameEuralimentaire.innerHTML = euralimentaire.name;
addCityEuralimentaire.innerHTML = euralimentaire.city;
addCompaniesEuralimentaire.innerHTML = euralimentaire.companies;
addSinceEuralimentaire.innerHTML = euralimentaire.since;
addInfoEuralimentaire.innerHTML = euralimentaire.info;