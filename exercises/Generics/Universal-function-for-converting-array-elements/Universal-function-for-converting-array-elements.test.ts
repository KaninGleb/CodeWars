import { expect, test } from 'vitest';
import {mapArray} from './Universal-function-for-converting-array-elements';


type Person = { name: string; age: number }

const transformNumberToString = (num: number) => `Number: ${num}`;
const getLength = (word: string) => word.length;
const toDescription = (person: Person) => `${person.name} is ${person.age} years old`;


test('should transform numbers to strings correctly', () => {
  const numbers = [1, 2, 3, 4];
  expect(mapArray<number, string>(numbers, transformNumberToString)).toEqual(["Number: 1", "Number: 2", "Number: 3", "Number: 4"]);
})

test('should transform strings to their lengths correctly', () => {
  const words = ['hello', 'world', 'typescript'];
  expect(mapArray<string, number>(words, getLength)).toEqual([5, 5, 10]);
})

test('should transform objects to descriptions correctly', () => {
  const people = [
    { name: 'Agnes', age: 25 },
    { name: 'Robert', age: 30 },
  ];
  expect(mapArray<Person, string>(people, toDescription)).toEqual(["Agnes is 25 years old", "Robert is 30 years old"]);
})

test('should return an empty array if the input array is empty', () => {
  const emptyArray: number[] = [];
  expect(mapArray<number, string>(emptyArray, transformNumberToString)).toEqual([]);
})