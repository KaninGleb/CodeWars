// ❓DESCRIPTION
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// ⚙️ TESTS
// test('', {});
// test('a', {'a': 1});
// test('ab', {'a': 1, 'b': 1});
// test('aba', {'a': 2, 'b': 1});
// test('ABC', {'A': 1, 'B': 1, 'C': 1});


// ✅ SOLUTION
const count = string => {
    const obj = {};

    for (const key of string) {
        if (obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
    return obj;
}


// ✅ Checking
console.log(count(''));
console.log(count('a'));
console.log(count('ab'));
console.log(count('aba'));
console.log(count('ABC'));