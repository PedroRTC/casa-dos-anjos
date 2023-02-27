let sobreNos = document.querySelector(".container-sobre-nos");
let containerAnimais = document.querySelector(".container-animais");
let assuntos = [];
let animais = [];

let buttonCopy = document.querySelectorAll(".button-copy");
let inputPix = document.querySelector(".input-pix");
let audio = document.querySelector("audio");

let containerCarrossel = document.querySelector(".container-carrossel");
let btnDireita = document.querySelector(".btn-direita");
let btnEsquerda = document.querySelector(".btn-esquerda");

async function iniciarResposta() {
  assuntos = await respSobre();
  animais = await respAnimais();

  criarAssuntos();
  GaleriaAnimais();
}

iniciarResposta();

function criarAssuntos() {
  assuntos.map((item) => {
    let sectionAssunto = document.createElement("section");
    let sectionTitulo = document.createElement("section");
    let titulo = document.createElement("h4");
    let expandir = document.createElement("button");
    let descricao = document.createElement("p");

    sectionAssunto.classList.add("sectionAssunto");
    sectionTitulo.classList.add("sectionTitulo");
    titulo.classList.add("titulo");
    expandir.classList.add("expandir");
    descricao.classList.add("descricao");
    JSON.stringify(item);

    titulo.textContent = item.title;
    descricao.textContent = item.description;

    expandir.innerHTML = `<i class="bi bi-chevron-down"></i>`;

    sectionTitulo.appendChild(titulo);
    sectionTitulo.appendChild(expandir);
    sectionAssunto.appendChild(sectionTitulo);
    sectionAssunto.appendChild(descricao);

    sobreNos.appendChild(sectionAssunto);

    sectionTitulo.addEventListener("click", () =>
      expandirAssunto(sectionAssunto, expandir, sectionTitulo)
    );
  });
}

function GaleriaAnimais() {
  animais.map((animal) => {
    let imgAnimal = document.createElement("img");

    imgAnimal.src = animal.img;
    imgAnimal.classList.add("imgAnimal");

    containerAnimais.appendChild(imgAnimal);
  });
}

function expandirAssunto(sectionAssunto, expandir, sectionTitulo) {
  sectionAssunto.style.height = "auto";
  expandir.style.transform = "rotateX(180deg)";
  sectionTitulo.removeEventListener("click", expandirAssunto);
  sectionTitulo.addEventListener("click", () =>
    removeAssunto(sectionAssunto, expandir, sectionTitulo)
  );
}

function removeAssunto(sectionAssunto, expandir, sectionTitulo) {
  sectionAssunto.style.height = "45px";
  expandir.style.transform = "rotateX(0deg)";
  sectionTitulo.removeEventListener("click", removeAssunto);
  sectionTitulo.addEventListener("click", () =>
    expandirAssunto(sectionAssunto, expandir, sectionTitulo)
  );
}

function copiarPix() {
  let confirmPix = document.createElement("div");
  let descConfirm = document.createElement("p");

  confirmPix.classList.add("confirmPix");
  descConfirm.classList.add("descConfirm");

  descConfirm.innerHTML = `<i class="bi bi-check2-circle"></i>Pix copiado`;
  confirmPix.appendChild(descConfirm);

  for (const copiar of buttonCopy) {
    copiar.addEventListener("click", function (e) {
      inputPix.select();
      document.execCommand("copy");

      window.document.body.appendChild(confirmPix);

      setTimeout(() => {
        confirmPix.style.left = "0px";
        audio.play();
      }, 100);

      setTimeout(() => {
        confirmPix.style.left = "-100%";
      }, 2000);
    });
  }
}

copiarPix();

function carrosselFundadora() {
  btnDireita.addEventListener("click", () => {
    containerCarrossel.scrollBy(300, 0);
  });

  btnEsquerda.addEventListener("click", () => {
    containerCarrossel.scrollBy(-300, 0);
  });
}

carrosselFundadora();
