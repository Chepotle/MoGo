let burger = document.querySelector('.burger');
let wraper = document.querySelector('.burger_menu_wraper');
let menu = document.querySelector('.burger_menu');

let arrowPhoto = document.querySelector('#arrow_photo');
let arrowCreative = document.querySelector('#arrow_creative');
let arrowDesign = document.querySelector('#arrow_design');

let photoText = document.querySelector('.service_photo_text');
let creativeText = document.querySelector('.service_creative_text');
let designText = document.querySelector('.service_design_text');




burger.addEventListener('click', function () {
    wraper.classList.toggle('burger_position');
    menu.classList.toggle('burger_menu_display');
});



arrowPhoto.addEventListener('click', function () {
    arrowPhoto.classList.toggle('arrow_bot');
    photoText.classList.toggle('service_close_text');
});

arrowCreative.addEventListener('click', function () {
    creativeText.classList.toggle('service_close_text');
    arrowCreative.classList.toggle('arrow_bot');
    arrowCreative.classList.toggle('arrow_top');
});

arrowDesign.addEventListener('click', function () {
    designText.classList.toggle('service_close_text');
    arrowDesign.classList.toggle('arrow_bot');
    arrowDesign.classList.toggle('arrow_top');
});
