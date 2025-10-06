const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    header.style.top = "0";
  } else {
    header.style.top = "-70px";
  }
});