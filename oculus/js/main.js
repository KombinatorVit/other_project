"use strict";

const tabItems = document.querySelectorAll('.tabs__btn-item');
const tabContents = document.querySelectorAll('.tabs__content-item');

function openTab(event) {
    const clickedTab = event.currentTarget;

    // Удаляем активный класс у всех вкладок
    tabItems.forEach(item => {
        item.classList.remove('tabs__btn-item--active');
    });

    // Добавляем активный класс к текущей вкладке
    clickedTab.classList.add('tabs__btn-item--active');

    // Удаляем активный класс у всех содержимых вкладок
    tabContents.forEach(item => {
        item.classList.remove('tabs__content-item--active');
    });

    // Добавляем активный класс к соответствующему содержимому
    const targetContentId = clickedTab.dataset.button;
    document.querySelector(`#${targetContentId}`).classList.add('tabs__content-item--active');
}

// Добавляем обработчик события для каждой вкладки
tabItems.forEach(item => {
    item.addEventListener('click', openTab);
});
