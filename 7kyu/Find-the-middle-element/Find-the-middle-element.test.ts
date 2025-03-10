import {expect, test} from 'vitest';
import {gimme} from './Find-the-middle-element';


test('Find the middle element', () => {
    expect(gimme([2, 3, 1])).toBe(0);
    expect(gimme([5, 10, 14])).toBe(1);
    expect(gimme([2.1, 3.2, 1.4])).toBe(0);
    expect(gimme([5.9, 10.4, 14.2])).toBe(1);
    expect(gimme([-2, -3, -1])).toBe(0);
    expect(gimme([-5, -10, -14])).toBe(1);
    expect(gimme([-2, -3.2, 1])).toBe(0);
    expect(gimme([-5.2, -10.6, 14])).toBe(0);
})