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
// OPTION 1
export const firstDup = (s: string): string | undefined =>  {
  for (let i = 0; i < s.length; i++) {
    const first = s.indexOf(s[i]);
    const second = s.lastIndexOf(s[i]);

    if (first !== second) {
      return s[i];
    }
  }
}


// OPTION 2
export const firstDup2 = (s: string): string | undefined =>  {
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) !== i) return s[i];
  }
}


// OPTION 3
export const firstDup3 = (s: string): string | undefined =>  {
  return s.split('').find((l, i) => s.lastIndexOf(l) > i);
}