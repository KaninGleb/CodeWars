import {assert, test} from 'vitest';
import {cookingTime} from './Boiled-Eggs';

test('Boiled Eggs', () => {
    assert.strictEqual(cookingTime(0), 0, '0 eggs');
    assert.strictEqual(cookingTime(5), 5, '5 eggs');
    assert.strictEqual(cookingTime(10), 10, '10 eggs');
    assert.strictEqual(cookingTime(16), 10, '16 eggs');
    assert.strictEqual(cookingTime(20), 15, '20 eggs');
})