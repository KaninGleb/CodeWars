// ❓DESCRIPTION
// This time we learn about two useful methods of Number objects: toString() and toLocaleString(). the basic usage of the two methods is to convert a number into a string. look at this:
//
// var num=111;
// var a=num.toString(),
//     b=num.toLocaleString(),
//     c=num+""
// console.log([a,b,c])   //put them to an array, we can see the quotes
// //output: [ '111', '111', '111' ]
// We can see, if you just want to translate a number into a string representation, in the general case the results obtained in these ways is the same. I love to use the last one, cause I'm lazy ;-)
//
// But these two methods have other uses as well.
//
// When used toLocaleString() converted a number to a string. the results obtained are in the order of the local numeric format(I don't have this experience. it is always the same as toString() in my here).
//
// And toString() of Number object has a more special usage: According to the base output different strings.
//
// NumberObject.toString(radix)
// radix is optional parameter. if ignored it, the output will be the default decimal. If not, like this:
//
// var num=111;
// var a=num.toString(2),
//     b=num.toString(8),
//     c=num.toString(16),
// console.log([a,b,c])
// //output: [ '1101111', '157', '6f' ]
// They are converted to binary, octal and hexadecimal.
//
// Ok, lesson is over. let's us do some task with Number .toString().
//
// Task:
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.
//
// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.
//
// the color code should starting with "#". and then use 2 characters per color.
//
// For example:
// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"


// ⚙️ TESTS
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertSimilar(colorOf(255,0,0), "#ff0000");
//     showColor("#ff0000")
//     Test.assertSimilar(colorOf(0,111,0), "#006f00");
//     showColor("#006f00")
//     Test.assertSimilar(colorOf(1, 2 ,3), "#010203");
//     showColor("#010203")
//   });
// });


// ✅ SOLUTION
const colorOf = (r: number, g: number, b: number) => {
  const rColor = (r < 16 ? '0' : '') + r.toString(16),
        gColor = (g < 16 ? '0' : '') + g.toString(16),
        bColor = (b < 16 ? '0' : '') + b.toString(16);

  return `#${rColor}${gColor}${bColor}`;
}


// ✅ Checking
console.log(colorOf(255, 0, 0));
console.log(colorOf(0,111,0));
console.log(colorOf(1, 2 ,3));