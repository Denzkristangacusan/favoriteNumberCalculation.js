
const favoriteNumber = 8; 

let userGuess = null;

while (userGuess !== favoriteNumber) {
    
    userGuess = parseInt(prompt("Guess the favorite number:"));

    if (userGuess > favoriteNumber) {
        console.log("Too high, try again!");
    } else if (userGuess < favoriteNumber) {
        console.log("Too low, try again!");
    } else if (userGuess === favoriteNumber) {
        console.log("Correct! You've guessed the favorite number.");
    } else {
        console.log("Please enter a valid number.");
    }
}
