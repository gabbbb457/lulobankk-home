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


const transition = document.querySelector(".page-transition");

// Escucha CUALQUIER click en la página
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href]:not([href="#"])');
  
  if (link) {
    e.preventDefault();
    const url = link.href;

    transition.classList.remove("exit");
    transition.classList.add("enter");

    setTimeout(() => {
      window.location.href = url;
    }, 500);
  }
});

// Al cargar la nueva página — cortina sale hacia la izquierda
window.addEventListener("pageshow", () => {
  transition.classList.add("enter");

  setTimeout(() => {
    transition.classList.add("exit");
  }, 100);
});