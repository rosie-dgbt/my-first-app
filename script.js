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
