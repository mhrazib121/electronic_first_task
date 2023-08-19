const searchIconElement = document.getElementById("search-icon");
const searchBoxElement = document.getElementById("search-box");
const navItem2Element = document.getElementById("nav-item2");
const crossElement = document.getElementById("cross");
const pcDownArrowElement = document.getElementById("PC-down-arrow");
const submenuContainerElement = document.getElementById("submenu-container");
const humbergerElement = document.getElementById("humberger");
const menuItemElement = document.getElementById("nav-item-container");
const menuCrossElement = document.getElementById("menu-cross");

searchIconElement.addEventListener("click", showSearchBox);
crossElement.addEventListener("click", closeSearchBox);
pcDownArrowElement.addEventListener("click", showSubmenu);
humbergerElement.addEventListener("click", showMenu);
menuItemElement.addEventListener("click", showMenu);
menuCrossElement.addEventListener("click", closeMenu);

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
function showMenu() {
  humbergerElement.style.display = "none";
  menuItemElement.style.display = "flex";
  menuCrossElement.style.display = "flex";
}
function closeMenu() {
  menuItemElement.style.display = "none";
  humbergerElement.style.display = "block";
  menuCrossElement.style.display = "none";
}
