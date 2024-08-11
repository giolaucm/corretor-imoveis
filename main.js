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

//Submeted button
document.querySelector('.box').addEventListener('input', function() {
    const button = document.querySelector('button[type="submit"]');
    if (this.value.trim() !== "") {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});
