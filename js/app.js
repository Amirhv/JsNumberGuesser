// GAME FUNCTION :
// 1 : Player must guess a number between min and max number
// 2 : Player gets a certain amount of guesses
// 3 : Notify player of guesses remaining
// 4 : Notify plater the correct aswer if loose
// 5 : Let player to play again

let min = 1;
let max = 10;
let winningNumber = 5;
let guessAmount = 3;

// Ui Elements
const UiGame = document.querySelector("#game");
const UiMinNumber = document.querySelector("#min-num");
const UiMaxNumber = document.querySelector("#max-num");
const UiGuessInput = document.querySelector("#guess-input");
const UiGuessBtn = document.querySelector("#guess-btn");
const UiMessage = document.querySelector("#message");

// Setting Min And MaX Number
UiMinNumber.textContent = min;
UiMaxNumber.textContent = max;

// Play Again Event Listener
UiGame.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("play-again")) {
        window.location.reload();
        console.log("if works");
    }
    console.log("fuck");
});

UiGuessBtn.addEventListener("click", function () {
    let playerGuess = parseInt(UiGuessInput.value);

    // If Guess Is Wrong
    if (isNaN(playerGuess) || playerGuess < min || playerGuess > max) {
        showMessage(`Number must be between ${min} and ${max}`, "red");
        // Change Border Color
        UiGuessInput.style.borderColor = "red";

        UiGuessInput.value = "";
    } else {
        // If Guess Is Right
        if (playerGuess === winningNumber) {
            gameOver(true, `${playerGuess} is correct, YOU WIN!!!`);
        } else {
            guessAmount = guessAmount - 1;

            if (guessAmount == 0) {
                gameOver(false, `GAME OVER, YOU LOST, Correct answer is ${winningNumber}`);
            } else {
                // Change Boreder Color
                UiGuessInput.style.borderColor = "red";
                showMessage(`${playerGuess} is not correct, ${guessAmount} guesses left`, "red");

                UiGuessInput.value = "";
            }
        }
    }
});

// Game Over
function gameOver(won, msg) {
    let color;
    if (won == true) {
        color == "green";
    } else {
        color == "red";
    }

    // Disable Input
    UiGuessInput.disabled = true;
    // Change Boreder Color
    UiGuessInput.style.borderColor = color;

    showMessage(msg);

    // Play Again
    UiGuessBtn.value = "Play Again";
    UiGuessBtn.className += " play-again";
}

// Message
function showMessage(message, color) {
    UiMessage.textContent = message;
    UiMessage.style.color = color;
}
