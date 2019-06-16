"use strict";
function toggleMenu(show) {
  document.querySelector(".sidebar").classList.toggle("showmenu", show);
}
document.querySelector(".hamburger").addEventListener("click", function(e) {
  e.preventDefault();
  toggleMenu();
});
