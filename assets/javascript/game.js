// // Funny confirm intro

// var game = confirm("Do you want to play a game!");
// if (game) {
//   alert("Get Ready To Lose!");
// } else {
//   alert("TO LATE TO TURN BACK NOW!!!");
// }

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
var loses = 0;
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

  for (var i = 0; i < blankLetters; i++){
      letterSpots.push("_");
  }
  console.log(letterSpots);
}
