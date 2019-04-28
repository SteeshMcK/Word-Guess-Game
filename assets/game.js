/* Establish an array of words */

var words = [
    "cooper",
    "laura",
    "trees",
    "pie",
    "coffee",
    "bob"
];

/* randomly choose a word from the array */

var word = words[Math.floor(Math.random() * words.length)];

console.log(word);


/* Create an array of blanks for the chosen word. */
var letterArray = [];
var i;
for (i = 0; i < word.length; i++) {
    letterArray[i] = "_";
}
console.log(letterArray);

/*string the blanks together */

var letterString = letterArray.join(" ");
document.getElementById("wordInPlay").innerHTML = letterString;

console.log(letterString);

/* Create an array of blanks for mistakes */
var wrongGuess = [];
console.log(wrongGuess);

/* string the blanks together */

var guessString= wrongGuess.join(" ");
console.log(guessString);

/*remainingGuesses is set to 10, the number of guesses the player gets for each word. 
The length of the word chosen is set to wordLength. A variable (win) is established and 
given the value of the length of the word*/

var remainingGuesses = 10;
var wordLength = word.length;
var win = wordLength;


/* Players guesses are recognized */
document.onkeyup = function(event) {
    var choice = event.key;

    console.log("checking for word", word.includes(choice));

/* Check to see if the choice is the same as any of the letters in the word */

if (word.includes(choice) == true) {
  letterArray[i] = choice;
} else {
  wrongGuess.push(choice); //push works for filling an empty array
  remainingGuesses--;
}

document.getElementById("wordInPlay").innerHTML = letterArray.join(" ");    
document.getElementById("lettersGuessed").innerHTML = wrongGuess.join(" ");
document.getElementById("guessesLeft").innerHTML = remainingGuesses;


}


/*Check to see if choice is NOT the same as any of the letters in the word */

       /* if (word[i] != choice) {
            wrongGuess[i] = choice;
        }


    document.getElementById("lettersGuessed").innerHTML = wrongGuess.join(" ");
    remainingGuesses--;
    document.getElementById("guessesLeft").innerHTML = remainingGuesses;

    }

//if (remainingGuesses > 10) {*/


/*sound control */

var x = document.getElementById("laurasTheme"); 

function playAudio() { 
  x.play(); 
} 

