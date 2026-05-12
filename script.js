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




/*HOLA GABI ESTE FUNCIONA SI SOLO QUEREMOS QUE ENTRE DERECHA A IZQ
Y SE QUEDE AMARILLO AHÍ MIRAMOS CUAL TE GUSTA MÁS*/

/*const transition = document.querySelector(".page-transition");

document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href]:not([href="#"])');
  
  if (link) {
    e.preventDefault();
    const url = link.href;

    transition.classList.add("enter");

    setTimeout(() => {
      window.location.href = url;
    }, 500);
  }
});*/


const transition = document.querySelector(".page-transition");

document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href]:not([href="#"])');
  
  if (link) {
    e.preventDefault();
    const url = link.href;

    // 1. Entra de derecha a izquierda
    transition.classList.add("enter");

    setTimeout(() => {
      // 2. Sale hacia la izquierda
      transition.classList.add("exit");

      setTimeout(() => {
        // 3. Redirige cuando ya salió
        window.location.href = url;
      }, 600);
    }, 1000);
  }
});