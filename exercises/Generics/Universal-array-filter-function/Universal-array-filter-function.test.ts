import { expect, test } from 'vitest';
import {filterArray} from './Universal-array-filter-function';


const isEven = (num: number) => num % 2 === 0;
const startsWithT = (word: string) => word.startsWith('t');
const isGreaterThan10 = (num: number) => num > 10;

test('should filter numbers correctly', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(filterArray<number>(numbers, isEven)).toEqual([2, 4]);
})

test('should filter strings correctly', () => {
  const words = ['hello', 'world', 'typescript'];
  expect(filterArray<string>(words, startsWithT)).toEqual(['typescript']);
})

test('should return an empty array if no elements match the predicate', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(filterArray<number>(numbers, isGreaterThan10)).toEqual([]);
})

test('should work with an empty array', () => {
  expect(filterArray<number>([], isEven)).toEqual([]);
})