// ❓DESCRIPTION
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


// ⚙️ TESTS
// assert.strictEqual(seven(times    (five ())), 35, "seven(times(five ()))");
// assert.strictEqual(four (plus     (nine ())), 13, "four (plus(nine ()))");
// assert.strictEqual(eight(minus    (three())),  5, "eight(minus(three()))");
// assert.strictEqual(six  (dividedBy(two  ())),  3, "six(dividedBy(two()))");


// ✅ SOLUTION
const zero = num => num ? num(0) : 0;
const one = num => num ? num(1) : 1;
const two = num => num ? num(2) : 2;
const three = num => num ? num(3) : 3;
const four = num => num ? num(4) : 4;
const five = num => num ? num(5) : 5;
const six = num => num ? num(6) : 6;
const seven = num => num ? num(7) : 7;
const eight = num => num ? num(8) : 8;
const nine = num => num ? num(9) : 9;

const plus = (b) => (a) => a + b;
const minus = (b) => (a) => a - b;
const times = (b) => (a) => a * b;
const dividedBy = (b) => (a) => Math.floor(a / b);


// ✅ Checking
console.log(four (plus     (zero ())));
console.log(seven(times    (five ())));
console.log(four (plus     (nine ())));
console.log(eight(minus    (three())));
console.log(six  (dividedBy(two  ())));