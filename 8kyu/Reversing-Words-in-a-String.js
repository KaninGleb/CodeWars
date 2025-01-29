// ❓DESCRIPTION
// You need to write a function that reverses the words in a given string. Words are always separated by a single space.
//
// As the input may have trailing spaces, you will also need to ignore unnecessary whitespace.
//
// Example (Input --> Output):
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"


// ⚙️ TESTS
// assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
// assert.strictEqual(reverse('This is so easy'), 'easy so is This');
// assert.strictEqual(reverse('no one cares'), 'cares one no');
// assert.strictEqual(reverse(''), '');
// assert.strictEqual(reverse('CodeWars'), 'CodeWars');


// ✅ SOLUTION
const reverse = str => str.split(' ').reverse().join(' ');


// ✅ Checking
console.log(reverse('I am an expert at this'));
console.log(reverse('This is so easy'));
console.log(reverse('no one cares'));
console.log(reverse(''));
console.log(reverse('CodeWars'));