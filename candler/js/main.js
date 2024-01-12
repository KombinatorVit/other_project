const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active');
    menuBtn.classList.toggle('menu__btn--active');
    document.body.classList.toggle('no-scroll');


})

const swiperOne = new Swiper('.feedback__slider', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,


});

const swiperTwo = new Swiper('.certificate__slider', {
    loop: true,
    spaceBetween: 20,
    mousewheel: true,
    slidesPerView: 1,
    breakpoints: {

        501: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,

        },


    },


    pagination: {
        el: '.swiper-pagination',
    },


});

const accordion = document.querySelector('.accordion');
const accordionBtns = accordion.querySelectorAll('.accordion__btn');

accordionBtns.forEach.call(accordionBtns, function (accordionBtn) {
    accordionBtn.addEventListener('click', function () {

        const accordionText = accordionBtn.parentNode.querySelector('.accordion__text');

        console.log(accordionText)
        accordionBtn.classList.toggle('accordion__btn--active');
        accordionText.classList.toggle('accordion__text--active');

        if(accordionText.classList.contains('accordion__text--active')) {
            accordionText.style.maxHeight = accordionText.scrollHeight + 'px';
        } else {
            accordionText.style.maxHeight =null; // Встановлюємо велике значення max-height
        }

    })
})

