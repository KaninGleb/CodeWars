// ❓DESCRIPTION
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


// ⚙️ TESTS
// Test.assertDeepEquals(towerBuilder(1), ["*"]);
// Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
// Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);


// ✅ SOLUTION
function towerBuilder(nFloors) {
    const tower = [];

    for (let i = 1; i <= nFloors; i++) {
        const spaces = ' '.repeat(nFloors - i);
        const stars = '*'.repeat(2 * i - 1);

        tower.push(spaces + stars + spaces);
    }
    return tower;
}


// ✅ Checking
console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(6));
console.log(towerBuilder(10));