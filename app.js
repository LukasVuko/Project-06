// Get the element with the ID of qwerty and save it to a variable.
const qwerty = document.getElementById("qwert");
// Get the element with the ID of phrase and save it to a variable.
const phrase = document.getElementById("phrase");
// Create a missed variable, initialized to 0
let missed = 0;
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
// Once loop runs, counter is used to determine where function returns the letter, or null

function checkLetter(button) {
  const letter = document.getElementsByClassName("letter");
  let counter = 0;
  for (let i = 0; i < letter.length; i += 1) {
    if (
      letter[i].textContent.toLowerCase() === button.textContent.toLowerCase()
    ) {
      letter[i].className += " show";
    } else {
      counter += 1;
    }
  }
  if (counter === letter.length) {
    return null;
  } else {
    let lowerCaseReturn = button.textContent.toLowerCase();
    return lowerCaseReturn;
  }
}

// Add an event listener to the keyboard
const keyboard = document.getElementById("qwerty");

keyboard.addEventListener("click", e => {
  let buttonClick = e.target;
  if (buttonClick.tagName === "BUTTON") {
    buttonClick.className = "chosen";
    buttonClick.disabled = true;
    let letterFound = checkLetter(buttonClick);
    if (letterFound === null) {
      missed += 1;
      let trie0 = document.getElementsByClassName("tries")[0];
      let ol = trie0.parentElement;
      ol.removeChild(trie0);
    }
    checkWin();
  }
});

function checkWin() {
  const show = document.getElementsByClassName("show");
  const showCount = show.length;
  const letters = document.getElementsByClassName("letter");
  const lettersCount = letters.length;
  if (showCount === lettersCount) {
    overlay.className = "win";
    const win = document.createElement("span");
    win.textContent = "You won!";
    overlay.appendChild(win);
    overlay.style.display = "";
  } else if (missed >= 5) {
    overlay.className = "lose";
    const loss = document.createElement("span");
    loss.textContent = "You lost!";
    overlay.appendChild(loss);
    overlay.style.display = "";
  }
}
