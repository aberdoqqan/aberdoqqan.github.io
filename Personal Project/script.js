document.addEventListener("DOMContentLoaded", function() {
    const navIcon = document.querySelector('.nav-icon');
    const navLinks = document.querySelector('.nav-links');

    navIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
