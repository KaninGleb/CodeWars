// ❓DESCRIPTION
// Task:
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
//
// Notes:
// List size is at least 3.
// All numbers will be positive.
// Numbers could occur more than once , (Duplications may exist).
// Threshold K will always be reachable.
//
// Input >> Output Examples:
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
// minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)


// ⚙️ TESTS
// it("minimumSteps([4, 6, 3], 7)", () => assert.strictEqual(minimumSteps([4, 6, 3], 7), 1));
// it("minimumSteps([10, 9, 9, 8], 17)", () => assert.strictEqual(minimumSteps([10, 9, 9, 8], 17), 1));
// it("minimumSteps([8, 9, 10, 4, 2], 23)", () => assert.strictEqual(minimumSteps([8, 9, 10, 4, 2], 23), 3));
// it("minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)", () => assert.strictEqual(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8));
// it("minimumSteps([4, 6, 3], 2)", () => assert.strictEqual(minimumSteps([4, 6, 3], 2), 0));


// ✅ SOLUTION
// OPTION 1
export function minimumSteps(nums: number[], value: number) {
    nums.sort((a, b) => a - b);

    let sum = 0;
    let count = 0;
    let index = 0;

    while (sum < value) {
        sum += nums[index];
        count++;
        index++;
    }
    return count - 1;
}


// OPTION 2
export function minimumSteps2(nums: number[], value: number): number {
    let arr: number[] = nums.sort((a, b) => a - b)
    let i: number = 0, n: number = arr[i]

    while(n < value){
        i++
        n += arr[i]
    }
    return i
}


// ✅ Checking
console.log(minimumSteps([4, 6, 3], 7), '--- 1');
console.log(minimumSteps([10, 9, 9, 8], 17), '--- 1');
console.log(minimumSteps([8, 9, 10, 4, 2], 23), '--- 3');
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), '--- 8');
console.log(minimumSteps([4, 6, 3], 2), '--- 0');

console.log(minimumSteps2([4, 6, 3], 7), '--- 1');
console.log(minimumSteps2([10, 9, 9, 8], 17), '--- 1');
console.log(minimumSteps2([8, 9, 10, 4, 2], 23), '--- 3');
console.log(minimumSteps2([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), '--- 8');
console.log(minimumSteps2([4, 6, 3], 2), '--- 0');