import {assert, test} from "vitest";
import './Custom-Array-Filters'

test('Custom Array Filters', () => {
    assert.deepEqual([1,2,3,4,5].even(),[2,4]);
    assert.deepEqual([1,2,3,4,5].odd() ,[1,3,5]);
    assert.deepEqual([1,2,3,4,5].under(4),[1,2,3]);
    assert.deepEqual([1,2,3,4,5].over(4) ,[5]);
    assert.deepEqual([1,2,3,4,5].inRange(1,3),[1,2,3]);
    assert.deepEqual([1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30), [18, 20, 22, 30]);
    assert.deepEqual(["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even(),[300, 122]);
})