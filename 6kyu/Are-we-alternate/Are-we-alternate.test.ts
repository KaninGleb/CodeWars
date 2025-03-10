import {expect, test} from 'vitest';
import {isAlt} from './Are-we-alternate';


test('Are we alternate?', () => {
    expect(isAlt('amazon')).toBe(true);
    expect(isAlt('apple')).toBe(false);
    expect(isAlt('banana')).toBe(true);
})


test('isVowel function', () => {
    const vowels = 'aeiou';
    const isVowel = (char: string): boolean => vowels.includes(char);

    expect(isVowel('a')).toBe(true);
    expect(isVowel('e')).toBe(true);
    expect(isVowel('i')).toBe(true);
    expect(isVowel('o')).toBe(true);
    expect(isVowel('u')).toBe(true);

    expect(isVowel('b')).toBe(false);
    expect(isVowel('c')).toBe(false);
    expect(isVowel('d')).toBe(false);
    expect(isVowel('z')).toBe(false);
    expect(isVowel('y')).toBe(false);
})