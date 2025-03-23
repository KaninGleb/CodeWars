import {test, expect} from 'vitest';
import {longestWord, longestWord2} from './Inspiring-Strings';

test('Inspiring Strings', () => {
    expect(longestWord('lonely')).toBe('lonely');
    expect(longestWord('a pair')).toBe('pair');
    expect(longestWord('a b c d e fgh')).toBe('fgh');
    expect(longestWord('one two three')).toBe('three');
    expect(longestWord('red blue grey')).toBe('grey');
})

test('Inspiring Strings - 2', () => {
    expect(longestWord2('lonely')).toBe('lonely');
    expect(longestWord2('a pair')).toBe('pair');
    expect(longestWord2('a b c d e fgh')).toBe('fgh');
    expect(longestWord2('one two three')).toBe('three');
    expect(longestWord2('red blue grey')).toBe('grey');
})