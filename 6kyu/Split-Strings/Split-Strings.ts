// ❓DESCRIPTION
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


// ⚙️ TESTS
// assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
// assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// assert.deepEqual(solution(""), []);


// ✅ SOLUTION
export const solution = (str: string): string[] => {
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    const pair = str[i] + (str[i + 1] || '_');
    result.push(pair);
  }
  return result;
}