// ❓DESCRIPTION
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
//
// Examples:
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


// ⚙️ TESTS
// doTest("Hi!", "Hi");
// doTest("Hi!!!", "Hi!!");
// doTest("!Hi", "!Hi");
// doTest("!Hi!", "!Hi");
// doTest("Hi! Hi!", "Hi! Hi");
// doTest("Hi", "Hi");


// ✅ SOLUTION
// OPTION 1
const remove = str => str.charAt(str.length - 1) === '!' ? str.slice(0, -1) : str;


// OPTION 2
const remove2 = str => str.replace(/!$/, '');


// ✅ Checking
console.log(remove("Hi!"));
console.log(remove("Hi!!!") );
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));

console.log(remove2("Hi!"));
console.log(remove2("Hi!!!") );
console.log(remove2("!Hi"));
console.log(remove2("!Hi!"));
console.log(remove2("Hi! Hi!"));
console.log(remove2("Hi"));