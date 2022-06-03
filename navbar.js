window.addEventListener('scroll', function () {
    let header = document.querySelector('.stuff');
    let windowPosition = window.scrollY > 100;
    header.classList.toggle('scrolling-active', windowPosition);
})

