import {expect, test} from 'vitest'
import {sentencify, sentencify2} from './Pull-your-words-together-man'

test('Pull your words together, man!', () => {
  expect(sentencify(['i', 'am', 'an', 'AI'])).toBe('I am an AI.')
  expect(sentencify(['yes'])).toBe('Yes.')
  expect(sentencify(['FIELDS', 'of', 'CORN', 'are', 'to', 'be', 'sown'])).toBe('FIELDS of CORN are to be sown.')
  expect(sentencify(['i\'m', 'afraid', 'I', 'can\'t', 'let', 'you', 'do', 'that'])).toBe('I\'m afraid I can\'t let you do that.')
  expect(sentencify(['let', 'there', 'be', 'light'])).toBe('Let there be light.')
  expect(sentencify(['any', 'other', 'characters,,,', 'should', 'be', 'ignored'])).toBe('Any other characters,,, should be ignored.')
  expect(sentencify(['extra', 'stuff"\'\'', 'stays'])).toBe('Extra stuff"\'\' stays.')

  expect(sentencify2(['i', 'am', 'an', 'AI'])).toBe('I am an AI.')
  expect(sentencify2(['yes'])).toBe('Yes.')
  expect(sentencify2(['FIELDS', 'of', 'CORN', 'are', 'to', 'be', 'sown'])).toBe('FIELDS of CORN are to be sown.')
  expect(sentencify2(['i\'m', 'afraid', 'I', 'can\'t', 'let', 'you', 'do', 'that'])).toBe('I\'m afraid I can\'t let you do that.')
  expect(sentencify2(['let', 'there', 'be', 'light'])).toBe('Let there be light.')
  expect(sentencify2(['any', 'other', 'characters,,,', 'should', 'be', 'ignored'])).toBe('Any other characters,,, should be ignored.')
  expect(sentencify2(['extra', 'stuff"\'\'', 'stays'])).toBe('Extra stuff"\'\' stays.')
})
