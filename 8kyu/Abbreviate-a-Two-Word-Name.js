// ❓DESCRIPTION
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F


// ⚙️ TESTS
// assert.strictEqual(abbrevName("Sam Harris"), "S.H");
// assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
// assert.strictEqual(abbrevName("Evan Cole"), "E.C");
// assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
// assert.strictEqual(abbrevName("David Mendieta"), "D.M");


// ✅ SOLUTION
const abbrevName = name => {
    return name.split(' ')
                .map(name => name
                .charAt(0)
                .toUpperCase())
                .join('.')
}


// ✅ Checking
console.log(abbrevName("Sam Harris"), "=== S.H");
console.log(abbrevName("Patrick Feenan"), "=== P.F");
console.log(abbrevName("Evan Cole"), "=== E.C");
console.log(abbrevName("P Favuzzi"), "=== P.F");
console.log(abbrevName("David Mendieta"), "=== D.M");