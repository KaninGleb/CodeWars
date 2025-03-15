import {expect, test} from 'vitest';
import {SeriesSum, SeriesSum2} from './Sum-of-the-first-nth-term-of-Series';


test('Sum of the first nth term of Series', () => {
    expect(SeriesSum(0)).toBe("0.00");
    expect(SeriesSum(1)).toBe("1.00");
    expect(SeriesSum(2)).toBe("1.25");
    expect(SeriesSum(3)).toBe("1.39");
    expect(SeriesSum(4)).toBe("1.49");
    expect(SeriesSum(5)).toBe("1.57");
    expect(SeriesSum(137)).toBe("2.68");
})

test('Sum of the first nth term of Series - 2', () => {
    expect(SeriesSum2(0)).toBe("0.00");
    expect(SeriesSum2(1)).toBe("1.00");
    expect(SeriesSum2(2)).toBe("1.25");
    expect(SeriesSum2(3)).toBe("1.39");
    expect(SeriesSum2(4)).toBe("1.49");
    expect(SeriesSum2(5)).toBe("1.57");
    expect(SeriesSum2(137)).toBe("2.68");
})