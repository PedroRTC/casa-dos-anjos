let containerMenu=document.querySelector(".container-menu")
let itemMenu=document.querySelectorAll("nav a ")
let cardAdotar=document.querySelector(".card-adotar")
  console.log(itemMenu)
window.addEventListener("scroll", menuScrol);

function menuScrol() {
     for (const iterator of itemMenu) {

      if ((scrol = window.pageYOffset >= 30)) {
        containerMenu.style.background = "#65669b";
        iterator.style.color="white"
      } else {
        containerMenu.style.background = "";
        iterator.style.color=""
      }
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