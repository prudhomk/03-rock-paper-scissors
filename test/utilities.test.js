// IMPORT MODULES under test here:
import { checkHand } from './utilities.js';

const test = QUnit.test;

test('if rock is compared to paper', (expect) => {
   
    const rock = 'Rock';
    const paper = 'Paper';
    expect.equal(checkHand(rock, paper), 'Loss', 'Paper beats rock');
});

test('if Scissors is compared to Paper', (expect) => {
    
    const scissors = 'Scissors';
    const paper = 'Paper';
    expect.equal(checkHand(scissors, paper), 'Win', 'Scissors beats paper');
});

test('if rock is compared to scissors', (expect) => {
   
    const rock = 'Rock';
    const scissors = 'Scissors';
    
    expect.equal(checkHand(rock, scissors), 'Win', 'Scissors beats rock');
});




test('if rock is compared to rock', (expect) => {
   
    const rock = 'Rock';
    
    expect.equal(checkHand(rock, rock), 'Draw', 'Rock ties rock');
});
