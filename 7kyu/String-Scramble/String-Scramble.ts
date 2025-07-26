// ❓DESCRIPTION
// Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

// Example:
// input: "abcd", [0, 3, 1, 2]
// output: "acdb"

// Explanation:
// The character 'a' is placed at index 0.
//
// The character 'b' is placed at index 3.
//
// The character 'c' is placed at index 1.
//
// The character 'd' is placed at index 2.

// Notes:
// The string and the array will be of equal length.
//
// The string will contain valid characters (A-Z, a-z, or 0-9);
// the array will contain valid indices.


// ⚙️ TESTS
// const chai = require('chai');
// const assert = chai.assert;
//
// chai.config.truncateThreshold = 0;
//
// function doTest(str, arr, expected) {
//   assert.strictEqual(scramble(str, arr), expected, `Incorrect result for str = ${JSON.stringify(str)}\n                     arr = ${JSON.stringify(arr)}\n\n`);
// }
//
// describe("String Scramble", function() {
//   it("Sample Tests", function() {
//     doTest('abcd', [0,3,1,2], 'acdb');
//     doTest('sc301s', [4,0,3,1,5,2], "c0s3s1");
//     doTest('bskl5', [2,1,4,3,0], "5sblk");
//   });
// });


// ✅ SOLUTION
// Option 1
export const scramble = (str: string, arr: number[]): string => {
  const newArr = Array(str.length)
  const arrString = str.split('')

  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] = arrString[i]
  }

  return newArr.join('')
}
