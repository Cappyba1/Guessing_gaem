// Pick a random number between 1 and 100
 let secretNumber = Math.floor(Math.random() * 100) + 1;
function resetGame(){
    secretNumber = Math.floor(Math.random() * 100) + 1;
 console.log("Prashand Kalo Xa");
}

// Function to check the guess
function checkGuess() {
    // Get the user's guess from the input box
    let userGuess = document.getElementById("guessInput").value;
    userGuess = Number(userGuess); // Convert it to a number (input gives text)

    // Get the message paragraph to update it
    let message = document.getElementById("message");

    // Check the guess and update the message
    if (userGuess < 1 || userGuess > 100) {
        message.innerHTML = "Pick a number between 1 and 100, dumbass!";
    } else if (userGuess < secretNumber) {
        message.innerHTML = "Too low! Try again.";
    } else if (userGuess > secretNumber) {
        message.innerHTML = "Too high! Try again.";
    } else if (userGuess == secretNumber) {
        message.innerHTML = "You got it! Nice one!";
    }
}
