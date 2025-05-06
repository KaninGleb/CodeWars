// ❓DESCRIPTION
// Напишите дженериковую функцию filterArray, принимающую массив элементов любого типа и функцию-предикат(predicate) ✳️,
// и возвращающую новый массив, состоящий из элементов, удовлетворяющих условию.
//
// ✳️ Функция-предикат - функция, возвращающая булево значение.
//
// Требования:
// функция должна быть дженериковой и работать с массивами любого типа;
// функция-предикат принимает элемент массива и возвращает boolean;
// если ни один элемент массива не удовлетворяет условию, функция должна возвращать пустой массив:


// ⚙️ TESTS
// // Пример 1: Фильтрация чисел
// const numbers = [1, 2, 3, 4, 5]
// const isEven = (num: number) => num % 2 === 0
//
// console.log(filterArray(numbers, isEven)) // [2, 4]
//
// // Пример 2: Фильтрация строк
// const words = ['hello', 'world', 'typescript']
// const startsWithT = (word: string) => word.startsWith('t')
//
// console.log(filterArray(words, startsWithT)) // ["typescript"]


// ✅ SOLUTION
export const filterArray = <T>(arr: T[], predicate: (value: T) => boolean): T[] => {
  const res = []
  for (const el of arr) {
    if (predicate(el)) {
      res.push(el)
    }
  }
  return res
}