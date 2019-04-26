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

var letterString = letterArray.join(" ");
document.getElementById("wordInPlay").innerHTML = letterString;

console.log(letterString);

/* remainingLetters is set to the length of the chosen word. This will help keep 
track of how many letters are left to be guessed */
/*remainingGuesses is set to 10, the number of guesses the player gets for each word */

var remainingLetters = word.length;

var remainingGuesses = 10;
console.log(remainingLetters);

document.onkeyup = function(event) {
    var choice = event.key;

    console.log(choice);

/* Check to see if the choice is the same as any of the letters in the word */

if (remainingLetters > 0) {
    for (i = 0; i < remainingLetters; i++) {
        if (remainingLetters[i] === choice)
        {
            letterArray[i] = choice;
        }
    }

    remainingGuesses--;
    document.getElementById("wordInPlay").innerHTML = letterArray.join(" ");
    document.getElementById("guessesLeft").innerHTML = remainingGuesses;
    
}

}