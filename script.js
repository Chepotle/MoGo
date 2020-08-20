let burger = document.querySelector('.burger');
let wraper = document.querySelector('.burger_menu_wraper');
let menu = document.querySelector('.burger_menu');

burger.addEventListener('click', function () {
    wraper.classList.toggle('burger_position');
    menu.classList.toggle('burger_menu_display');
})