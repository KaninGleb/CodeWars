// ❓DESCRIPTION
// Default + Rest + Spread
// Default + Rest + Spread, this kata is mainly aimed at the new JS ES6 Update introducing class extends

// Task
// Your task is to Refactor these functions to pass the tests and to follow the new JS ES2015 examples below!


// ⚙️ TESTS
// Test.assertEquals(defaultExample(3, 7), 10)
// Test.assertEquals(defaultExample(3), 10)
// Test.assertEquals(defaultExample(5), 12)
// Test.assertEquals(restExample(3,'14',6), 6)
// Test.assertEquals(restExample(5,'854',7,4), 15)
// Test.assertEquals(restExample(9), 0)
// Test.assertEquals(spreadExample(...[1,2,3]), 6)
// Test.assertEquals(spreadExample(...[6,6,6]), 18)
// Test.assertEquals(spreadExample(...[1,1,1]), 3)


// ✅ SOLUTION
const defaultExample = (x, y = 7) => x + y;

const restExample = (x, ...y) => x * y.length;

const spreadExample = (...x) => x.reduce((acc, x) => acc + x, 0);


// ✅ Checking
console.log('Default: ' + defaultExample(3, 7));
console.log('Default: ' + defaultExample(3));
console.log('Default: ' + defaultExample(5));

console.log('Rest: ' + restExample(3, '14', 6));
console.log('Rest: ' + restExample(5, '854', 7, 4));
console.log('Rest: ' + restExample(9));

console.log('Spread: ' +spreadExample(1, 2, 3));
console.log('Spread: ' +spreadExample(6, 6, 6));
console.log('Spread: ' +spreadExample(1, 1, 1));