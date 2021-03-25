export function checkHand(userHand, roshamboHand) {
    if (userHand > roshamboHand) return 1;
    if (userHand < roshamboHand) return -1;
    if (userHand === roshamboHand) return 0;
    
}