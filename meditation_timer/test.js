// // Сделайте калькулятор, который будет находить площадь и периметр квадрата.
//
//
// function calculateSquare(side) {
//
//     const perimeter = 4 * side
//     const area = side * side
//     console.log(`Perimeter: ${perimeter}`)
//     console.log(`Area: ${area}`)
// }
//
// //
// // calculateSquare(6)
// //
// //
// // //Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.
// //
// // function calculateRectangle(length, width) {
// //
// //     const perimeter = 2 * (length + width)
// //     const area = length * width
// //
// //     console.log(`Perimeter: ${perimeter}`)
// //     console.log(`Area: ${area}`)
// // }
// //
// // calculateRectangle(4, 7)
// //
// // //Сделайте калькулятор, который будет находить площадь круга и длину окружности.
// //
// // function calculateCircle(radius){
// //     const circumference = 2 * Math.PI * radius
// //     const area = Math.PI * Math.pow(radius, 2)
// //
// //     console.log(`Circumference: ${circumference}`);
// //     console.log(`Area: ${area}`);
// // }
// //
// // calculateCircle(5)
// //
// // //Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
// //
// // function calculateTriangleArea(sideA, sideB, sideC) {
// //     const semiPerimeter = (sideA + sideB + sideC) / 2;
// //     const area = Math.sqrt(
// //         semiPerimeter *
// //         (semiPerimeter - sideA) *
// //         (semiPerimeter - sideB) *
// //         (semiPerimeter - sideC)
// //     );
// //
// //     console.log(`Area: ${area}`);
// // }
// //
// // calculateTriangleArea(3, 4, 5);
//
//
//
//         //     let inputs = document.querySelectorAll('input');
//         //     let btn = document.querySelector('#btn');
//         //     let sum = 0;
//         //
//         //     btn.addEventListener('click', function() {
//         //     for (let input of inputs) {
//         //     sum += Number(input.value);
//         // }
//         //
//         //     console.log(sum);
//         // })
//
//
//     let inp = document.querySelector('#inp');
//
// inp.addEventListener('blur', function() {
//     let digits = +inp.value.split('');
//     let sum = 0;
//
//     for (let digit of digits) {
//         sum += digit;
//     }
//
//     console.log(sum);
// });
//


const input = document.querySelector('.input')
const p = document.querySelector('p')

input.addEventListener('blur', function () {
    p.textContent = this.value
})

