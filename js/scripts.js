window.addEventListener('DOMContentLoaded', () => {

    // Navbar shrink
    const navbarShrink = () => {
        const navbar = document.querySelector('#mainNav');
        if (!navbar) return;
        navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Collapse navbar on small screens
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
    if (navbarToggler) {
        navLinks.forEach(navItem => {
            navItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    }

    //Manual active underline
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

});
