// ❓DESCRIPTION
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
//
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


// ⚙️ TESTS
// assert.strictEqual(likes([]), 'no one likes this');
// assert.strictEqual(likes(['Peter']), 'Peter likes this');
// assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
// assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
// assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');


// ✅ SOLUTION
// OPTION 1
const likes = names => {
    const count = names.length;

    if (count === 0) {
        return 'no one likes this';
    } else if (count === 1) {
        return `${names[0]} likes this`;
    } else if (count === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (count === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
    }
}


// OPTION 2
const likes2 = names => {
    switch (names.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}


// ✅ Checking
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log()
console.log(likes2([]));
console.log(likes2(["Peter"]));
console.log(likes2(["Jacob", "Alex"]));
console.log(likes2(["Max", "John", "Mark"]));
console.log(likes2(["Alex", "Jacob", "Mark", "Max"]));