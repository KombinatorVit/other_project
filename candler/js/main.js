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
    slidesPerView: 3,
    breakpoints: {
    
        501: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,

        },
        400: {
            slidesPerView: 1,
        },

    },


    pagination: {
        el: '.swiper-pagination',
    },


});