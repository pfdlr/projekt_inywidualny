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
/* ---------------------- CHART --------------------*/
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
      // 2
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      // 3
      datasets: [{
          // 4
          label: "Signups",
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
      },
      {
          label: "FTD",
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
      },
      {
          label: "Earned",
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // 7
          hidden: true,
      }]
  },
});