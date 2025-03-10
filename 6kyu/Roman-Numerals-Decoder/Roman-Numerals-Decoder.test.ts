import {expect, test} from 'vitest';
import {solution, solution2} from './Roman-Numerals-Decoder';

test('Roman Numerals Decoder', () => {
    expect(solution('I')).toBe(1);
    expect(solution('IV')).toBe(4);
    expect(solution('XXI')).toBe(21);
    expect(solution('MDCLXVI')).toBe(1666);
    expect(solution('MCMXC')).toBe(1990);
    expect(solution('MMVIII')).toBe(2008);
})

test('Roman Numerals Decoder - 2', () => {
    expect(solution2('I')).toBe(1);
    expect(solution2('IV')).toBe(4);
    expect(solution2('XXI')).toBe(21);
    expect(solution2('MDCLXVI')).toBe(1666);
    expect(solution2('MCMXC')).toBe(1990);
    expect(solution2('MMVIII')).toBe(2008);
})