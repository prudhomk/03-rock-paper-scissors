## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


Plan:
Play Rock Paper Scissors

State: computers choice, wins, game total
Derived: Player choice

Set rock paper scissor to values (math.random.ceil (1-3));
use switch statement to cycle value comparison;

only equals case would be draws, all other values are either greater than or less than

Have two buttons: Shoot!  and Reset All
Keep track of wins/total games (which derives losses)
Use radio input for rock paper scissors (and use images)

There should be 9 tests (not counting draws);
-Could refactor down to 6, but might be less readable

