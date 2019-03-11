/// requries no other files
/// make a constructor called Letter
function Letter(character) {
    ///a string value to store the undelying character for the letter
    this.character = character;

    ///boolean whether the letter has been guessed
    this.visible = false;
    
    ///function that returns the letter guessed or placeholder if not guessed
    this.toString = function() {
        if(this.visible === true) {
            return this.character;
        } else {
            return "_";
        }
    }
    //function that checks the letter(as an arg) and updating the stored boolean if correctly guessed

/// display blank placeholder 

Letter.prototype.guess = function(charGuess) {
    if (charGuess === this.character) {
        this.visible = true;
        return true;
    }
    return false;
}

//the correct character 
Letter.prototype.solution = function() {
    return this.character;
}
} 
//export constructor 
module.exports = Letter;