// VARIABLES*******************************************************
const words = [
  "cooper",
  "laura",
  "trees",
  "pie",
  "coffee",
  "bob"
]

let word
let letterArray
let letterString
let wrongGuess
let guessString
let remainingGuesses = 10;
// let wordLength = word.length;
// let win = wordLength; Why do I need this??
const startGame = document.getElementById('main-start');

// FUNCTIONS******************************************************
const createWord = function() {
  /* choose random word from the array */
  word = words[Math.floor(Math.random() * words.length)]
  console.log (word)
  numOfDashes(word);
}

const numOfDashes = function(x) {
  /* Create an array of blanks for the chosen word. */
  letterArray = [];
  for (let i = 0; i < word.length; i++) {
      letterArray[i] = "_";
  }
  console.log(letterArray);
  wordDashes(letterArray);
}

const wordDashes = function(x) {
  /*string the blanks together */
  letterString = letterArray.join(' ');
  console.log(letterString);
  document.getElementById('main-start').innerHTML = letterString;
  return letterString
}

const wrongGuessContainer = function() {
  /* Create an array of blanks for mistakes */
  let wrongGuess = []
  console.log(wrongGuess)
  /* string the blanks together */
  guessString= wrongGuess.join(" ")
  return guessString
}

// EVENT LISTENERS
// start game
document.addEventListener('keydown', createWord);
 
// FUNCTION CALLS****************************************************************
// chooseWord()
// console.log(word)

// numOfDashes(word)
// console.log(letterArray)

// wordDashes(letterArray)
// console.log(letterString)

// wrongGuessContainer()
// console.log(guessString)

// WORK IN PROGRESS***************************************************************

/*remainingGuesses is set to 10, the number of guesses the player gets for each word. 
The length of the word chosen is set to wordLength. A variable (win) is established and 
given the value of the length of the word*/

// var remainingGuesses = 10;
// var wordLength = word.length;
// var win = wordLength;


// /* Players guesses are recognized */
// document.onkeyup = function(event) {
//     var choice = event.key;

//     console.log("checking for word", word.includes(choice));

// /* Check to see if the choice is the same as any of the letters in the word */

// if (word.includes(choice) == true) {
//   letterArray[i] = choice;
// } else {
//   wrongGuess.push(choice); //push works for filling an empty array
//   remainingGuesses--;
// }

// document.getElementById("wordInPlay").innerHTML = letterArray.join(" ");    
// document.getElementById("lettersGuessed").innerHTML = wrongGuess.join(" ");
// document.getElementById("guessesLeft").innerHTML = remainingGuesses;


// }


/*Check to see if choice is NOT the same as any of the letters in the word */

       /* if (word[i] != choice) {
            wrongGuess[i] = choice;
        }


    document.getElementById("lettersGuessed").innerHTML = wrongGuess.join(" ");
    remainingGuesses--;
    document.getElementById("guessesLeft").innerHTML = remainingGuesses;

    }

//if (remainingGuesses > 10) {*/
