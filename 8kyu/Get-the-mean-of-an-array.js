// ❓DESCRIPTION
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


// ⚙️ TESTS
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


// ✅ SOLUTION
// OPTION 1
function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return Math.floor(sum / marks.length);
}


// OPTION 2
function getAverage(marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    return Math.floor(sum / marks.length);
}


console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));