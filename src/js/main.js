// SCROLL NAV BAR
window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

// AOS
AOS.init({
    duration: 800,
});


// ANIMACIÓN TEXTO 
const typed = new Typed('.typed', {
    strings: ['DESARROLLADORA WEB', 'FRONTEND JUNIOR'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

