// ❓DESCRIPTION
// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?
//
// Your Task:
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
//
// Rules:
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
//
// Example (Input --> Output):
// 0 --> 0
// 5 --> 5
// 10 --> 10


// ⚙️ TESTS
// assert.strictEqual(cookingTime(0), 0, '0 eggs');
// assert.strictEqual(cookingTime(5), 5, '5 eggs');
// assert.strictEqual(cookingTime(10), 10, '10 eggs');


// ✅ SOLUTION
export function cookingTime(eggs: number): number {
    if (eggs === 0) return 0;
    return eggs > 8
        ? Math.ceil(eggs / 8) * 5
        : 5;
}