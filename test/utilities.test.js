// IMPORT MODULES under test here:
import { checkHand } from './utilities.js';

const test = QUnit.test;

test('if rock is compared to paper', (expect) => {
   
    const rock = 1;
    const paper = 2;
    expect.equal(checkHand(rock, paper), -1, 'Paper beats rock');
});

test('if Scissors is compared to Paper', (expect) => {
    
    const scissors = 3;
    const paper = 2;
    expect.equal(checkHand(scissors, paper), 1, 'Scissors beats paper');
});

test('if rock is compared to scissors', (expect) => {
   
    const rock = 1;
    const scissors = 3;
    
    expect.equal(checkHand(rock, scissors), -1, 'Scissors beats rock');
});




test('if rock is compared to rock', (expect) => {
   
    const rock = 1;
    
    expect.equal(checkHand(rock, rock), 0, 'Rock ties rock');
});
