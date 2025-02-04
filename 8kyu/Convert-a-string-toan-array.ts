// ❓DESCRIPTION
// Write a function to split a string and convert it into an array of words.
//
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
//
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


// ⚙️ TESTS
// assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
// assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);


// ✅ SOLUTION
export function stringToArray(s: string): string[] {
    return s.split(' ');
}


// ✅ Checking
console.log(stringToArray("Robin Singh"));
console.log(stringToArray("I love arrays they are my favorite"));