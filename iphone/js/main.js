'use strict'



const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');


menuBtn.addEventListener('click', () => {
    nav.classList.toggle('menu-mobile')
    document.body.classList.toggle('no-scroll');

})
