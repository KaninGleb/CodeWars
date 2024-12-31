// ❓DESCRIPTION
// To find the volume (centimeters cubed) of a cuboid you use the formula:
//
// volume = Length * Width * Height
//
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
//
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
//
// Return true if the cuboid could have equal sides, return false otherwise.
//
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
//
// Note: side will be an integer


// ⚙️ TESTS
// assert.strictEqual(cubeChecker(  8, 3), false);
// assert.strictEqual(cubeChecker(  8, 2), true );
// assert.strictEqual(cubeChecker( -8,-2), false);
// assert.strictEqual(cubeChecker(  0, 0), false);
// assert.strictEqual(cubeChecker(  1, 5), false);
// assert.strictEqual(cubeChecker(125, 5), true );


// ✅ SOLUTION
const cubeChecker = (volume, side) => {
    if (volume <= 0 || side <= 0) return false;

    const expectedVolume = side * side * side;
    return volume === expectedVolume;
}


// ✅ Checking
console.log(cubeChecker(  8, 3), '--- false');
console.log(cubeChecker(  8, 2), '--- true' );
console.log(cubeChecker( -8,-2), '--- false');
console.log(cubeChecker(  0, 0), '--- false');
console.log(cubeChecker(  1, 5), '--- false');
console.log(cubeChecker(125, 5), '--- true' );