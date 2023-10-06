/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0; 
        this.phrases = [new Phrase("How are you"), new Phrase("I like pasta"), 
        new Phrase("Taco Tuesday"), new Phrase("Good afternoon"), new Phrase("Mac and Cheese")]; 
        this.activePhrase = 'null'; 

    };
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.querySelector('#overlay').style.display = "none";
        this.activePhrase = this.getRandomPhrase(); 
        this.activePhrase.addPhraseToDisplay();

    };
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        let letterButton = button.textContent; 
        let isLetterInWord = this.activePhrase.checkLetter(letterButton);
        button.disabled = true;
        if (isLetterInWord) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letterButton); 
            if (this.checkForWin()) {
                this.gameOver(true); 
            }
        } else {
            button.classList.add('wrong'); 
            this.removeLife(); 
        }
        
    };
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        let letters = document.querySelectorAll('#phrase li'); 
        let winBoolean = true; 
        // converts nodelist to array then filters array to remove space elements 
        let removeSpaceElements = Array.from(letters)
        .filter(space => !space.classList.contains('space')); 
        // checks if all letter elements are shown 
        removeSpaceElements.forEach(letter => {
            if (!letter.classList.contains('show')) {
                winBoolean = false; 
            }
        });
        return winBoolean;  
    };
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        let hearts; 
        // checks if user lost 4 lives and ends game 
        if (this.missed === 4) {
            this.gameOver(false); 
        } else {
            // updates missed score and replaces live heart image with a lost heart image 
            this.missed++; 
            hearts = Array.from(document.querySelectorAll("li img")); 
            let liveHearts = hearts.filter(heart => {
                return heart.src.includes('liveHeart.png');  
            }); 
            liveHearts[liveHearts.length - 1].src = "images/lostHeart.png";
        }
    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        // displays the overlay 
        let overlay = document.querySelector('#overlay');
        overlay.style.display = "block";
        // adds win/lose message to overlay 
        if (gameWon) {  
            overlay.classList.remove('start');
            overlay.classList.add('win');  
            document.querySelector('#game-over-message').textContent = 'Great job!';
        } else {
            overlay.classList.remove('start');
            overlay.classList.add('lose');  
            document.querySelector('#game-over-message').textContent = 'Sorry, better luck next time!';
        }
    }; 
    /**
     * Removes all the 'li' elements from the previous game, enables all 
     * keyboard buttons, and resets the heart images. 
     */
    resetGame() {
        // resets the phrase letters on the screen 
        let resetLetters = document.querySelector('#phrase ul'); 
        resetLetters.innerHTML = ''; 

        // enables the keys on the screen 
        let resetButtons = document.querySelectorAll('.key');
        resetButtons.forEach(button => {
            button.className = '';
            button.className = 'key'; 
            button.disabled = false;
            //return button; 
        });  

        // changes lost hearts to live hearts 
        let hearts = document.querySelectorAll("li img");
        hearts.forEach(heart => {
            let liveHearts = heart.src.includes('liveHeart.png'); 
            if (!liveHearts) {
                heart.src = 'images/liveHeart.png'; 
            }
            //return heart;
        }); 

        // updates the overlap to start 
        let overlay = document.querySelector('#overlay');
        overlay.className = '';
        overlay.classList.add('start'); 

    };

}