/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let startButton = document.querySelector("#btn__reset"); 
let game; 
startButton.addEventListener('click', () => {
    game = new Game(); 
    game.startGame(); 
});
