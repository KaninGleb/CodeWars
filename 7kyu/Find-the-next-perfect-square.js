// ❓DESCRIPTION
// You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
//
// Examples ( Input --> Output ):
// 121 --> 144
// 625 --> 676
// 114 --> -1         # because 114 is not a perfect square


// ⚙️ TESTS
// Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
// Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
// Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
// Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
// Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
// Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");


// ✅ SOLUTION
const findNextSquare = sq => {
    const root = Math.sqrt(sq);
    if (root % 1 !== 0) {
        return -1;
    }
    const nextRoot = root + 1;
    return nextRoot * nextRoot;
}


// ✅ Checking
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225));
console.log(findNextSquare(15241383936));
console.log(findNextSquare(155));
console.log(findNextSquare(342786627));