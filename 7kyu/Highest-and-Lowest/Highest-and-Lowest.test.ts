import {expect, test} from 'vitest';
import {Kata} from './Highest-and-Lowest';

test('Highest and Lowest', () => {
    expect(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toBe("42 -9");
    expect(Kata.highAndLow("1 2 3")).toBe("3 1");
    expect(Kata.highAndLow("1 2 3 4 5 6 7 8 9 10")).toBe("10 1");
    expect(Kata.highAndLow("1000 200 33333")).toBe("33333 200");
    expect(Kata.highAndLow("0.9999998 0.9999996 0.9999997")).toBe("0.9999998 0.9999996");
})