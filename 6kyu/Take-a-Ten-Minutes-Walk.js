// ❓DESCRIPTION
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// ⚙️ TESTS
// assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// assert.isFalse(isValidWalk(['w']), 'should return false');
// assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');


// ✅ SOLUTION
const isValidWalk = walk => {
    if (walk.length !== 10) {
        return false;
    }

    let northCount = 0;
    let southCount = 0;
    let eastCount = 0;
    let westCount = 0;

    for (const way of walk) {
        if (way === 'n') {
            northCount++;
        } else if (way === 's') {
            southCount++;
        } else if (way === 'e') {
            eastCount++;
        } else if (way === 'w') {
            westCount++;
        }
    }
    return northCount === southCount && eastCount === westCount;
}


// ✅ Checking
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));