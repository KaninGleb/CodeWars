// ❓DESCRIPTION
// Find the first character that repeats in a String and return that character.
//
// firstDup('tweet') => 't'
// firstDup('like') => undefined
// This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.
//
// Another example:
// In 'translator' you should return 't', not 'a'.
//
// v      v
// translator
//   ^   ^
//
// While second 'a' appears before second 't', the first 't' is before the first 'a'.


// ⚙️ TESTS
// Test.assertEquals(firstDup('tweet'), 't');
// Test.assertEquals(firstDup('Ode to Joy'), ' ');
// Test.assertEquals(firstDup('ode to joy'), 'o');
// Test.assertEquals(firstDup('bar'), undefined);
// Test.assertEquals(firstDup('123123'), '1');
// Test.assertEquals(firstDup('!@#$!@#$'), '!');


// ✅ SOLUTION
export const firstDup = (s: string): string | undefined =>  {
  const str = s.split('');

  for (let i = 0; i < str.length; i++) {
    const first = str.indexOf(str[i]);
    const second = str.lastIndexOf(str[i]);
    if (first !== second) {
      console.log(str[i])
      return str[i];
    }
  }
}