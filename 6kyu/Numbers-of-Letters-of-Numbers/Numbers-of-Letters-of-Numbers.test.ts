import {expect, test} from 'vitest';
import {numbersOfLetters} from './Numbers-of-Letters-of-Numbers';


test('Numbers of Letters of Numbers', () => {
  expect(numbersOfLetters(1)).toEqual(['one', 'three', 'five', 'four']);
  expect(numbersOfLetters(12)).toEqual(['onetwo', 'six', 'three', 'five', 'four']);
  expect(numbersOfLetters(37)).toEqual(['threeseven', 'onezero', 'seven', 'five', 'four']);
  expect(numbersOfLetters(311)).toEqual(['threeoneone', 'oneone', 'six', 'three', 'five', 'four']);
  expect(numbersOfLetters(999)).toEqual(['nineninenine', 'onetwo', 'six', 'three', 'five', 'four']);
})