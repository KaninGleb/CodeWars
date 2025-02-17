// ❓DESCRIPTION
// Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.
//
// Your job is to help her out.
//
// Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.
//
// If the event is in the past, return "The day is in the past!"
// If the event is today, return "Today is the day!"
// Else, return "x days"


// ⚙️ TESTS
// Test.assertEquals(countDays(new Date("February 28, 2016")), "The day is in the past!");
// Test.assertEquals(countDays(new Date()), "Today is the day!");


// ✅ SOLUTION
function countDays (d: Date): string {
    const today = new Date();
    const targetDate = new Date(d);

    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const timeDiff = targetDate.getTime() - today.getTime();
    const dayInMillis = 1000 * 60 * 60 * 24;
    const daysDiff = Math.floor(timeDiff / dayInMillis);

    if (daysDiff < 0) {
        return 'The day is in the past!';
    } else if (daysDiff === 0) {
        return 'Today is the day!';
    } else {
        return `${daysDiff} days`;
    }
}


// ✅ Checking
console.log(countDays(new Date("February 28, 2016")));
console.log(countDays(new Date()));