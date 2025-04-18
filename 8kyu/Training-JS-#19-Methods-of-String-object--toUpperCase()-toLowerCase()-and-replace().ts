// ❓DESCRIPTION
// This time we learn three string methods used to change the contents of the string:toUpperCase() toLowerCase() and replace(). Their usage:
//
// stringObject.toUpperCase()
// stringObject.toLowerCase()
// stringObject.replace(substring/regexp,replacement)
// toUpperCase() and toLowerCase() usage is very simple. No parameters needs accept. It can convert all the characters in the string to uppercase or lowercase. like this:
//
// var str="My name is John";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// //output:
// MY NAME IS JOHN
// my name is john
// The following is a classic usage. Capitalize the first letter of a sentence:
//
// var str="this is an example.";
// var result=str[0].toUpperCase()+str.slice(1);
// console.log(result);
//
// //output:
// This is an example.
// The example below is to capitalize the first letter of all the words in the sentence. We used the split() and join() that we learned last time.
//
// var str="this is an example.";
// var words=str.split(" ");
// for (var i=0;i<words.length;i++){
//   words[i]=words[i][0].toUpperCase()+words[i].slice(1);
// }
// console.log(words.join(" "));
//
// //output:
// This Is An Example.
// It seems a bit complicated. Let's learn new method to improve it.
//
// replace() can replace the text specified(parameter 1) in the string with parameter 2. For example:
//
// var str="this is an example.";
// var result=str.replace("this","that");
// console.log(result);
//
// //output:
// that is an example.
// Let's use replace() to improve the example above (capitalized the first letter):
//
// var str="this is an example.";
// var words=str.split(" ");
// for (var i=0;i<words.length;i++){
//   words[i]=words[i].replace(words[i][0],words[i][0].toUpperCase());
// }
// console.log(words.join(" "));
//
// //output:
// This Is An Example.
// If the parameter 1 of replace() is a regular expression, it will be more simple(We don't even need to split the string):
//
// var str="this is an example.";
// var result=str.replace(/\b\w/g,x=>x.toUpperCase());
// console.log(result);
//
// //output:
// This Is An Example.
// This code uses a regular expression and an arrow function. This allows us to achieve a more powerful role in the code. All of these will be learning in the future lesson. We need to do now is to learn the basics.
//
// Another point needs to pay attention: If replace() uses a regular expression as parameter 1, and all the characters that match the regular expression are replaced(The regular expression uses a global matching option g). If we use a string as a parameter 1, only the first match(from left to right) of the string is replaced. like this:
//
// var str="example";
// var result=str.replace("e","@");
// console.log(result);
//
// //output:
// @xample
// As you can see, the second "e" will not be replaced.
//
// Ok, lesson is over. let's us do some task.
//
//
// Task:
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.
//
// We translate the sentence into an alien language according to the following rules:
//
// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)
//
//
// For example:
// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"


// ⚙️ TESTS
// Test.assertSimilar(alienLanguage("My name is John") , "My NAMe Is JOHn");
// Test.assertSimilar(alienLanguage("this is an example") , "THIs Is An EXAMPLe");
// Test.assertSimilar(alienLanguage("Hello World") , "HELLo WORLd");
// Test.assertSimilar(alienLanguage("HELLO WORLD") , "HELLo WORLd");


// ✅ SOLUTION
// OPTION 1
function alienLanguage (str: string): string {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      words[i] = word.slice(0, -1).toUpperCase() + word[word.length - 1].toLowerCase();
    }
  }
  return words.join(' ');
}


// OPTION 2
const alienLanguage2 = (str: string) => str.toUpperCase().replace(/\w\b/g, m => m.toLowerCase());


// OPTION 3
const alienLanguage3 = (str: string) => {
  let words = str.split(' ');

  const transformedWords = words.map(word => {
    if (word.length > 0) {
      return word.slice(0, -1).toUpperCase() + word.charAt(word.length - 1).toLowerCase();
    }
    return word;
  })
  return transformedWords.join(' ');
}


// ✅ Checking
console.log(alienLanguage("My name is John"), "--- My NAMe Is JOHn");
console.log(alienLanguage("this is an example"), "--- THIs Is An EXAMPLe");
console.log(alienLanguage("Hello World"), "--- HELLo WORLd");
console.log(alienLanguage("HELLO WORLD"), "--- HELLo WORLd");

console.log(alienLanguage2("My name is John") === "My NAMe Is JOHn");
console.log(alienLanguage2("this is an example") === "THIs Is An EXAMPLe");
console.log(alienLanguage2("Hello World") === "HELLo WORLd");
console.log(alienLanguage2("HELLO WORLD") === "HELLo WORLd");

console.log(alienLanguage3("My name is John") === "My NAMe Is JOHn");
console.log(alienLanguage3("this is an example") === "THIs Is An EXAMPLe");
console.log(alienLanguage3("Hello World") === "HELLo WORLd");
console.log(alienLanguage3("HELLO WORLD") === "HELLo WORLd");