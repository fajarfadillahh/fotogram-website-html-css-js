// SHOW HEADER MENU
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// ADD BACKGROUND HEADER WHEN WE SCROLL THE WINDOW
const scrollY = window.pageYOffset;
function scrollAction() {
  const header = document.getElementById("header");

  this.scrollY >= 100
    ? header.classList.add("scroll-action")
    : header.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollAction);

// SWIPER JS HOME SECTION
let homeImage = new Swiper(".home-image", {
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".home__button-prev",
    prevEl: ".home__button-next",
  },
});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
  reset: true,
});
