import {test, expect} from 'vitest';
import {colourful} from './Colorful-Number';


test('Colorful Number', () => {
  expect(colourful(5))      .toBe(true);
  expect(colourful(23))     .toBe(true);
  expect(colourful(263))    .toBe(true);
  expect(colourful(235789)) .toBe(true);
  expect(colourful(50))     .toBe(false);
  expect(colourful(13))     .toBe(false);
  expect(colourful(236))    .toBe(false);
  expect(colourful(2357893)).toBe(false);
})