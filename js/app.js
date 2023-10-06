/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let startButton = document.querySelector("#btn__reset"); 
let game; 
startButton.addEventListener('click', () => {
    game = new Game(); 
    game.resetGame()
    game.startGame(); 
});

let keys = document.querySelector("#qwerty"); 
keys.addEventListener('click', (e) => {
    let key = e.target; 
    if (key.tagName === 'BUTTON') {
        game.handleInteraction(key);
    }
     
}); 