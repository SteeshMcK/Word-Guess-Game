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
for (var i = 0; i < word.length; i++) {
    letterArray[i] = "_";
}
console.log(letterArray);

var letterString = letterArray.join(" ");
document.getElementById("wordInPlay").innerHTML = letterString;

 /* remainingLetters is set to the length of the chosen word. This will help keep 
track of how many letters are left to be guessed */

var remainingLetters = word.length;
console.log(remainingLetters);

while (remainingLetters > 0) {
    document.onkeyup = function(event) {
        if {

        }

}

}

    
