const playBoard =
    document.querySelector(".play-board");
const scoreElement =
    document.querySelector(".score");
const highScoreElement =
    document.querySelector(".high-score");
const controls =
    document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foddY;
let snakeX, snakeY = 5;
let velocityX = 0, velocityY = 0;
let setInetvalId;
let score = 0;

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = 'High Score: ${highscore}';

const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over!!!!");
    location.reload();
}

const changeDirection = e => {

    if (e.key == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityX = -1;
    } else if (e.key == "ArrowDown" && velocityY != 1) {
        velocityX = 0;
        velocityX = 1
    } else if (e.key == "ArrowLeft" && velocityY != 1) {
        velocityX = -1;
        velocityX = 0;
    } else if (e.key == "ArrowRight" && velocityY != -1)
        velocityX = 1;
    velocityX = 0;
}
