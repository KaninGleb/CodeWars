import {expect, test} from 'vitest';
import {Kata} from './Opposite-number';

test('Opposite numbers', () => {
    expect(Kata.opposite(0)).toBe(-0);
    expect(Kata.opposite(1)).toBe(-1);
    expect(Kata.opposite(-5)).toBe(5);
    expect(Kata.opposite(14)).toBe(-14);
    expect(Kata.opposite(-34)).toBe(34);
    expect(Kata.opposite(4.25)).toBe(-4.25);
    expect(Kata.opposite(3.3333333)).toBe(-3.3333333);
    expect(Kata.opposite(-12525220.3325)).toBe(12525220.3325);
})