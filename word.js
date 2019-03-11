///constructor Word that depends on the Letter constructor
///requires the file Letter.js
var Letter = require("./Letter.js");
/// requires inquirer to ask what letter the user wants to guess
// var inquirer = require("inquirer");
//creates an object representing the current word the user is guessing
///defines:
    ///an array of new Letter objects representing the letters in the word
    ///function that returns a string of the word,
        ///should call the function on each letter object defined in letter.js 
        //that displays the character or underscore and concatentate those together
    ///function that takes a character as an argument and calls the guess function on each letter
        //the second funciton defined in letter.js

var wordsArray = ["california", "nevada"];

function Word(word) {
    this.lettersArray = [];
    var splitArray = word.split("");
    for (var i = 0; i < splitArray.length; i++) {
        this.lettersArray.push(new Letter(splitArray[i]))
    }
    console.log(this.lettersArray);
} 
Word.prototype.guessLetter(char) {
    var flag = false;
    for (var i = 0; i < this.lettersArray.length; i++) {
        if (this.lettersArray[i].guess(char)) {
            flag = true;
        }
    }
}

var cal = new Word(wordsArray[0]);

Word.prototype.solution() {
    return this.lettersArray.map(function(letter){
        return letter.solution();

    }).join(" ");
    //where the Letter.prototype.toString is called 
}