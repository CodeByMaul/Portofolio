// Hamburger menu saat di klik :
function toggleMenu() {
    const navLinks = document.querySelector(".nav-link");
    const hamburger = document.querySelector(".burger");

    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
}

// Download File dengan nama baru :
function downloadFile(url, filename) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        });
}