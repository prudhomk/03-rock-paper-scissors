export function checkHand(userHand, compHand) {
    if (userHand === 1 && compHand === 2) return 1;
    if (userHand === 2 && compHand === 3) return 2;
    if (userHand === 3 && compHand === 1) return 3;
    if (userHand === compHand) return 4;
    if (userHand === 2 && compHand === 1) return 5;
    if (userHand === 3 && compHand === 2) return 6;
    if (userHand === 1 && compHand === 3) return 7;
}




export function roshambo() {
    const randomNum = Number(Math.ceil(Math.random) * 3);
    //Scissors
    if (randomNum === 3) {
        let compHand = 3;
    }
    //Paper
    if (randomNum === 2) {
        let compHand = 2;
    }
    //Rock
    if (randomNum === 1) {
        let compHand = 1;
    }

}