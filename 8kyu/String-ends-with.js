// ❓DESCRIPTION
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// ⚙️ TESTS
// Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)


// ✅ SOLUTION
// OPTION 1
function solution (str, ending) {
    return str.endsWith(ending);
}


// OPTION 2
const solution2 = (str, ending) => str.endsWith(ending);


// ✅ Checking
console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));

console.log(solution2('abc', 'bc'));
console.log(solution2('abc', 'd'));