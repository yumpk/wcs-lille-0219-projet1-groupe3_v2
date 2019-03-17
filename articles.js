document.body.onload = ()=>{
    //console.log(data);

    const rootElement = document.getElementById('articles-gallery');
    for(let i=0;i<data.length;i++) {
        console.log(data[i]);

        /*
        let newP = document.createElement('p');
        newP.innerHTML = data[i].title;
        rootElement.appendChild(newP);
        */


        const newImg = document.createElement('img');
        newImg.classList.add("card-img-top");
        newImg.src = data[i].imgUrl;
        newImg.alt = data[i].imgAlt;

        const newCardTitle = document.createElement('h5');
        newCardTitle.classList.add("card-title");
        newCardTitle.innerHTML = data[i].title;

        const newCardP = document.createElement('p');
        newCardP.classList.add("card-text");
        newCardP.innerHTML = data[i].longText;

        const newCardButton = document.createElement('button');
        newCardButton.classList.add("btn","btn-primary", "mx-auto");
        newCardButton.innerHTML = data[i].shortText;

        const clapsIcon = document.createElement("img");
        clapsIcon.src = "https://img.icons8.com/ios/30/000000/applause.png";

        const clapsCount = document.createElement("p");
        clapsCount.classList.add("m-0");
        clapsCount.innerHTML = data[i].nbClaps;

        const newClaps = document.createElement('div');
        newClaps.classList.add("claps-tag","shadow-sm","rounded");
        newClaps.append(clapsIcon);
        newClaps.append(clapsCount);
        
        const newCardBody = document.createElement('div');
        newCardBody.classList.add("card-body");
        newCardBody.append(newCardTitle);
        newCardBody.append(newCardP);
        newCardBody.append(newCardButton);
        
        const newCard = document.createElement('div');
        newCard.classList.add("p-2","shadow-sm","card");
        newCard.append(newImg);
        newCard.append(newClaps);
        newCard.append(newCardBody);

        const cardLink = document.createElement('a');
        cardLink.classList.add("col-12","col-md-6","col-lg-4");
        cardLink.href = data[i].webpage;
        cardLink.target = "_blank";
        cardLink.append(newCard);

        rootElement.append(cardLink);
    }

}