document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const body = document.body;

    burger.addEventListener('click', function() {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('no-scroll');
        burger.setAttribute('aria-expanded', burger.classList.contains('active'));
    });
});