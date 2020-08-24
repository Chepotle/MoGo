let scrollArrow = document.querySelector('.scroll_button');


function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        scrollArrow.classList.add('arrow_show');
    }
    if (scrolled < coords) {
        scrollArrow.classList.remove('arrow_show');
    }
}


window.addEventListener('scroll', trackScroll);

scrollArrow.addEventListener('click', function () {
    window.scrollTo(0, 0);
})





