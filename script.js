let burger = document.querySelector('.burger_menu');
let menu = document.querySelector('.intro_menu');

burger.addEventListener('click', function () {
    menu.classList.toggle('burger_position');
})