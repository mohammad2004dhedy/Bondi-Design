let LandingTitle = document.getElementById("LandingTitle");
window.onscroll = function () {
  let value = scrollY;
  LandingTitle.style.letterSpacing = value + "px";
};
