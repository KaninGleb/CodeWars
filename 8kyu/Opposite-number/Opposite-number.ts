// ❓DESCRIPTION
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
//
// Examples:
// 1: -1
// 14: -14
// -34: 34


// ⚙️ TESTS
// assert.strictEqual(solution.Kata.opposite(1), -1)


// ✅ SOLUTION
export class Kata {
    static opposite(n: number) {
        return -n;
    }
}