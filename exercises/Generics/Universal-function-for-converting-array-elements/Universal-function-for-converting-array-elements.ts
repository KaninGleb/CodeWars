// ❓DESCRIPTION
// Напишите дженериковую функцию mapArray, принимающую массив элементов любого типа и функцию-преобразователь (transform),
// применяющую эту функцию к каждому элементу массива, и возвращающую новый массив с результатами преобразований:


// ⚙️ TESTS
// // Пример 1: Преобразование чисел в строки
// const numbers = [1, 2, 3, 4]
// const transformNumberToString = (num: number) => `Number: ${num}`
//
// console.log(mapArray(numbers, transformNumberToString)) // ["Number: 1", "Number: 2", "Number: 3", "Number: 4"]
//
// // Пример 2: Преобразование строк в их длины
// const words = ['hello', 'world', 'typescript']
// const getLength = (word: string) => word.length
//
// console.log(mapArray(words, getLength)) // [5, 5, 10]
//
// // Пример 3: Преобразование объектов в строки
// type Person = { name: string; age: number }
// const people: Person[] = [
//   { name: 'Agnes', age: 25 },
//   { name: 'Robert', age: 30 },
// ]
// const toDescription = (person: Person) => `${person.name} is ${person.age} years old`
//
// console.log(mapArray(people, toDescription)) // ["Agnes is 25 years old", "Robert is 30 years old"]


// ✅ SOLUTION
export const mapArray = <T, U>(arr: T[], transform: (value: T) => U): U[] => {
  const res = []
  for (const el of arr) {
    res.push(transform(el))
  }
  return res
}