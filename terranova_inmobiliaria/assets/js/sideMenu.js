const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const overlay = document.querySelector("#overlay");

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
