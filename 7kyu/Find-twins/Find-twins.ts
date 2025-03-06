// ❓DESCRIPTION
// Agent 47, you have a new task!
// Among citizens of the city X are hidden 2 dangerous criminal twins.
// Your task is to identify them and eliminate!
//
// Everyone except the twins are single-born (i.e., unique individuals).
//
// Given an array of integers, your task is to find two same numbers and return one of them. For example, in the array ```` the answer is 2.
//
// If there are no twins in the city - return None or the equivalent in the language that you are using.


// ⚙️ TESTS
// tester([2,5,34,1,22,1], 1);
// tester([2,2,34,1,22], 2);
// tester([2,5,34,1,22], null);


// ✅ SOLUTION
// OPTION 1
export function elimination(arr: number[]): number | null{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return null;
}


// OPTION 2
export function elimination2(arr: number[]): number | null{
    const uniqueSet = new Set();
    for (const num of arr) {
        if (uniqueSet.has(num)) {
            return num;
        }
        uniqueSet.add(num);
    }
    return null;
}