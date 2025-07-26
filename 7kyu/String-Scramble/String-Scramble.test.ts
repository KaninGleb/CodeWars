import {expect, test} from 'vitest'
import {scramble, scramble2, scramble3} from './String-Scramble'

test('String Scramble', () => {
  expect(scramble('abcd', [0, 3, 1, 2])).toBe('acdb')
  expect(scramble('sc301s', [4, 0, 3, 1, 5, 2])).toBe('c0s3s1')
  expect(scramble('bskl5', [2, 1, 4, 3, 0])).toBe('5sblk')

  expect(scramble2('abcd', [0, 3, 1, 2])).toBe('acdb')
  expect(scramble2('sc301s', [4, 0, 3, 1, 5, 2])).toBe('c0s3s1')
  expect(scramble2('bskl5', [2, 1, 4, 3, 0])).toBe('5sblk')

  expect(scramble3('abcd', [0, 3, 1, 2])).toBe('acdb')
  expect(scramble3('sc301s', [4, 0, 3, 1, 5, 2])).toBe('c0s3s1')
  expect(scramble3('bskl5', [2, 1, 4, 3, 0])).toBe('5sblk')
})