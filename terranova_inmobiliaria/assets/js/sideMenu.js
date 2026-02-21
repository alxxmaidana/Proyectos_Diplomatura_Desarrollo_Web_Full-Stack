const btnAbrirMenu = document.querySelector("#menu-btn");
const menuLateral = document.querySelector("#mobile-menu");
const overlay = document.querySelector("#overlay");
const btnCerrarMenu = document.querySelector("#close-menu");

function cerrarMenuLateral() {
  menuLateral.classList.remove("show-side-menu");
  menuLateral.classList.add("hidden");
  overlay.classList.add("hidden");
}

function abrirMenuLateral() {
  menuLateral.classList.remove("hidden");
  menuLateral.classList.add("show-side-menu");
  overlay.classList.remove("hidden");
}

btnAbrirMenu.addEventListener("click", abrirMenuLateral);
btnCerrarMenu.addEventListener("click", cerrarMenuLateral);
overlay.addEventListener("click", cerrarMenuLateral);
