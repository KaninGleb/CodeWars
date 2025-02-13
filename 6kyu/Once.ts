// ❓DESCRIPTION
// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.
//
// Subsequent calls to the resulting function should have no effect (and should return undefined).
//
// For example:
// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect


// ⚙️ TESTS
// assert.throws(() => f(), undefined, undefined, "Should throw an error the first time");
// assert.doesNotThrow(() => f(), undefined, undefined, "Should do nothing the second time");


// ✅ SOLUTION
function once(fn: Function) {
    let isCalled = false;

    return function (...args: any[]) {
        if (!isCalled) {
            isCalled = true;
            return fn(...args);
        }
        return undefined;
    }
}


// ✅ Checking
const f = once(function (x: number) {
    return x;
})

console.log(f(1));
console.log(f(1));