// // Funny confirm intro

var game = confirm("Do you want to play a game!");
if (game) {
  alert("Get Ready To Lose!");
} else {
  alert("TO LATE TO TURN BACK NOW!!!");
}

// Starting Game Var
// ===========================================================================
var gundamNames = ["Freedom", "Zaku", "WingZero", "Astray", "Sazabi", "GM", ""];
var guessedWord = "";
var lettersInGuessWord = [];
var blankLetters = 0;
var letterSpots = [];
var wrongGuesses = [];

// Counters
var wins = 0;
var losses = 0;
var guesses = 9;

// Game Functions
// ===========================================================================

// Game Start
function startGame() {
  guesses = 9;
  guessedWord = gundamNames[Math.floor(Math.random() * gundamNames.length)];
  lettersInGuessWord = guessedWord.split("");
  blankLetters = lettersInGuessWord.length;
  console.log(guessedWord);

  letterSpots = [];
  wrongGuesses = [];

  for (var i = 0; i < blankLetters; i++) {
    letterSpots.push("_");
  }
  console.log(letterSpots);

  document.getElementById("guesses-left").innerHTML = guesses;
  document.getElementById("suit-to-guess").innerHTML = blankLetters.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// Letter Input
function checkLetter(letter) {
  var letterWord = false;

  for (var i = 0; i < blankLetters; i++) {
    if (guessedWord[1] === letter) {
      letterWord = true;
    }
  }

  if (letterWord) {
    for (var j = 0; j < blankLetters; j++) {
      if (guessedWord[j] === letter) {
        letterSpots[j] = letter;
      }
    }
    console.log(letterSpots);
  } else {
    wrongGuesses.push(letter);
    guesses--;
  }
}

function newRound() {
  console.log("Wins: " + wins);
  console.log("Loss: " + losses);
  console.log("Guesses: " + wrongGuesses);

  document.getElementById("guesses-left").innerHTML = guesses;
  document.getElementById("suit-to-guess").innerHTML = letterSpots.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (lettersInGuessWord.toString() === letterSpots.toString()) {
    wins++;
    alert("You Win!");

    document.getElementById("win-count").innerHTML = wins;
    startGame();
  } else if (guesses === 0) {
    losses++;
    alert("You lose");

    document.getElementById("lose-count").innerHTML = losses;
    startGame();
  }
}

startGame();

document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    var letterGuessed = event.key.toLowerCase();
    checkLetter(letterGuessed);
    newRound();
  }
};
