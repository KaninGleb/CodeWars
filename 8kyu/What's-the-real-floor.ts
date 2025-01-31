// ❓DESCRIPTION
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
//
// Write a function that given a floor in the american system returns the floor in the european system.
//
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
//
// Basements (negatives) stay the same as the universal level.
//
// More information here
//
// Examples:
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3


// ⚙️ TESTS
// assert.equal(getRealFloor(1), 0);
// assert.equal(getRealFloor(5), 4);
// assert.equal(getRealFloor(15), 13);


// ✅ SOLUTION
// OPTION 1
export function getRealFloor(n: number) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 0
    } else if (n > 1 && n < 13) {
        return n - 1;
    } else if (n >= 13) {
        return n - 2;
    } else {
        return n;
    }
}


// OPTION 2
const getRealFloor2 = (n: number) => {
    return  n === 0 ? 0
        : n === 1 ? 0
        : (n > 1 && n < 13) ? n - 1
        : (n >= 13) ? n - 2
        : n
}


// ✅ Checking
console.log(getRealFloor(1));
console.log(getRealFloor(5));
console.log(getRealFloor(15));

console.log(getRealFloor2(1));
console.log(getRealFloor2(5));
console.log(getRealFloor2(15));