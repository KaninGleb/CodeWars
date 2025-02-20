import {expect, test} from 'vitest';
import {Kata} from './Opposite-number';

test('Opposite numbers', () => {
    expect(Kata.opposite(1)).toBe(-1);
    expect(Kata.opposite(14)).toBe(-14);
    expect(Kata.opposite(-34)).toBe(34);
    expect(Kata.opposite(0)).toBe(-0);
})