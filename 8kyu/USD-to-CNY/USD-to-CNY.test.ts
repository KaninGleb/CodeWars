import {expect, test} from 'vitest';
import {usdcny} from './USD-to-CNY';


test('USD => CNY', () => {
    expect(usdcny(1)).toBe('6.75 Chinese Yuan');
    expect(usdcny(15)).toBe('101.25 Chinese Yuan');
    expect(usdcny(465)).toBe('3138.75 Chinese Yuan');
    expect(usdcny(7924)).toBe('53487.00 Chinese Yuan');
})