// ❓DESCRIPTION
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


// ⚙️ TESTS
// Test.assertEquals(getGrade(95,90,93), 'A')
// Test.assertEquals(getGrade(100,85,96), 'A')
// Test.assertEquals(getGrade(92,93,94), 'A')
// Test.assertEquals(getGrade(70,70,100), 'B')
// Test.assertEquals(getGrade(82,85,87), 'B')
// Test.assertEquals(getGrade(84,79,85), 'B')
// Test.assertEquals(getGrade(89,89,90), 'B')
// Test.assertEquals(getGrade(70,70,70), 'C')
// Test.assertEquals(getGrade(75,70,79), 'C')
// Test.assertEquals(getGrade(60,82,76), 'C')
// Test.assertEquals(getGrade(65,70,59), 'D')
// Test.assertEquals(getGrade(66,62,68), 'D')
// Test.assertEquals(getGrade(58,62,70), 'D')
// Test.assertEquals(getGrade(44,55,52), 'F')
// Test.assertEquals(getGrade(48,55,52), 'F')
// Test.assertEquals(getGrade(58,59,60), 'F')


// ✅ SOLUTION
// OPTION 1
const getGrade = (s1, s2, s3) => {
    const score  = (s1 + s2 + s3) / 3;

    if (score >= 90 && score <= 100) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    } else if (score >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}


// OPTION 2
const getGrade2 = (s1, s2, s3) => {
    const score  = (s1 + s2 + s3) / 3;
    const roundedScore = Math.floor(score / 10);

    switch (roundedScore) {
        case 10:
        case 9:
            return 'A';
        case 8:
            return 'B';
        case 7:
            return 'C';
        case 6:
            return 'D';
        default:
            return 'F';
    }
}


// OPTION 3
const getGrade3 = (s1, s2, s3) => {
    const score  = (s1 + s2 + s3) / 3;
    return (score >= 90 && score <= 100) ? 'A' :
            (score >= 80) ? 'B' :
            (score >= 70) ? 'C' :
            (score >= 60) ? 'D' : 'F';
}


// ✅ Checking
const testCases = [
    [95, 90, 93, 'A'],
    [100, 85, 96, 'A'],
    [92, 93, 94, 'A'],
    [70, 70, 100, 'B'],
    [82, 85, 87, 'B'],
    [84, 79, 85, 'B'],
    [89, 89, 90, 'B'],
    [70, 70, 70, 'C'],
    [75, 70, 79, 'C'],
    [60, 82, 76, 'C'],
    [65, 70, 59, 'D'],
    [66, 62, 68, 'D'],
    [58, 62, 70, 'D'],
    [44, 55, 52, 'F'],
    [48, 55, 52, 'F'],
    [58, 59, 60, 'F'],
];

testCases.forEach(([s1, s2, s3, expected]) => {
    console.log(getGrade(s1, s2, s3), expected, 'Grade 1');
});

testCases.forEach(([s1, s2, s3, expected]) => {
    console.log(getGrade2(s1, s2, s3), expected, 'Grade 2');
});

testCases.forEach(([s1, s2, s3, expected]) => {
    console.log(getGrade3(s1, s2, s3), expected, 'Grade 3');
});