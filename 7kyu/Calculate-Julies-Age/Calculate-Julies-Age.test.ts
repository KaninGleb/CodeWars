import {expect, test} from 'vitest';
import {age} from './Calculate-Julies-Age';


test("Calculate Julie's age", () => {
  expect(age(6, 3)).toBe(9);
  expect(age(-15, 0.25)).toBe(5);
  expect(age(10, 2)).toBe(20);
  expect(age(-10, 0.5)).toBe(10);
  expect(age(0, 1)).toBe(0);
})