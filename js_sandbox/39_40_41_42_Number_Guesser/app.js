/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets certain amount of guesses
- Notify player of guesses remaining
- Notify player of correct answer if loose
- Let player choose to play again  
 */

// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(),
    guessesLeft = 3;

// // UI Elements
// const game = document.querySelector('#game'),
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function (e) {
    let guess = parseInt(guessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter the number between ${min} and ${max}`, 'red')
    }

    // Check if won
    if (guess === winningNum) {
        // Game over - won
        gameOver(true, `${winningNum} is correct, YOU WIN`);

    } else {
        // Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

        } else {
            // Game continuous answer wrong

            // Change border red
            guessInput.style.borderColor = 'red';

            // Clear the input
            guessInput.value = '';

            // Tell user its a wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Game Over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;

    // Change border green
    guessInput.style.borderColor = color;

    // Change text color
    message.style.color = color;

    // Set message
    setMessage(msg);

    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.classList += 'play-again';
}

// Get Winning Number
function getRandomNum() {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}