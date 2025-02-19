// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Check the guess
function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const resultMessage = document.getElementById("resultMessage");
    const attemptsDisplay = document.getElementById("attempts");
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess)) {
        resultMessage.textContent = "Please enter a valid number!";
        return;
    }

    attempts++; // Increment attempt count
    attemptsDisplay.textContent = attempts;

    // Compare the guess with the random number
    if (userGuess < randomNumber) {
        resultMessage.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = "Too high! Try again.";
    } else {
        resultMessage.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
    }

    guessInput.value = ""; // Clear input field
}