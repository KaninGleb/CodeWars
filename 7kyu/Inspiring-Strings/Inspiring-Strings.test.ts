import {test, expect} from 'vitest';
import {longestWord} from './Inspiring-Strings';

test('Inspiring Strings', () => {
    expect(longestWord('lonely')).toBe('lonely');
    expect(longestWord('a pair')).toBe('pair');
    expect(longestWord('a b c d e fgh')).toBe('fgh');
    expect(longestWord('one two three')).toBe('three');
    expect(longestWord('red blue grey')).toBe('grey');
})