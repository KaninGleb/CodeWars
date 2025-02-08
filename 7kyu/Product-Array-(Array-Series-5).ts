// ❓DESCRIPTION
// Task:
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
//
// Notes:
// Array/list size is at least 2 .
// Array/list's numbers Will be only Positives
// Repetition of numbers in the array/list could occur.
//
// Input >> Output Examples:
// productArray ({12,20}) ==>  return {20,12}
// productArray ({1,5,2}) ==> return {10,2,5}
// productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}


// ⚙️ TESTS
// assert.deepEqual(productArray([12, 20]), [20, 12])
// assert.deepEqual(productArray([3, 27, 4, 2]), [216, 24, 162, 324])
// assert.deepEqual(productArray([13, 10, 5, 2, 9]), [900, 1170, 2340, 5850, 1300])
// assert.deepEqual(productArray([16, 17, 4, 3, 5, 2]), [2040, 1920, 8160, 10880, 6528, 16320])


// ✅ SOLUTION
export function productArray(nums: number[]): number[] {
    const totalProduct = nums.reduce((acc, num) => acc * num, 1);
    return nums.map(num => totalProduct / num);
}


// ✅ Checking
console.log(productArray([12, 20]));
console.log(productArray([3, 27, 4, 2]));
console.log(productArray([13, 10, 5, 2, 9]));
console.log(productArray([16, 17, 4, 3, 5, 2]));