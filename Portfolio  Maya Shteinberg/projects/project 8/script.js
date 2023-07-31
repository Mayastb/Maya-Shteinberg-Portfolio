const elem = document.querySelector(".board");
let isX = true;
let winner;
let winnerArray;
let gameFinished = false;

// פונקציה שמתחילה את המשחק ובוחרת איזה צורה משחקת ראשונה
function startGame(chosenCharacter) {
    const chooseXButton = document.getElementById("chooseX");
    const chooseOButton = document.getElementById("chooseO");
    const resetGameButton = document.getElementById("resetGame");

 
    chooseXButton.disabled = true;
    chooseOButton.disabled = true;
    
   
    isX = chosenCharacter === 'X';

    resetGameButton.disabled = false;

}

for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");

    div.addEventListener("click", ev => {
        const clickedDiv = ev.target;

        if (!clickedDiv.innerHTML && !winner) {
            if (isX) {
                clickedDiv.innerHTML = "X";
            } else {
                clickedDiv.innerHTML = "O"
            }

            clickedDiv.className = 'dirty';
            isX = !isX;
            check();
        }
    });

    elem.appendChild(div);
}

// פונקציה שבודקת מי מנצח 
function check() {
    const divs = elem.querySelectorAll('div');

    // מערך אפשרויות לנצחון
    const options = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const arr of options) {
        const res = arr.map(index => divs[index].innerHTML);

        if (res.every(val => val === 'X')) {
            winner = 'X';
            winnerArray = arr;
            break;
        } else if (res.every(val => val === 'O')) {
            winner = 'O';
            winnerArray = arr;
            break;
        }
    }

    if (winner) {
        elem.querySelectorAll('div').forEach(el => {
            el.classList.remove('dirty', 'bg', 'winner-cell');
        });

        winnerArray.forEach(index => divs[index].classList.add('bg', 'winner-cell'));

        showWinner(`The winner is ${winner}`);
        resetGame();
    }
}

// פונקציה שמציגה את המנצח על המסך
function showWinner(text) {
    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.innerHTML = text;

    const frame = document.querySelector(".frame");
    frame.appendChild(winner);

    confetti({
        particleCount: 100,
        spread: 70,
        decay: 0.9,
        origin: { y: 0.6 }
    });
    
    setTimeout(function() {
        frame.removeChild(winner);
    }, 2 * 1000);
}

// פונקציה שמתחילה את המשחק מחדש
function resetGame() {
    const chooseXButton = document.getElementById("chooseX");
    const chooseOButton = document.getElementById("chooseO");
    const resetGameButton = document.getElementById("resetGame");
    const divs = elem.querySelectorAll('div');

    // מאפשר בחירה נוסף של הכפתורים
    chooseXButton.disabled = false;
    chooseOButton.disabled = false;

    // מנטרל את כפתור הריסט
    resetGameButton.disabled = true;

    // מנקה את המסך
    divs.forEach(div => {
        div.innerHTML = '';
        div.classList.remove('bg', 'dirty');
    });

    // ריסט למשחק
    isX = true;
    winner = undefined;
    winnerArray = undefined;
    gameFinished = false;
}