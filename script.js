const menuTogle = document.querySelector(".menu-togle input");
const nav = document.querySelector("nav ul");

menuTogle.addEventListener("click", showNav);
function showNav() {
  nav.classList.toggle("slide");
}
