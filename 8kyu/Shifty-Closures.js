// ❓DESCRIPTION
// Functional closures can get overly attached. Set them straight!

// Why doesn't greetAbe() actually greet Abe?


// ⚙️ TESTS
// assert.strictEqual(greetAbe(), 'Hello, Abe!', 'greetAbe()')
// assert.strictEqual(greetBen(), 'Hello, Ben!', 'greetBen()')


// ✅ SOLUTION
const greet = (name) => 'Hello, ' + name + '!';

const greetAbe = () => greet('Abe');
const greetBen = () => greet('Ben');


// ✅ Checking
console.log(greetAbe());
console.log(greetBen());