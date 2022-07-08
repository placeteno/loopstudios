const mobileMenu = document.querySelector(".main-nav");
const openMenuBtn = document.querySelector(".open-mobile-menu");
const closeMenuBtn = document.querySelector(".close-mobile-menu");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("visible");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("visible");
});
