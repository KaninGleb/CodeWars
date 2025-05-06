import {beforeEach, expect, test} from 'vitest';
import {
  updateArray1,
  updateArray2
} from './Implementation-of-a-universal-function-for-working-with-arrays-using-generics';


let stringArray: string[]
let numberArray: number[]
let emptyArray: number[]

beforeEach(() => {
  stringArray = ["apple", "banana", "cherry"]
  numberArray = [1, 2, 3]
  emptyArray = []
})

// OPTION 1
test('should return the original array if the value is already in the array (strings)', () => {
  expect(updateArray1<string>(stringArray, "banana")).toEqual(["apple", "banana", "cherry"]);
})

test('should return a new array with the added value if the value is not in the array (strings)', () => {
  expect(updateArray1<string>(stringArray, "strawberry")).toEqual(["apple", "banana", "cherry", "strawberry"]);
})

test('should return the original array if the value is already in the array (numbers)', () => {
  expect(updateArray1<number>(numberArray, 2)).toEqual([1, 2, 3]);
})

test('should return a new array with the added value if the value is not in the array (numbers)', () => {
  expect(updateArray1<number>(numberArray, 4)).toEqual([1, 2, 3, 4]);
})

test('should work with an empty array', () => {
  expect(updateArray1<number>(emptyArray, 5)).toEqual([5]);
})

// OPTION 2
test('should return the original array if the value is already in the array (strings)', () => {
  expect(updateArray2<string>(stringArray, "banana")).toEqual(["apple", "banana", "cherry"]);
})

test('should return a new array with the added value if the value is not in the array (strings)', () => {
  expect(updateArray2<string>(stringArray, "strawberry")).toEqual(["apple", "banana", "cherry", "strawberry"]);
})

test('should return the original array if the value is already in the array (numbers)', () => {
  expect(updateArray2<number>(numberArray, 2)).toEqual([1, 2, 3]);
})

test('should return a new array with the added value if the value is not in the array (numbers)', () => {
  expect(updateArray2<number>(numberArray, 4)).toEqual([1, 2, 3, 4]);
})

test('should work with an empty array', () => {
  expect(updateArray2<number>(emptyArray, 5)).toEqual([5]);
})