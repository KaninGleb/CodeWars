import {expect, test} from 'vitest';
import {candiesToBuy} from './Kids-and-candies';

test('Kids and candies', () => {
  expect(candiesToBuy(1)).toBe(1)
  expect(candiesToBuy(2)).toBe(2)
  expect(candiesToBuy(3)).toBe(6)
  expect(candiesToBuy(4)).toBe(12)
  expect(candiesToBuy(5)).toBe(60)
  expect(candiesToBuy(10)).toBe(2520)
  expect(candiesToBuy(11)).toBe(27720)
  expect(candiesToBuy(12)).toBe(27720)
  expect(candiesToBuy(20)).toBe(232792560)
})