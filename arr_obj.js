let t0 = performance.now();
document.body.onload = () => {
    const rootElement = document.getElementById('root');
    for (let i = 0; i < incubatorsArray.length; i++) {

        // city
        const newCity = document.createElement('span');
        newCity.classList.add("badge-city");
        newCity.classList.add("badge");
        newCity.innerHTML = incubatorsArray[i].city;

        // companies
        const newCompanies = document.createElement('span');
        newCompanies.classList.add("badge-companies");
        newCompanies.classList.add("badge");
        newCompanies.innerHTML = incubatorsArray[i].companies;

        // since
        const newSince = document.createElement('span');
        newSince.classList.add("badge-since");
        newSince.classList.add("badge");
        newSince.innerHTML = incubatorsArray[i].since;

        // info
        const newCardInfo = document.createElement('p');
        newCardInfo.classList.add("card-text");
        newCardInfo.innerHTML = incubatorsArray[i].info;

        // p.card-text qui englobe les 3 const précédents
        const newCardP = document.createElement('p');
        newCardP.classList.add("card-text");

        newCardP.append(newCity);
        newCardP.append(newCompanies);
        newCardP.append(newSince);
        newCardP.append(newCardInfo);

        // name
        const newCardName = document.createElement('h4');
        newCardName.classList.add("card-title");
        newCardName.innerHTML = incubatorsArray[i].name;

        // img
        const newImg = document.createElement('img');
        newImg.classList.add("card-img-top");
        newImg.classList.add("reset-gray");
        newImg.src = incubatorsArray[i].img;
        newImg.alt = incubatorsArray[i].name;

        // a.card-body qui englobe
        const newCardBody = document.createElement('a');
        newCardBody.classList.add("card-body");
        newCardBody.setAttribute('href', "euratechnologies.html");
        newCardBody.append(newImg);
        newCardBody.append(newCardName);
        newCardBody.append(newCardP);

        // div.cards qui englobe tous les const précédents
        const newCard = document.createElement('div');
        newCard.classList.add("card");
        newCard.append(newCardBody);

        // div.cards qui englobe tous les const précédents
        const newCol = document.createElement('div');
        newCol.classList.add("col-md-4");
        newCol.classList.add("col-sm-6");
        newCol.classList.add("col-xs-12");
        newCol.append(newCard);

        rootElement.append(newCol);
    }

    // lancement de la fonction autotype
    autotype();
};
let t1 = performance.now();
console.log((t1 - t0));
