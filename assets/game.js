/* Establish an array of words */

var words = [
    "cooper",
    "laura",
    "trees",
    "diane",
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
console.log(guessString)
;
/*remainingGuesses is set to 10, the number of guesses the player gets for each word */

var remainingGuesses = 10;

/* Players guesses are recognized */

document.onkeyup = function(event) {
    var choice = event.key;

    console.log(choice);

/* Check to see if the choice is the same as any of the letters in the word */
    for (i = 0; i < word.length; i++) {
        if (word[i] === choice) {
            letterArray[i] = choice;
        } 
    }

    document.getElementById("wordInPlay").innerHTML = letterArray.join(" ");
} 

/*If choice is NOT the same as any of the letters in the word */

if (choice !== word[i]) {

}




//if (remainingGuesses > 10) {



