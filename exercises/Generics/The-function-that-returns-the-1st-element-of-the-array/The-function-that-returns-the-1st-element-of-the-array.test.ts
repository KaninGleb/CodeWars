import {expect, test} from 'vitest';
import {getFirstElement} from './The-function-that-returns-the-1st-element-of-the-array';

test('should return the first element of a number array', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(getFirstElement<number>(numbers)).toBe(1);
})

test('should return the first element of a string array', () => {
  const words = ['hello', 'world', 'typescript'];
  expect(getFirstElement<string>(words)).toBe('hello');
})

test('should return undefined for an empty array', () => {
  const emptyArray: number[] = [];
  expect(getFirstElement<number>(emptyArray)).toBe(undefined);
})