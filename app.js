// import functions and grab DOM elements
import { checkHand, roshambo } from './test/utilities.js';
const button = document.getElementById('shoot');
const resetButton = document.getElementById('reset');
const totalGames = document.getElementById('total-games');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');


// initialize state
let total = 0;
let win = 0;
let loss = 0;
let draw = 0;
totalGames.textContent = total.value;

button.addEventListener('click', () => {
    
    let compHand = Number(Math.ceil(Math.random() * 3));
    
    total++;

    const radioPick = document.querySelector('input:checked');
    const userHand = radioPick.value;
    compHand = roshambo(compHand);
    const winOrLose = checkHand(userHand, compHand);
    
    switch (winOrLose) {
        case 'Loss':
            totalGames.textContent = total;
            loss++;
            losses.textContent = loss;
            break;
        case 'Win':
            totalGames.textContent = total;
            win++;
            wins.textContent = win;
            break;
        case 'Draw':
            totalGames.textContent = total;
            draw++;
            draws.textContent = draw;
            break;
        default:
            totalGames.textcontent = total;
            break;
       
    }




});
// set event listeners to update state and DOM
resetButton.addEventListener('click', () => {
    win = 0;
    total = 0;
    loss = 0;
    draw = 0;
    wins.textContent = 0;
    draws.textContent = 0;
    losses.textcontent = 0;
    totalGames.textContent = 0;
}); 