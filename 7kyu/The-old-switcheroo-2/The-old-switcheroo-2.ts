// ❓DESCRIPTION
// This is a follow up to my kata the old switcheroo.
//
// Write a function that takes in a string and replaces all the letters with their respective positions in the
// English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive.
//
// 'abc'      --> '123'
// 'ABC'      --> '123'
// 'codewars' --> '315452311819'
// 'abc-#@5'  --> '123-#@5'


// ⚙️ TESTS
// const { assert, config } = require("chai");
//
// config.truncateThreshold = 0;
//
// describe("Sample tests", function() {
//   const testCases = [
//     ["abc", "123"],
//     ["ABCD", "1234"],
//     ["ZzzzZ", "2626262626"],
//     ["abc-#@5", "123-#@5"],
//     [
//       "this is a long string!! Please [encode] @C0RrEctly",
//       "208919 919 1 1215147 1920189147!! 161251195 [51431545] @30181853201225"
//     ],
//   ];
//
//   for (let [testCase, expected] of testCases) {
//     it(`encode("${testCase}")`, function() {
//       assert.strictEqual(encode(testCase), expected);
//     });
//   }
// });


// ✅ SOLUTION
export const encode = (str: string): string => {
  let res = ''

  for (const char of str) {
    if (/[a-zA-Z]/.test(char)) {
      const index = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1
      res += index
    } else {
      res += char
    }
  }

  return res;
}