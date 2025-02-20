// ❓DESCRIPTION
// Your task is simply to count the total number of lowercase letters in a string.
//
// Examples:
// "abc" ===> 3
// "abcABC123" ===> 3
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
// "" ===> 0;
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
// "abcdefghijklmnopqrstuvwxyz" ===> 26


// ⚙️ TESTS
// Test.assertEquals(lowercaseCount("abc"), 3);
// Test.assertEquals(lowercaseCount("abcABC123"), 3);
// Test.assertEquals(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
// Test.assertEquals(lowercaseCount(""), 0)
// Test.assertEquals(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
// Test.assertEquals(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);


// ✅ SOLUTION
const lowercaseCount = str => (str.match(/[a-z]/g) || []).length;


// ✅ Checking
console.log(lowercaseCount("abc"));
console.log(lowercaseCount("abcABC123"));
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"));
console.log(lowercaseCount(""));
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"));