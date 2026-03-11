const cargarComponente = async (selector, url) => {
  const response = await fetch(url);
  const html = await response.text();
  document.querySelector(selector).innerHTML = html;
};

const initSideMenu = () => {
  const menuBtn = document.querySelector("#menu-btn");
  const closeMenuBtn = document.querySelector("#close-menu");
  const mobileMenu = document.querySelector("#mobile-menu");
  const overlay = document.querySelector("#overlay");

  if (!menuBtn) return; // todavía no está el header, nada que hacer

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("side-menu--show");
    overlay.classList.remove("hidden");
  });
  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("side-menu--show");
    overlay.classList.add("hidden");
  });
  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("side-menu--show");
    overlay.classList.add("hidden");
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  await cargarComponente("#header", "../components/header.html");
  initSideMenu(); // Se ejecuta tras insertar el header
  await cargarComponente("#footer", "../components/footer.html");
});