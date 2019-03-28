

function surligne(champ, erreur){
    if(erreur){
      champ.style.backgroundColor = "#fba";
    }
    else{
      champ.style.backgroundColor = "";
    }
}

function verifyFirstName(champ){
    if(champ.value.length < 1)   {
      surligne(champ, true);
      return false;
    }
    else{
      surligne(champ, false);
      return true;
    }
}

function verifyLastName(champ){
    if(champ.value.length < 1){
        surligne(champ, true);
        return false;
    } else{
      surligne(champ, false);
      return true;
    }
}

function verifyMessage(champ){
    if(champ.value.length < 1)
    {
        surligne(champ, true);
        return false;
    } else{
        surligne(champ, false);
        return true;
    }
}

function verifyEmail(champ){
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!regex.test(champ.value)) {
      surligne(champ, true);
      return false;
  } else {
  surligne(champ, false);
  return true;
  }
}