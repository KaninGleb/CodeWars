// ❓DESCRIPTION
// Напишите функцию, которая принимает массив элементов любого типа и возвращает первый элемент массива.


// ⚙️ TESTS
// // Пример 1: Массив чисел
// const numbers = [1, 2, 3, 4, 5]
// console.log(getFirstElement(numbers)) // 1
//
// // Пример 2: Массив строк
// const words = ['hello', 'world', 'typescript']
// console.log(getFirstElement(words)) // 'hello'


// ✅ SOLUTION
export const getFirstElement = <T>(array: T[]): T => array[0];