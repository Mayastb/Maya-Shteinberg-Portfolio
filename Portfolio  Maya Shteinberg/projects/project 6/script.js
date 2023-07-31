const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const operatorElement = document.getElementById('operator');
const answerInput = document.getElementById('answer');
const resultElement = document.querySelector('.result');

let selectedOperator = '+'; // הגדרת סימןן חיבור כדיפולטיבי

// פונקציה שמפיקה מספר אקראי
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// פונקציה שמציגה מספר אקראי על המסך
function setRandomNumbers() {
    const randomNumber1 = getRandomNumber(1, 10);
    const randomNumber2 = getRandomNumber(1, 10);

    num1Element.textContent = randomNumber1;
    num2Element.textContent = randomNumber2;
}

// פונקציה שמציגה סימן חשבון אקראית
function selectOperator(operator) {
    selectedOperator = operator;
    operatorElement.textContent = operator; 
}

// פונקציה שבודקת אם התשובה נכונה
function checkAnswer() {
    const num1 = parseInt(num1Element.textContent, 10);
    const num2 = parseInt(num2Element.textContent, 10);
    const userAnswer = parseInt(answerInput.value, 10);

    // הגרלת פעולה חשבונית
    let correctAnswer;
    let operator;
    switch (selectedOperator) {
        case '+':
            operator = '+';
            correctAnswer = num1 + num2;
            break;
        case '-':
            operator = '-';
            correctAnswer = num1 - num2;
            break;
        case '*':
            operator = '×';
            correctAnswer = num1 * num2;
            break;
        default:
            break;
    }

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'כל הכבוד! תשובה נכונה';
    } else {
        resultElement.textContent = `התשובה הנכונה היא: ${correctAnswer} = ${num2} ${operator} ${num1}.`;
    }

    setRandomNumbers(); 
}
// מתחיל את הדף עם מספרים אקראיים
setRandomNumbers();
