const header = document.querySelector('header');

function checkScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

