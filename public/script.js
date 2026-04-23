document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
        
        // Cierra el menú si se hace clic en un enlace (opcional)
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Solo si el menú se está mostrando
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            });
        });
    }
});