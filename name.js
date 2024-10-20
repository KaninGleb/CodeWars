// ❓DESCRIPTION
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.


// ⚙️ TESTS
// assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
// assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");


// ✅ SOLUTION
function areYouPlayingBanjo(name) {
    // Option 1
    if (name[0] === 'R' || name[0] === 'r') {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
    return name;

    // Option 2
    // return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}