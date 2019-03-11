////the logic file for the game
//depends on word.js
var Word = require("./Word.js");
var inquirer = require("inquirer");
//randomly selects a word and uses the Word constructor to store it

/// prompts the user for each guess and keeps track of the user's remaining guesses