// // ❓DESCRIPTION
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
//
//     For example n = 3 result in:
//
// "I\n I\n  I"
// or printed:
// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:
//
// I
//  I
//   I
//    I
//     I
//      I
//       I


// ⚙️ TESTS
// describe("Some simple stairs", function() {
//     it("Draw stairs with only 1 step", () => assert.equal(drawStairs(1), "I", "The first step has no padding on the left, just an 'I'"));
//     it("Draw stairs with 3 steps", () => assert.equal(drawStairs(3), "I\n I\n  I", "There's something wrong with these 3 steps"));
//     it("Draw stairs with 5 steps", () => assert.equal(drawStairs(5), "I\n I\n  I\n   I\n    I", "5-step stairs no good"));
// });


// ✅ SOLUTION
const drawStairs = n => {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += ' '.repeat(i) + 'I';
        if (i < n - 1) {
            result += '\n';
        }
    }
    return result;
}


// ✅ Checking
console.log(drawStairs(1));
console.log(drawStairs(3));
console.log(drawStairs(5));