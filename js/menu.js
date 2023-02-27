let containerMenu = document.querySelector(".container-menu");
let itemMenu = document.querySelectorAll("nav a ");

let navMenu = document.querySelector("nav");
let btnMenuMobile = document.querySelector(".btn-menu-mobile");
let btnClassMenu = document.querySelector(".bi-text-right");
let buttonDoar = document.querySelectorAll(".button-doar")

window.addEventListener("scroll", menuScrol);
btnMenuMobile.addEventListener("click", expandirMenu);


function menuScrol() {
  for (const iterator of itemMenu) {
    if ((scrol = window.pageYOffset >= 30)) {
      containerMenu.style.background = "#65669b";
      btnMenuMobile.style.color = "white";
      iterator.style.color = "white";

      if(window.screen.width<=1000){
        navMenu.style.background = "#65669b";
      }

    } else {
      containerMenu.style.background = "";
      iterator.style.color = "";
      btnMenuMobile.style.color = "";
      navMenu.style.background=""
      
      
      

      }
      
    }
  }


menuScrol();


function expandirMenu() {
  btnClassMenu.style.transform = "rotateX(80deg)";
  navMenu.style.display = "flex";
  setTimeout(() => {
    btnClassMenu.classList.remove("bi-text-right");
    navMenu.style.left = "0px";
  }, 300);
  setTimeout(() => {
    btnClassMenu.style.transform = "rotateX(0deg)";
    btnClassMenu.classList.add("bi-x-lg");
    navMenu.style.gap = "35px";
  }, 500);

  btnMenuMobile.removeEventListener("click", expandirMenu);
  btnMenuMobile.addEventListener("click", removeMenu);
}

function removeMenu() {
  btnClassMenu.style.transform = "rotateX(80deg)";
  navMenu.style.left = "100%";
  setTimeout(() => {
    btnClassMenu.classList.remove("bi-x-lg");
    navMenu.style.display = "none";
  }, 400);
  setTimeout(() => {
    btnClassMenu.style.transform = "rotateX(0deg)";
    btnClassMenu.classList.add("bi-text-right");

    navMenu.style.gap = "0px";
  }, 500);

  btnMenuMobile.addEventListener("click", expandirMenu);
  btnMenuMobile.removeEventListener("click", removeMenu);
}

function clickItemMenu() {

  
  for (const item of itemMenu) {
    item.addEventListener("click", () => {
      removeMenu();
    });
  }

  buttonDoar.forEach(element => {
    element.addEventListener("click",()=>{
      if(navMenu.style.left=="0px"){
        removeMenu()
      }
      
      
    })
  });
}

if(window.screen.width<=1000){
  clickItemMenu();
  
}


