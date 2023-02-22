let containerMenu=document.querySelector(".container-menu")
let cardAdotar=document.querySelector(".card-adotar")

window.addEventListener("scroll", menuScrol);

function menuScrol() {
 
    if ((scrol = window.pageYOffset >= 30)) {
      containerMenu.style.background = "#d9e5e6";
    } else {
      containerMenu.style.background = "";
     
    }
 
}
menuScrol();

function animarCard(){
 
  setInterval(() => {
    cardAdotar.style.backgroundImage="url(../img/animais-adotar/card-principal02-animal.png)"
  }, 2000);

  setInterval(() => {
    cardAdotar.style.backgroundImage="url(../img/animais-adotar/card-principal-animal.png)"
  }, 4000);
  
}

animarCard()