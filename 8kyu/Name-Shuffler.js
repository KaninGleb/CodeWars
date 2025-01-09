// ❓DESCRIPTION
// Write a function that returns a string in which firstname is swapped with last name.
//
// Example(Input --> Output):
// "john McClane" --> "McClane john"


// ⚙️ TESTS
// assert.strictEqual(nameShuffler('john McClane'),'McClane john');
// assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
// assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')


// ✅ SOLUTION
const nameShuffler = str => str.split(' ').reverse().join(' ');


// ✅ Checking
console.log(nameShuffler('john McClane'));
console.log(nameShuffler('Mary jeggins'));
console.log(nameShuffler('tom jerry'));