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
    handleInteraction() {
        /*
        let keyBoard = document.querySelector('#qwerty');
        keyBoard.addEventListener('click', (e) => {
            let selectedKey = e.target; 
        }); 
        */
    };
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        let letters = document.querySelectorAll('#phrase li'); 
        let winBoolean = true; 
        
        letters.forEach(letter => {
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
        if (this.missed === 5) {
            this.gameOver(false); 
        } else {
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
        let overlay = document.querySelector('#overlay');
        overlay.style.display = "block";
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

}