let containerMenu=document.querySelector(".container-menu")

window.addEventListener("scroll", menuScrol);

function menuScrol() {
 
    if ((scrol = window.pageYOffset >= 30)) {
      containerMenu.style.background = "#d9e5e6";
    } else {
      containerMenu.style.background = "";
     
    }
 
}
menuScrol();