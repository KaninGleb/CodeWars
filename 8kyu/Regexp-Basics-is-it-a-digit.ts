// ❓DESCRIPTION
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


// ⚙️ TESTS
// assert.strictEqual(''.digit(), false);
// assert.strictEqual('7'.digit(), true);
// assert.strictEqual(' '.digit(), false);
// assert.strictEqual('a'.digit(), false);
// assert.strictEqual('a5'.digit(), false);
// assert.strictEqual('14'.digit(), false);


// ✅ SOLUTION
interface String {
    digit(): boolean
}

String.prototype.digit = function(): boolean {
    return this.length === 1 && this >= '0' && this <= '9';
}


// ✅ Checking
console.log(''.digit(), false);
console.log('7'.digit(), true);
console.log(' '.digit(), false);
console.log('a'.digit(), false);
console.log('a5'.digit(), false);
console.log('14'.digit(), false);