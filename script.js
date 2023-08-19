const searchIconElement = document.getElementById("search-icon");
const searchBoxElement = document.getElementById("search-box");
const navItem2Element = document.getElementById("nav-item2");
const crossElement = document.getElementById("cross");
const pcDownArrowElement = document.getElementById("PC-down-arrow");
const submenuContainerElement = document.getElementById("submenu-container");

searchIconElement.addEventListener("click", showSearchBox);
crossElement.addEventListener("click", closeSearchBox);
pcDownArrowElement.addEventListener("click", showSubmenu);

function showSearchBox() {
  searchBoxElement.style.display = "flex";
  navItem2Element.style.display = "none";
  crossElement.style.display = "block";
}
function closeSearchBox() {
  searchBoxElement.style.display = "none";
  navItem2Element.style.display = "flex";
  crossElement.style.display = "none";
}
function showSubmenu() {
  submenuContainerElement.style.display = "flex";
}
