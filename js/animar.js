let cardAdotar = document.querySelector(".card-adotar");

function animarCard() {
  setInterval(() => {
    cardAdotar.style.backgroundImage =
      "url(../img/animais-adotar/card-principal02-animal.png)";
  }, 2000);

  setInterval(() => {
    cardAdotar.style.backgroundImage =
      "url(../img/animais-adotar/card-principal-animal.png)";
  }, 4000);
}

animarCard();
