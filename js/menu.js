let containerMenu = document.querySelector(".container-menu");
let itemMenu = document.querySelectorAll("nav a ");

let navMenu=document.querySelector("nav")
let btnMenuMobile=document.querySelector(".btn-menu-mobile")

window.addEventListener("scroll", menuScrol);
function menuScrol() {
  for (const iterator of itemMenu) {
    if ((scrol = window.pageYOffset >= 30)) {
      containerMenu.style.background = "#65669b";
      btnMenuMobile.style.color = "white";
      iterator.style.color = "white";
    } else {
      containerMenu.style.background = "";
      iterator.style.color = "";
      btnMenuMobile.style.color = "";
    }
  }
}
menuScrol();



function menuMobile() {
    btnMenuMobile.addEventListener("click", expandirMenu)

    function expandirMenu(){
        navMenu.style.display="flex"
    }
}


menuMobile()