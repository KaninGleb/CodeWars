// ❓DESCRIPTION
// Task:
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).
//
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + …
//
// You will need to figure out the rule of the series to complete this.
//
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return "0.00".
// You will only be given Natural Numbers as arguments.
//
// Examples (Input --> Output):
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


// ⚙️ TESTS
// assert.equal(solution.SeriesSum(1), "1.00");
// assert.equal(solution.SeriesSum(2), "1.25");
// assert.equal(solution.SeriesSum(3), "1.39");
// assert.equal(solution.SeriesSum(4), "1.49");


// ✅ SOLUTION
// OPTION 1
export function SeriesSum(n: number): string {
    if (n === 0) return n.toFixed(2);

    let sum = 1;
    let denominator = 1;

    for (let i = 1; i < n; i++) {
        denominator += 3;
        sum += 1 / denominator;
    }
    return sum.toFixed(2);
}


// OPTION 2
export function SeriesSum2(n: number): string {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += 1 / (1 + (3 * i));
    }
    return sum.toFixed(2);
}
