// ❓DESCRIPTION
// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.
//
// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).
//
// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
//
// Examples:
// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]


// ⚙️ TESTS
// assert.deepEqual(numbersOfLetters(1), ["one", "three", "five", "four"]);
// assert.deepEqual(numbersOfLetters(12), ["onetwo", "six", "three", "five", "four"]);
// assert.deepEqual(numbersOfLetters(37), ["threeseven", "onezero", "seven", "five", "four"]);
// assert.deepEqual(numbersOfLetters(311), ["threeoneone", "oneone", "six", "three", "five", "four"]);
// assert.deepEqual(numbersOfLetters(999), ["nineninenine", "onetwo", "six", "three", "five", "four"]);


// ✅ SOLUTION
export function numbersOfLetters(integer: number): Array<string> {
  const letters: { [key: number]: string } = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }

  const result = [];
  let current = integer;

  while (true) {
    const numString = current
      .toString()
      .split('')
      .map(dig => letters[Number(dig)])
      .join('')
    result.push(numString);

    if (numString === 'four') {
      break;
    }
    current = numString.length;
  }

  return result;
}