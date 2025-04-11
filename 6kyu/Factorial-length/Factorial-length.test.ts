import {expect, test} from 'vitest';
import {count, factorialLength} from './Factorial-length';


test('Factorial length simple', () => {
  expect(factorialLength(1)) .toBe(1);
  expect(factorialLength(2)) .toBe(1);
  expect(factorialLength(3)) .toBe(1);
  expect(factorialLength(5)) .toBe(3);
  expect(factorialLength(10)).toBe(7);
})

test('Factorial length', () => {
  expect(count(    5)).toBe(     3);
  expect(count(   50)).toBe(    65);
  expect(count(  500)).toBe(  1135);
  expect(count( 5000)).toBe( 16326);
  expect(count(50000)).toBe(213237);

  expect(count(500000)) .toBe( 2632342);
  expect(count(5000000)).toBe(31323382);
})