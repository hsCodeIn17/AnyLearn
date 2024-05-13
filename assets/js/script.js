let dropDown = document.getElementsByClassName("open-drop");
let menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("d-none");
});
