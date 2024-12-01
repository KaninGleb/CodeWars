// ❓DESCRIPTION
// Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.
//
// SafeInteger(9007199254740990) //true
// SafeInteger(-90) //true
// SafeInteger(9007199254740992) //false


// ⚙️ TESTS
// Test.assertEquals(SafeInteger(9007199254740992), false, 'Value returned should be false');
// Test.assertEquals(SafeInteger(9007199254740990), true, 'Value returned should be true');


// ✅ SOLUTION
const SafeInteger = n => Number.isSafeInteger(n);


// ✅ Checking
console.log(SafeInteger(9007199254740992));
console.log(SafeInteger(9007199254740990));
console.log(SafeInteger(-90));
console.log(SafeInteger(-9007199254740990));
console.log(SafeInteger(124.1123123));
console.log(SafeInteger('123456789'));