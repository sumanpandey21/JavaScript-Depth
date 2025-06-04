
let randomNumber = Math.floor(Math.random() * 100) + 1;

const form = document.querySelector("form");
const inputNumber = document.querySelector("#number");
const displayMsg = document.querySelector(".display-message");
const previousGuessSlot = document.querySelector(".prev-guess span");
const results = document.querySelector(".result");
const remainingGuess = document.querySelector(".guess-count")
const submitBtn = document.querySelector(".submit");
const startOver = document.querySelector(".start-over");

let playGame = true;
let p = document.createElement("p");
let counter = 0;
let prevGuess = [];

if (playGame) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const guessNumber = inputNumber.value;
        validateNumber(guessNumber);

    })
}


function validateNumber(guessNumber) {
    inputNumber.value = ''
    if (isNaN(guessNumber))
        alert("Please enter valid number.");
    else if (guessNumber < 1)
        alert("Please enter a number more than 1.")
    else if (guessNumber > 100)
        alert("Please enter a number less than 100.")
    else {
        prevGuess.push(guessNumber);
        if (counter >= 9) {
            displayGuess(guessNumber);
            displayMessage(`Game Over!,Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guessNumber);
            checkGuess(guessNumber);
        }
    }

}

function checkGuess(guessNumber) {
    if (guessNumber == randomNumber) {
        displayMessage(`You guessed right`);
        endGame();
    } else if (guessNumber < randomNumber) {
        displayMessage("Number is too low.")
    }
    else if (guessNumber > randomNumber) {
        displayMessage("Number is too high.")
    }
}

function displayGuess(guessNumber) {
    inputNumber.value = ''
    previousGuessSlot.innerHTML += `${guessNumber}, `;
    counter++;
    remainingGuess.innerHTML = `${10 - counter}`
    console.log(counter);


}

function displayMessage(messgae) {
    displayMsg.innerHTML = messgae;
}

function endGame() {
    inputNumber.value = ''
    inputNumber.setAttribute('disabled', '');
    submitBtn.setAttribute('disabled', '');
    p.classList.add('button');
    p.classList.add('newgameBtn');
    p.innerHTML = `<h2 id="newGame">Start new game.</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function (e) {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuess = []
        counter = 0;
        previousGuessSlot.innerHTML = ''
        remainingGuess.innerHTML = `${10 - counter}`
        inputNumber.removeAttribute('disabled')
        submitBtn.removeAttribute('disabled')
        startOver.removeChild(p);
        displayMsg.innerHTML = '';
        playGame = true;
    })
}
console.log(randomNumber);
