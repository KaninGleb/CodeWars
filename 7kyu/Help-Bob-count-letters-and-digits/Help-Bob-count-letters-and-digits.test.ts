import {expect, test} from 'vitest';
import {countLettersAndDigits} from './Help-Bob-count-letters-and-digits';

test('Help Bob count letters and digits.', () => {
    expect(countLettersAndDigits("hel2!lo")).toBe(6);
    expect(countLettersAndDigits("n!!ice!!123")).toBe(7);
    expect(countLettersAndDigits("1")).toBe(1);
    expect(countLettersAndDigits("?")).toBe(0);
    expect(countLettersAndDigits("12345f%%%t5t&/6")).toBe(10);
    expect(countLettersAndDigits("aBcDeFg090")).toBe(10);
    expect(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E")).toBe(10);
})