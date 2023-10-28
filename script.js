const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const restartButton = document.getElementById('restart-btn');

// Установка размеров canvas
canvas.width = 600;
canvas.height = 400;

// Позиция платформы
let platformX = canvas.width / 2;

// Скорость и направление движения платформы
let platformSpeed = 8;
let platformDirection = 0;

// Позиции и радиусы шариков
const balls = [
    { x: 100, y: 50, radius: 20, speedY: 5 },
    { x: 200, y: 100, radius: 15, speedY: 7 },
    { x: 300, y: 150, radius: 10, speedY: 9 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
    { x: 400, y: 200, radius: 25, speedY: 4 },
];

let score = 0; // Очки игрока
let isGameOver = false; // Флаг окончания игры

// Обработка нажатия клавиш
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        platformDirection = -1; // Движение влево
    } else if (event.key === 'ArrowRight') {
        platformDirection = 1; // Движение вправо
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        platformDirection = 0; // Остановка движения
    }
});

// Основной игровой цикл
function gameLoop() {
    if (!isGameOver) {
        // Очистка canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Рисование платформы
        ctx.fillStyle = 'blue';
        ctx.fillRect(platformX - 50, canvas.height - 20, 100, 10);

        // Обновление позиции платформы
        platformX += platformSpeed * platformDirection;

        // Проверка границ canvas для платформы
        if (platformX < 50) {
            platformX = 50;
        } else if (platformX > canvas.width - 50) {
            platformX = canvas.width - 50;
        }

        // Рисование и обновление позиций шариков
        ctx.fillStyle = 'red';
        for (let ball of balls) {
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();

            ball.y += ball.speedY;

            // Проверка столкновения шарика с платформой
            if (
                ball.y + ball.radius >= canvas.height - 20 &&
                ball.x >= platformX - 50 &&
                ball.x <= platformX + 50
            ) {
                ball.speedY = -ball.speedY; // Изменение направления шарика при столкновении
                score++; // Увеличение очков при пойманном шарике
            }

            // Проверка столкновения шарика с нижней границей canvas
            if (ball.y + ball.radius >= canvas.height) {
                ball.y = -ball.radius; // Перемещение шарика вверх, если он достиг нижней границы
            }
        }

        // Вывод очков и таймера
        ctx.fillStyle = 'black';
        ctx.font = '24px Arial';
        ctx.fillText('Score: ' + score, 10, 30);
        ctx.fillText('Time: ' + Math.floor(Date.now() / 1000), 10, 60);

        // Проверка окончания игры (например, после достижения определенного количества очков)
        if (score >= 10) {
            gameOver();
        }

        requestAnimationFrame(gameLoop);
    }
}

// Функция окончания игры
function gameOver() {
    isGameOver = true;

    // Отображение кнопки рестарта
    restartButton.style.display = 'block';

    // Вывод сообщения о завершении игры
    ctx.fillStyle = 'black';
    ctx.font = '36px Arial';
    ctx.fillText('Game Over', canvas.width / 2 - 100, canvas.height / 2 - 20);
}

// Функция перезапуска игры
function restartGame() {
    score = 0;
    isGameOver = false;
    restartButton.style.display = 'none';
    platformX = canvas.width / 2;
    gameLoop();
}

restartButton.addEventListener('click', restartGame);

gameLoop();
