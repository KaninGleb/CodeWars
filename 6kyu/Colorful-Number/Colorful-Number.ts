// ❓DESCRIPTION
// Problem:
// Determine whether a non-negative integer number is colorful or not.
//
// 263 is a colorful number because [2, 6, 3, 2*6, 6*3, 2*6*3] are all different; whereas
// 236 is not colorful, because [2, 3, 6, 2*3, 3*6, 2*3*6] has 6 twice.
//
// So take all consecutive subsets of digits, take their products, and ensure all the products are different.
//
// Examples:
// 263  -->  true
// 236  -->  false


// ⚙️ TESTS
// assert.strictEqual( colourful(5), true, `colourful(5)` );
// assert.strictEqual( colourful(23), true, `colourful(23)` );
// assert.strictEqual( colourful(263), true, `colourful(263)` );
// assert.strictEqual( colourful(235789), true, `colourful(235789)` );
// assert.strictEqual( colourful(50), false, `colourful(50)` );
// assert.strictEqual( colourful(13), false, `colourful(13)` );
// assert.strictEqual( colourful(236), false, `colourful(236)` );
// assert.strictEqual( colourful(2357893), false, `colourful(2357893)` );


// ✅ SOLUTION
export const colourful = (n: number): boolean => {
  const nums = n.toString().split('').map(Number)
  const res = new Set()

  for (let i = 0; i < nums.length; i++) {
    let temp = 1

    for (let j = i; j < nums.length; j++) {
      temp *= nums[j]

      if (res.has(temp)) {
        return false
      }

      res.add(temp)
    }
  }

  return true
}