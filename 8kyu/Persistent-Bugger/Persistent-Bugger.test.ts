import {expect, test} from 'vitest';
import {persistence, persistence2} from './Persistent-Bugger';

test('Persistent Bugger.', () => {
    expect(persistence(39)).toBe(3);
    expect(persistence(4)).toBe(0);
    expect(persistence(25)).toBe(2);
    expect(persistence(999)).toBe(4);
})

test('Persistent Bugger. - 2', () => {
    expect(persistence2(39)).toBe(3);
    expect(persistence2(4)).toBe(0);
    expect(persistence2(25)).toBe(2);
    expect(persistence2(999)).toBe(4);
})