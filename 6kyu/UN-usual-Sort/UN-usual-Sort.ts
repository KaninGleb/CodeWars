// ❓DESCRIPTION
// In another Kata I came across a weird sort function to implement. We had to sort characters as usual ( 'A' before 'Z' and 'Z' before 'a' ) except that the numbers had to be sorted after the letters ( '0' after 'z') !!!
//
// (After a couple of hours trying to solve this unusual-sorting-kata I discovered final tests used **usual** sort (digits **before** letters :-)
//
// So, the function you'll have to code will return a sorted letters as usual, but will put digits (or one-digit-long numbers ) after letters.
//
// Examples:
// ["a","z","b"] --> ["a","b","z"]  // as usual
// ["a","Z","B"] --> ["B","Z","a"]  // as usual
//
// // ... but ...
// ["1","z","a"] --> ["a","z","1"]
// ["1","Z","a"] --> ["Z","a","1"]
// [3,2,1"a","z","b"] --> ["a","b","z",1,2,3]
// [3,"2",1,"a","c","b"] --> ["a","b","c",1,"2",3]
// Note: digits will be sorted after "same-digit-numbers", eg: 1 is before "1", "2" after 2.
//
// [3,"2",1,"1","3",2] --> [1,"1",2,"2",3,"3"]
// You may assume that argument will always be an array/list of characters or one-digit-long numbers.


// ⚙️ TESTS
// Test.assertSimilar(unusualSort("0981726354".split('')),"0123456789".split(''))
// Test.assertSimilar(unusualSort("321cba".split('')),"abc123".split(''))
// Test.assertSimilar(unusualSort("x1y2z3".split('')),"xyz123".split(''))
// Test.assertSimilar(unusualSort("cba950XYZ".split('')),"XYZabc059".split(''))
// Test.assertSimilar(unusualSort([3,"3","2",2,"2","1",1,"a","b","c"]),["a","b","c",1,"1",2,"2","2",3,"3"],"should sort 'digits' after 'same-digit-numbers'");


// ✅ SOLUTION
export const unusualSort = (arrayOfChars: Array<string | number>): Array<string | number> => {
    const sorted = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        0, '0', 1, '1', 2, '2', 3, '3', 4, '4', 5, '5', 6, '6', 7, '7', 8, '8', 9, '9'
    ]

    return arrayOfChars.sort((a, b) => sorted.indexOf(a) - sorted.indexOf(b));
}