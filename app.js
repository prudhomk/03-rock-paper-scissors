// import functions and grab DOM elements
import { checkHand, compVisual, roshambo } from './test/utilities.js';
const button = document.getElementById('shoot');
const resetButton = document.getElementById('reset');
const totalGames = document.getElementById('total-games');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');
const resetDisplay = document.getElementById('resets');
const compImage = document.getElementById('compImage');
const chat = document.getElementById('chat');

// initialize state
let total = 0;
let win = 0;
let loss = 0;
let draw = 0;
let resets = 0;
console.log(resetDisplay, resets);
button.addEventListener('click', () => {
    compImage.style.display = 'block';
    let compHand = Number(Math.ceil(Math.random() * 3));
    total++;

    const radioPick = document.querySelector('input:checked');
    const userHand = radioPick.value;
    compHand = roshambo(compHand);
    const winOrLose = checkHand(userHand, compHand);
    
    compVisual(compHand, compImage);
    
    const quips = ['Come back in ten years, kid!', 'Try guessing correctly!', 'You can never defeat me!'];
    const excuses = ['You got lucky, punk!', 'The sun was in my eyes!', 'You cheated!', 'Best two out of three!', 'This round never happened.']; 
    const randomQuip = quips[Math.floor(Math.random() * quips.length)];
    const randomExcuse = excuses[Math.floor(Math.random() * quips.length)];


    switch (winOrLose) {
        case 'Loss':
            totalGames.textContent = total;
            loss++;
            losses.textContent = loss;  
            chat.textContent = randomQuip;
            break;
        case 'Win':
            totalGames.textContent = total;
            win++;
            wins.textContent = win;
            chat.textContent = randomExcuse;
            break;
        case 'Draw':
            totalGames.textContent = total;
            draw++;
            draws.textContent = draw;
            chat.textContent = 'There are no draws, only delayed defeats.';
            break;
        default:
            totalGames.textcontent = total;
            break;
       
    }
});

// set event listeners to update state and DOM
resetButton.addEventListener('click', () => {
    compImage.style.display = 'none';
    resets++;
    console.log(resetDisplay, resets);
    win = 0;
    total = 0;
    loss = 0;
    draw = 0;
    wins.textContent = 0;
    draws.textContent = 0;
    losses.textContent = 0;
    totalGames.textContent = 0;
    resetDisplay.textContent = resets;
    chat.textContent = 'I remember all our games, nice try though!';
}); 