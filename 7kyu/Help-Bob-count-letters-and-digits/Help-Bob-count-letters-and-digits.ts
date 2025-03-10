// ❓DESCRIPTION
// Bob is a lazy man.
//
// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.
//
// Example:
// "hel2!lo" --> 6
// "wicked .. !" --> 6
// "!?..A" --> 1


// ⚙️ TESTS
// assert.equal(countLettersAndDigits("hel2!lo"), 6);
// assert.equal(countLettersAndDigits("n!!ice!!123"), 7);
// assert.equal(countLettersAndDigits("1"), 1);
// assert.equal(countLettersAndDigits("?"), 0);
// assert.equal(countLettersAndDigits("12345f%%%t5t&/6"), 10);
// assert.equal(countLettersAndDigits("aBcDeFg090"), 10);
// assert.equal(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);


// ✅ SOLUTION
export function countLettersAndDigits(input: string): number {
    const matches = input.match(/[a-zA-Z0-9]/g);
    return matches ? matches.length : 0;
}