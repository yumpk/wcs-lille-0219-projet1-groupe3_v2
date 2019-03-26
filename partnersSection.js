const rootElement = document.getElementById('partners-gallery');
for(let i=0;i< partnersData.length;i++) {
    const newImg = document.createElement('img');
    newImg.classList.add("card-img-top");
    newImg.src = partnersData[i].imgUrl;
    newImg.alt = partnersData[i].imgAlt;

    const newCard = document.createElement('div');
    newCard.classList.add("card", "partners-cards");
    newCard.append(newImg);

    const cardLink = document.createElement('a');
    cardLink.classList.add("col-sm-5","col-md-4","col-lg-2","m-5");
    cardLink.href = partnersData[i].webpage;
    cardLink.target = "_blank";
    cardLink.append(newCard);

    rootElement.append(cardLink);
};
