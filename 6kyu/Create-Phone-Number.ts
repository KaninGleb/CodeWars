// ❓DESCRIPTION
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
// Don't forget the space after the closing parentheses!


// ⚙️ TESTS
// assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// assert.equal(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
// assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");


// ✅ SOLUTION
// OPTION 1
export function createPhoneNumber(nums: number[]): string {
    return `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`;
}


// OPTION 2
export function createPhoneNumber2 (nums: number[]): string {
    let phoneNumber = '(xxx) xxx-xxxx';

    for (let i = 0; i < nums.length; i++) {
        phoneNumber = phoneNumber.replace('x', nums[i].toString());
    }
    return phoneNumber;
}


// ✅ Checking
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "--- (123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "--- (111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "--- (123) 456-7890");

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "--- (123) 456-7890");
console.log(createPhoneNumber2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "--- (111) 111-1111");
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "--- (123) 456-7890");