"use strict";
function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("hidemenu");
}
document.querySelector(".hamburger").addEventListener("click", function(e) {
  e.preventDefault();
  toggleMenu();
});

function hideMenu() {
  document.querySelector(".sidebar").classList.add("hidemenu");
}
document.querySelector(".content-wrapper").addEventListener("click", function() {
  hideMenu();
});

/* Modal */
function closeModal() {
  document.getElementById("overlay").classList.remove("show");
}
document.querySelectorAll("#overlay .js--close-modal").forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    closeModal();
  });
});
document.querySelector("#overlay").addEventListener("click", function(e) {
  if (e.target === this) {
    closeModal();
  }
});
document.addEventListener("keyup", function(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll("#overlay > *").forEach(function(modal) {
    modal.classList.remove("show");
  });
  document.querySelector("#overlay").classList.add("show");
  document.querySelector("#bannersModal").classList.add("show");
}
var bannersBtn = document.getElementById("banners");
bannersBtn.addEventListener("click", function(e) {
  e.preventDefault();
  openModal();
});
/* Copy link*/
function copyLink() {
  var copyText = document.getElementById("copy-link");
  copyText.select();
  document.execCommand("copy");
      
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
} 
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}