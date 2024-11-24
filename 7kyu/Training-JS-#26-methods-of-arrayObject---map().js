// ❓DESCRIPTION
// Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.

// If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

// If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.

// The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

// Example
// isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
// isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
// isolateIt(["1234","56789"]) should return ["12|34","56|89"]
// a little hint: Flexible use of slice() Will make the work more simple.


// ⚙️ TESTS
// Test.assertSimilar(isolateIt(["abcd","efgh"]) , ["ab|cd","ef|gh"]);
// Test.assertSimilar(isolateIt(["abcde","fghij"]) , ["ab|de","fg|ij"]);
// Test.assertSimilar(isolateIt(["1234","56789"]) , ["12|34","56|89"]);


// ✅ SOLUTION
function isolateIt(arr) {
    return arr.map(str => {
        const middle = Math.floor(str.length / 2);
        if (str.length % 2 === 0) {
            return str.slice(0, middle) + '|' + str.slice(middle);
        } else {
            return str.slice(0, middle) + '|' + str.slice(middle + 1);
        }
    })
}


// ✅ Checking
console.log(isolateIt(["abcd", "efgh"]));
console.log(isolateIt(["abcde", "fghij"]));
console.log(isolateIt(["1234", "56789"]));