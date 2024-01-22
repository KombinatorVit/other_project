/*
// Навигация
const block = document.querySelector('.block');

// const blockPrev = document.querySelector('.some-block-prev');
// const blockNext = document.querySelector('.some-block-next');


// Предыдущий того же уровня
const blockPrev = block.previousElementSibling;
// console.log(blockPrev);
// Следующий того же уровня
const blockNext = block.nextElementSibling;
//console.log(blockNext);

// Родитель
const blockParent = block.parentElement;
//console.log(blockParent);

// closest - ближайший родитель либо сам элемент

// Дочерние элементы первого уровня
const blocksChildren = block.children;
//console.log(blocksChildren);

// Все потомки (или поиск в блоке)
// const blocksChildren = block.querySelectorAll('*');

// Первый дочерний элемент
const blocksFirstChild = block.firstElementChild;
//console.log(blocksFirstChild);
// Последний дочерний элемент
const blocksLastChild = block.lastElementChild;
//console.log(blocksLastChild);

// Задача - сделать мини спойлеры
// Решение:
//1) Событие документу
//2) Создаем функцию
//3) Работа с атрибутом или с классами

document.addEventListener("click", liteSpoller);

function liteSpoller(e) {
	const targetElement = e.target;
	if (targetElement.closest('.block__title')) {
		// Работа со свойством (атрибутом)
		if (targetElement.nextElementSibling.hidden) {
			targetElement.nextElementSibling.hidden = false;
		} else {
			targetElement.nextElementSibling.hidden = true;
		}
		//targetElement.nextElementSibling.hidden = !targetElement.nextElementSibling.hidden;

		// Работа с классами
		//targetElement.nextElementSibling.classList.toggle('_active');
	}
}
*/

/*
// Размеры
const sector = document.querySelector('.sector');

// Ширина
const sectorWidth = sector.offsetWidth;
//console.log(`Ширина объекта: ${sectorWidth}px`);
// Высота
const sectorHeight = sector.offsetHeight;
//console.log(`Высота объекта: ${sectorHeight}px`);
*/


// Задача:
// В момент достижения блока шапка отлипает.


// Решение:
/*
1) Слушать скролл страницы
2) Измерять положение целевого блока
3) В нужный момент работать с классами шапки
*/
/*
// Получение объектов
const header = document.querySelector('.sector');
const block = document.querySelector('.some-block');
// Получение высоты шапки
const headerHeight = header.offsetHeight;

const moment = headerHeight + 10;

// Полежение объекта относительно вьюпота
// getBoundingClientRect().top
// getBoundingClientRect().left

// Полежение объекта относительно страницы
// offsetTop
// offsetLeft

// Событие прокрутки окна
window.addEventListener("scroll", setHeaderStyle);

function setHeaderStyle(e) {
	// Кол-во прокрученных пикселей
	// window.scrollY
	// window.scrollX
	//console.log(`Объект ниже верхней части экрана на ${block.getBoundingClientRect().top}`);
	//console.log(`Момент ${moment}`);

	if (block.getBoundingClientRect().top <= moment) {
		header.style.top = `${block.offsetTop - moment}px`;
		header.classList.add('_active');
	} else {
		header.style.top = ``;
		header.classList.remove('_active');
	}
}


const sectorButton = document.querySelector('.sector__button');

sectorButton.addEventListener("click", function (e) {
	const goTo = block.offsetTop - moment;
	window.scrollTo({
		top: goTo,
		behavior: "smooth"
	});
});
*/
//========================================================================================================================================================

// Задача

// При достижении кинца экрана, объект разместить справа

// Решение
/*
1) Получаем объекты
2) Слушаем прокрутку
3) Получаем высоту экрана
4) Высчитываем процент прокрученной области
5) Используя проценты из п.4 влияем на квадрат
*/
/*
const screen = document.querySelector('.screen');
const screenItem = screen.querySelector('.screen__item');

const screenItemSizes = {
	width: screenItem.offsetWidth,
	height: screenItem.offsetHeight,
}

// Событие прокрутки окна
window.addEventListener("scroll", moveItemOnScroll);

function moveItemOnScroll() {
	// Высота вьюпорта минус ширина объекта
	const windowHeight = window.innerHeight - screenItemSizes.width;
	// Ширина вьюпорта
	const windowWidth = window.innerWidth;

	// Кол-во прокрученных пикселей
	const scrollTop = window.scrollY;
	// Получаем процент прокрученной облаcти
	const scrollProcent = scrollTop / windowHeight * 100;

	// Вычисляем left
	const currentPointLeft = (windowWidth - screenItemSizes.width) / 100 * scrollProcent;
	// Вычисляем rotate
	const currentPointRotate = 360 / 100 * scrollProcent;
	// Вычисляем scale
	const currentPointScale = 1 - (0.5 / 100 * scrollProcent);

	// Влияем на стили
	screenItem.style.cssText = `
		left: ${currentPointLeft}px;
		transform: scale(${currentPointScale}) rotate(${currentPointRotate}deg);
	`;
}
*/


// Работа с атрибутами
/*
const button = document.querySelector('.button');
// Получение значения дата атрибута
const buttonAttr = button.dataset.sanches;

// Есть ли значение у дата атрибута
if (button.dataset.sanches) {
	console.log('Есть');
}

// Проверяем наличие атрибута
if (button.hasAttribute('data-sanches')) {
	console.log('Есть атрибут');

	// Указываем значение
	//button.setAttribute('data-sanches', '456');

	// Получить значение
	let buttonAttr = button.getAttribute('data-sanches');
	console.log(buttonAttr);
}

button.addEventListener("click", function (e) {
	const buttonAttr = button.dataset.sanches;
	if (buttonAttr > 10) {
		console.log('Больше 10');
	} else {
		console.log('Меньше 10');
	}
});

*/

//========================================================================================================================================================






