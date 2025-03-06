import {expect, test} from 'vitest';
import {elimination, elimination2, elimination3} from './Find-twins';

test('Find twins', () => {
    expect(elimination([2, 5, 34, 1, 22, 1])).toBe(1);
    expect(elimination([2, 2, 34, 1, 22])).toBe(2);
    expect(elimination([2, 5, 34, 1, 22])).toBe(null);
})

test('Find twins - 2', () => {
    expect(elimination2([2, 5, 34, 1, 22, 1])).toBe(1);
    expect(elimination2([2, 2, 34, 1, 22])).toBe(2);
    expect(elimination2([2, 5, 34, 1, 22])).toBe(null);
})

test('Find twins - 3', () => {
    expect(elimination3([2, 5, 34, 1, 22, 1])).toBe(1);
    expect(elimination3([2, 2, 34, 1, 22])).toBe(2);
    expect(elimination3([2, 5, 34, 1, 22])).toBe(null);
})