// FUNCTION: 
// Switches from the main screen to the game screen when clicked.
function startGame() {
  // Select the main screen and add the hidden class
  let mainScreen = document.getElementById("main-screen");
  mainScreen.classList.add("hidden");

  // Select the game screen and remove the hidden class
  let gameScreen = document.getElementById("game-screen");
  gameScreen.classList.remove("hidden");
}


// FEATURE 5: CHECK GUESS FUNCTION
function checkGuess() {
  // 1. Get the player's guess from the input box
  let userGuess = document.getElementById("user-guess").value;
  
  // 2. Get the feedback paragraph element
  let feedbackText = document.getElementById("feedback");

  // 3. Check if the guess matches the secret school object (e.g., "pencil")
  if (userGuess.toLowerCase() === "pencil") {
    feedbackText.textContent = "Correct! It is a pencil! 🎉";
  } else {
    feedbackText.textContent = "Not quite! Try again! ❌";
  }
}


// FEATURE 5: RESET GAME FUNCTION
function resetGame() {
  // Clear the input box and feedback text
  document.getElementById("user-guess").value = "";
  document.getElementById("feedback").textContent = "";

  // Hide the game screen
  let gameScreen = document.getElementById("game-screen");
  gameScreen.classList.add("hidden");

  // Show the main screen
  let mainScreen = document.getElementById("main-screen");
  mainScreen.classList.remove("hidden");
}