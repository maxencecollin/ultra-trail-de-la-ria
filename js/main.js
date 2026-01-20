/**
 * Ultra Trail de la Ria d'Étel - JavaScript principal
 */

document.addEventListener('DOMContentLoaded', function() {
    // Menu burger pour mobile
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Fermer le menu au clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Navbar transparente en haut, opaque au scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(26, 26, 46, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(26, 26, 46, 1)';
        }
    });
});
