// ❓DESCRIPTION
// Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).


// ⚙️ TESTS
// assert.strictEqual(validateUsr('asddsa'), true);
// assert.strictEqual(validateUsr('a'), false);
// assert.strictEqual(validateUsr('Hass'), false);
// assert.strictEqual(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
// assert.strictEqual(validateUsr(''), false);
// assert.strictEqual(validateUsr('____'), true);
// assert.strictEqual(validateUsr('012'), false);
// assert.strictEqual(validateUsr('0123'), true);
// assert.strictEqual(validateUsr('1234567890abcdefg'), false);
// assert.strictEqual(validateUsr('p1pp1'), true);
// assert.strictEqual(validateUsr('asd43 34'), false);
// assert.strictEqual(validateUsr('asd43_34'), true);
// assert.strictEqual(validateUsr('abcd'), true);


// ✅ SOLUTION
const validateUsr = username => {
    const regex = /^[a-z0-9_]{4,16}$/
    return regex.test(username);
}


// ✅ Checking
console.log(validateUsr('asddsa'));
console.log(validateUsr('a'));
console.log(validateUsr('Hass'));
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'));
console.log(validateUsr(''));
console.log(validateUsr('____'));
console.log(validateUsr('012'));
console.log(validateUsr('0123'));
console.log(validateUsr('1234567890abcdefg'));
console.log(validateUsr('p1pp1'));
console.log(validateUsr('asd43 34'));
console.log(validateUsr('asd43_34'));
console.log(validateUsr('abcd'));