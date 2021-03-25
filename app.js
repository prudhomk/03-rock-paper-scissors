// import functions and grab DOM elements
import { checkHand, roshambo } from './test/utilities.js';
const userHand = document.querySelector('input');
const button = document.getElementById('shoot');
const resetButton = document.getElementById('reset');
const totalGames = document.getElementById('total-games');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');

console.log(compHand);
// initialize state
let total = 0;
let win = 0;
let loss = 0;
let draw = 0;

button.addEventListener('click', () => {
    
    roshambo(compHand);

    switch (checkHand(userHand, compHand)) {
        case 1:
            totalGames.textContent = total.value;
            loss++;
            losses.textContent = loss.value;
            break;
        case 2:
            totalGames.textContent = total.value;
            loss++;
            losses.textContent = loss.value;
            break;
        case 3:
            totalGames.textContent = total.value;
            loss++;
            losses.textContent = loss.value;
            break;
        case 4:
            totalGames.textContent = total.value;
            draw++;
            draws.textContent = draw.value;
            break;
        case 5:
            totalGames.textContent = total.value;
            win++;
            wins.textContent = win.value
            break;
        case 6:
            totalGames.textContent = total.value;
            break;
        case 7:
            totalGames.textContent = total.value;
            break;
    }




});
// set event listeners to update state and DOM
resetButton.addEventListener('click', () => {

});