// Hamburger menu saat di klik :
function toggleMenu() {
    const navLinks = document.querySelector(".nav-link");
    const hamburger = document.querySelector(".burger");

    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
}