import {test, expect} from 'vitest';
import {findDeletedNumber, findDeletedNumber2, findDeletedNumber3} from './Lost-number-in-number-sequence';


test('Lost number in number sequence', () => {
  expect(findDeletedNumber([1,2,3,4,5], [3,4,1,5])).toEqual(2);
  expect(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8])).toEqual(5);
  expect(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3])).toEqual(0);
})

test('Lost number in number sequence - 2', () => {
  expect(findDeletedNumber2([1,2,3,4,5], [3,4,1,5])).toEqual(2);
  expect(findDeletedNumber2([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8])).toEqual(5);
  expect(findDeletedNumber2([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3])).toEqual(0);
})

test('Lost number in number sequence - 3', () => {
  expect(findDeletedNumber3([1,2,3,4,5], [3,4,1,5])).toEqual(2);
  expect(findDeletedNumber3([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8])).toEqual(5);
  expect(findDeletedNumber3([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3])).toEqual(0);
})