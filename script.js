const menuToggle = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.classList.add("menu-open");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.classList.remove("menu-open");
});

/* DROPDOWNS MOBILE */
/*const dropdownBtns =
  document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach(btn => {

  btn.addEventListener("click", (e) => {

    if (window.innerWidth <= 1024) {

      e.preventDefault();

      const dropdown =
        btn.nextElementSibling;

      dropdown.classList.toggle("open");
    }
  });
});*/