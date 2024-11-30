// ❓DESCRIPTION
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// ⚙️ TESTS
// Test.assertEquals(XO('xo'),true);
// Test.assertEquals(XO("xxOo"),true);
// Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);


// ✅ SOLUTION
function XO(str) {
    str = str.toLowerCase();

    let xCounter = 0;
    let oCounter = 0;

    for (const el of str) {
        if (el === 'x') {
            xCounter++;
        } else if (el === 'o') {
            oCounter++;
        }
    }
    return xCounter === oCounter;
}


// ✅ Checking
console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));