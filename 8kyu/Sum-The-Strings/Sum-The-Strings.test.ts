import {expect, test} from 'vitest';
import {sumStr} from './Sum-The-Strings';


test('Simplify the number!', () => {
    expect(sumStr('4', '5')).toBe('9');
    expect(sumStr('34', '5')).toBe('39');
})