/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); 
    };
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let phraseDiv = document.querySelector('#phrase ul');
        let phraseArray = this.phrase.split(''); 
        let html = ``; 
        
        phraseArray.forEach(letter => {
            if (letter !== ' '){
                html += `<li class="hide letter ${letter}">${letter}</li>`; 
            } else {
                html += `<li class="space"> </li>`;
            }
        });  
        phraseDiv.insertAdjacentHTML("beforeend", html); 
        
    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter); 
    };
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        let selectedLetters = document.querySelectorAll(`.${letter}`);
        selectedLetters.forEach(letter => {
            letter.classList.remove('hide'); 
            letter.classList.add('show'); 
        }); 
        
    };
}