// ❓DESCRIPTION
// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task:
// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name



// ⚙️ TESTS
// assert.strictEqual(duckDuckGoose(players, 1), "a");
// assert.strictEqual(duckDuckGoose(players, 3), "c");
// assert.strictEqual(duckDuckGoose(players, 10), "z");
// assert.strictEqual(duckDuckGoose(players, 20), "z");
// assert.strictEqual(duckDuckGoose(players, 30), "z");
// assert.strictEqual(duckDuckGoose(players, 18), "g");
// assert.strictEqual(duckDuckGoose(players, 28), "g");
// assert.strictEqual(duckDuckGoose(players, 12), "b");
// assert.strictEqual(duckDuckGoose(players, 2), "b");
// assert.strictEqual(duckDuckGoose(players, 7), "f");



// ✅ SOLUTION
function duckDuckGoose(players, position) {
    // Calculate the index of the chosen player
    const i = (position - 1) % players.length; // position - 1 to convert to 0-based index
    return players[i].name; // Return the name of the chosen player
}

// Example usage:
const players = [
    { name: 'a' },
    { name: 'b' },
    { name: 'c' },
    { name: 'd' }
];

console.log(duckDuckGoose(players, 1));  // Output: 'a'
console.log(duckDuckGoose(players, 5));  // Output: 'a'
console.log(duckDuckGoose(players, 4));  // Output: 'd'