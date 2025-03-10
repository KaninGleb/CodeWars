// ❓DESCRIPTION
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// ⚙️ TESTS
// assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");


// ✅ SOLUTION
export const removeExclamationMarks = (s: string): string => s.replace(/!/g, '');