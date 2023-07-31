const height = 40;
const width = screen.width < 400 ? 30 : 50;
const length = 10;
const snake = new Array(length).fill(null).map((n, i) => i);
snake.reverse();
let head = snake[0];
let direction = 'left';
let isGameOver = false;
let random;
let interval;
let counter = 0;

const pauseButton = document.querySelector(".pauseButton");
let isPaused = false;

// כל האלמנטים של הלוח
const divs = [];

const rightBoundaries = [];
const leftBoundaries = [];

// גבולות ימין
for (let i = 0; i < height; i++) {
    rightBoundaries.push(width * i - 1);
}

// גבולות שמאל
for (let i = 1; i <= height; i++) {
    leftBoundaries.push(width * i);
}

// הגדרת גריד
const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

// יצירת אלמנט של הלוח
function createBoard() {
    for (let i = 0; i < height * width; i++) {
        const div = document.createElement('div');
        board.appendChild(div);
        divs.push(div);
    }

    color();
    setApple();
}

// צביעת הנחש
function color() {
    
    divs.forEach(elem => {
        elem.classList.remove('active', 'head', 'up', 'right', 'down', 'left', 'topLeftRadius', 'topRightRadius', 'bottomRightRadius', 'bottomLeftRadius');
    });

    // עיצוב הגוף של הנחש
    snake.forEach((num, i) => {
        divs[num].classList.add('active');
        const prev = snake[i + 1];
        const next = snake[i - 1];

        if (prev && next) {
            if ((next == num - 1 && prev == num + width) || (next == num + width && prev == num - 1)) {
                divs[num].classList.add('topLeftRadius');
            } else if ((next == num + width && prev == num + 1) || (prev == num + width && next == num + 1)) {
                divs[num].classList.add('topRightRadius');
            } else if ((next == num + 1 && prev == num - width) || (prev == num + 1 && next == num - width)) {
                divs[num].classList.add('bottomRightRadius');
            } else if ((next == num - 1 && prev == num - width) || (prev == num - 1 && next == num - width)) {
                divs[num].classList.add('bottomLeftRadius');
            }
        }

        const counterDisplay = document.querySelector(".counter");
        counterDisplay.textContent = `ניקוד: ${counter}`;
    });

    // הוספנו 2 קלאסים לראש הנחש
    divs[head].classList.add('head', direction);
}

// פונקציה שקובעת לאן הנחש פונה
function move(dir) {
    if (isGameOver) {
        return;
    }

    if (dir === 'up') {
        if (direction === 'down') {
            return;
        }

        head -= width;

        if (!divs[head]) {
            gameOver();
            return;
        }
    } else if (dir === 'down') {
        if (direction === 'up') {
            return;
        }

        head += width;

        if (!divs[head]) {
            gameOver();
            return;
        }
    } else if (dir === 'left') {
        if (direction === 'right') {
            return;
        }

        head++;
        // קביעת גבולות שמאל
        if (leftBoundaries.includes(head)) {
            gameOver();
            return;
        }
    } else if (dir === 'right') {
        if (direction === 'left') {
            return;
        }

        head--;
        // קביעת גבולות ימין
        if (rightBoundaries.includes(head)) {
            gameOver();
            return;
        }
    }

    // פסילה כאשר הנחש פוגש את עצמו
    if (snake.includes(head)) {
        gameOver();
        return;
    }

    direction = dir;
    snake.unshift(head);

   if (head === random) {
        const audio = document.createElement('audio');
        audio.src = "../project\ 7/assets/pebble.ogg";
        audio.play();
        counter += 10; // מוסיף 10 נקודות 
        setApple();
    } else {
        snake.pop();
    }

    color(); // מעדכן את התצוגה של הניקוד לאחר כל שינוי
    startAuto();
}

// פונקציה של פסילת המשחק
function gameOver() {
    isGameOver = true;
    clearInterval(interval);

    const audio = document.createElement('audio');
    audio.src = "../project\ 7/assets/Country_Blues.ogg";
    audio.play();
    
    const gameOverOverlay = document.querySelector(".gameOverOverlay");
    gameOverOverlay.style.display = "block";

    // טעינת המשחק מחדש לאחר פסילה
    setTimeout(() => {
        location.reload();
    }, 2000);
}

// מיקום אקראי של התפוח בלוח
function setApple() {
    random = Math.floor(Math.random() * divs.length);

    if (snake.includes(random)) {
        setApple();
    } else {
        divs.forEach(elem => elem.classList.remove('apple'));
        divs[random].classList.add('apple');
    }
}

// פונקציה שמתחילה משחק
function startAuto() {
    clearInterval(interval);
    interval = setInterval(() => move(direction), 200);
}

window.addEventListener('keydown', ev => {
    ev.preventDefault();

    // בדיקת איזה מקש נלחץ במקלדת
    switch (ev.key) {
        case 'ArrowUp': move('up'); break;
        case 'ArrowRight': move('right'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
        case 'Escape': clearInterval(interval); break;
        case ' ': togglePause(); 
        break;
    }
});

// השהיית המשחק
function togglePause() {
    if (isGameOver) return;

    if (isPaused) {
        startAuto();
        pauseButton.textContent = "השהה";
    } else {
        clearInterval(interval);
        pauseButton.textContent = "המשך";
    }
    isPaused = !isPaused;
}

pauseButton.addEventListener('click', togglePause);