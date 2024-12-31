// ❓DESCRIPTION
// A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.
//
// Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.
//
// See the pattern below:
//
// "code wars"            ---> "C.Wars"
// "Barack hussein obama" ---> "B.H.Obama"
// Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.


// ⚙️ TESTS
// doTest('code wars', 'C.Wars');
// doTest('Barack hussain obama', 'B.H.Obama');
// doTest('barack hussain Obama', 'B.H.Obama');


// ✅ SOLUTION
const initials = n => {
    const parts = n.split(' ');
    const initialParts = parts.slice(0, -1).map(part => part.charAt(0).toUpperCase());
    const lastName = parts[parts.length - 1];
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${initialParts.join('.')}.${formattedLastName}`;
}


// ✅ Checking
console.log(initials('code wars'));
console.log(initials('Barack hussain obama'));
console.log(initials('barack hussain Obama'));