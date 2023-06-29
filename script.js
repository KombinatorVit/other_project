// 'use strict';
//
// let numberOfFilms;
//
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
//
//     while (numberOfFilms == null || numberOfFilms === '' || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
//     }
//
// }
//
// start();
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }
//
//
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim();
//         const b = prompt('На сколько оцените его?', '').trim();
//         if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
//
//
// rememberMyFilms();
//
//
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
//
// }
//
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
//
// showMyDB(personalMovieDB.privat);
//
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
//
// writeYourGenres()
//
// detectPersonalLevel()
//
//
//
//
// function getCoupeNumber(place) {
//     if (isNaN(place) || place < 0 || !Number.isInteger(place)) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     } else if (place === 0 || place > 36) {
//         return 'Таких мест в вагоне не существует';
//     } else {
//         if (!Number.isInteger(place / 4)) {
//             return Math.trunc(place / 4) + 1;
//         } else {
//             return place / 4;
//         }
//     }
// }
//
// console.log(getCoupeNumber(22))
// console.log(getCoupeNumber(-10)
// )
//
//
//
// function* getArray() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

function first() {
setTimeout(() => {
    console.log('Hello')
},2000)
}

function second() {
    console.log('Bye')
}

first()
second()