// ❓DESCRIPTION
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


// ⚙️ TESTS
// Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
// Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
// Test.assertEquals(rps('paper', 'rock'), getMsg(1));
// Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
// Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
// Test.assertEquals(rps('rock', 'paper'), getMsg(2));
// Test.assertEquals(rps('rock', 'rock'), 'Draw!');
// Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
// Test.assertEquals(rps('paper', 'paper'), 'Draw!');


// ✅ SOLUTION
// OPTION 1
const rps = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!';
    } else if (
        (p1 === 'scissors' && p2 === 'paper') ||
        (p1 === 'paper' && p2 === 'rock') ||
        (p1 === 'rock' && p2 === 'scissors')
    ) {
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
}


// OPTION 2
const rps2 = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!';
    }

    switch (p1) {
        case 'rock':
            return (p2 === 'scissors') ? 'Player 1 won!' : 'Player 2 won!';
        case 'paper':
            return (p2 === 'rock') ? 'Player 1 won!' : 'Player 2 won!';
        case 'scissors':
            return (p2 === 'paper') ? 'Player 1 won!' : 'Player 2 won!';
        default:
            return 'Invalid input';
    }
}


// ✅ Checking
console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));
console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'paper'));
console.log(rps('rock', 'rock'));
console.log(rps('scissors', 'scissors'));
console.log(rps('paper', 'paper'));

console.log(rps2('rock', 'scissors'));
console.log(rps2('scissors', 'paper'));
console.log(rps2('paper', 'rock'));
console.log(rps2('scissors', 'rock'));
console.log(rps2('paper', 'scissors'));
console.log(rps2('rock', 'paper'));
console.log(rps2('rock', 'rock'));
console.log(rps2('scissors', 'scissors'));
console.log(rps2('paper', 'paper'));