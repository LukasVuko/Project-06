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
  addPhraseToDisplay(phrases);
});

// Create a phrases array that contains at least 5 different phrases as strings.

const phrases = [
  "Hotdogs are sandwiches",
  "Poptarts are ravioli",
  "No pain no gain",
  "Supercalifragilisticexpialidocious",
  "My name is Jeff"
];

// Create a getRandomPhraseAsArray function
// The phrases array created in the previous step will be passed to this function
// Step 1: Get a random phrase from the phrases array
// Step 2: Split the random phrase into an array of separate strings

function getRandomPhraseAsArray(arr) {
  const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  const split = randomPhrase.split(""); // Returns ["Hotdogs", "are", "sandwiches"]
  return split;
}

// Set the game display

function addPhraseToDisplay(arr) {
  const array = getRandomPhraseAsArray(arr);
  const ul = document.querySelector("#phrase ul");
  for (let i = 0; i < array.length; i += 1) {
    let add = array[i];
    let addLi = document.createElement("li");
    if (add !== " ") {
      addLi.className = "letter";
    } else {
      addLi.className = "space";
    }
    addLi.textContent = add;
    ul.appendChild(addLi);
  }
}

// Create a checkLetter function
// Loops through alphabet list items, if leter matches the letter clicked, class 'show' is added to letter

function checkLetter(clicked) {
  const letter = document.getElementsByClassName("letter");
  for (let i = 0; i < letter.length; i += 1) {
    if (
      letter[i].textContent.toUpperCase() === clicked.textContent.toUpperCase()
    ) {
      letter[i].className += " show";
      return clicked.textContent;
    } else {
      return null;
    }
  }
}

// Add an event listener to the keyboard

const log = document.getElementById("qwerty");

log.addEventListener("click", e => {
  let clicked = e.target;
  if (clicked.tagName === "BUTTON") {
    console.log(clicked);
    clicked.className = "chosen";
    clicked.disabled = true;
    checkLetter(clicked);
  }
});
