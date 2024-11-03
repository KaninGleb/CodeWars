// ❓DESCRIPTION
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// Tip: Using default for most of the cases can reduce your work.


// ⚙️ TESTS
// Test.assertSimilar(howManydays(1), 31);
// Test.assertSimilar(howManydays(2), 28);
// Test.assertSimilar(howManydays(3), 31);
// Test.assertSimilar(howManydays(4), 30);
// Test.assertSimilar(howManydays(12), 31);


// ✅ SOLUTION
// OPTION 1
function howManydays(month) {
    let days;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        default:
            days = 28;
    }
    return days;
}


// OPTION 2
function howManydays(month) {
    let days;
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        days = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    } else if (month === 2) {
        days = 28;
    }
    return days;
}


// OPTION 3
function howManydays(month) {
    return (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) ?
        31 : (month === 4 || month === 6 || month === 9 || month === 11) ?
        30 : 28;
}


// OPTION 4 
function howManydays(month) {
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[month];
}


// OPTION 5
const howManydays = month => [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];


// ✅ Checking
console.log(howManydays(1) === 31);
console.log(howManydays(2) === 28);
console.log(howManydays(3) === 31);
console.log(howManydays(4) === 30);
console.log(howManydays(12) === 31);