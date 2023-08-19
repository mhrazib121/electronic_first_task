const searchIconElement = document.getElementById("search-icon");
const searchBoxElement = document.getElementById("search-box");
const navItem2Element = document.getElementById("nav-item2");
const crossElement = document.getElementById("cross");

searchIconElement.addEventListener("click", showSearchBox);
crossElement.addEventListener("click", closeSearchBox);

function showSearchBox() {
  searchBoxElement.style.display = "flex";
  navItem2Element.style.display = "none";
}
function closeSearchBox() {
  searchBoxElement.style.display = "none";
  navItem2Element.style.display = "flex";
}
