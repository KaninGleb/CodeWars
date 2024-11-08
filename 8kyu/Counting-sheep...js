// ❓DESCRIPTION
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example:
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined


// ⚙️ TESTS
// assert.strictEqual(countSheeps(sheep), expected);


// ✅ SOLUTION
// OPTION 1
function countSheeps(sheep) {
    let counter = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === 'null' || sheep[i] === 'undefined') {
            continue;
        } else if (sheep[i] === true) {
            counter += 1;
        } else {
            counter = counter;
        }
    }
    return counter;
}


// OPTION 2
function countSheeps(sheep) {
    let counter = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            counter += 1;
        }
    }
    return counter;
}


// ✅ Checking
const sheeps = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, null, false,
    true, true, true, undefined,
    true, true, false, false,
    true, true
];


console.log(countSheeps(sheeps));