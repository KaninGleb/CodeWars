// ❓DESCRIPTION
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.


// ⚙️ TESTS
// assert.strictEqual(areaOrPerimeter(3, 3), 9);
// assert.strictEqual(areaOrPerimeter(6, 10), 32);


// ✅ SOLUTION
// OPTION 1
const areaOrPerimeter = (l, w) => {
    if (l === w) {
        return l * w;
    } else {
        return 2 * (l + w);
    }
}


// OPTION 2
const areaOrPerimeter2 = (l, w) => l === w ? l * w : 2 * (l + w);


// ✅ Checking
console.log(areaOrPerimeter(5, 5)); 
console.log(areaOrPerimeter(5, 3));

console.log(areaOrPerimeter2(5, 5)); 
console.log(areaOrPerimeter2(5, 3));