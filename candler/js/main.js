const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active');
    menuBtn.classList.toggle('menu__btn--active');
    document.body.classList.toggle('no-scroll');


})