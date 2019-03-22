// Get the element with the ID of qwerty and save it to a variable.
const qwerty = document.getElementById("qwert");
// Get the element with the ID of phrase and save it to a variable.
const phrase = document.getElementById("phrase");
// Create a missed variable, initialized to 0
const missed = 0;
// Attach a event listener to the “Start Game” button to hide the start screen overlay
const overlay = document.getElementById("overlay");
const buttonStart = document.getElementsByClassName("btn__reset")[0];

buttonStart.addEventListener("click", () => {
  overlay.style.display = "none";
});
