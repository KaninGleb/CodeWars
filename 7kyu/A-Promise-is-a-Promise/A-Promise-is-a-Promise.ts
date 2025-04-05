// ❓DESCRIPTION
// Create a resolved javascript Promise that will return 'Hello World!'.


// ⚙️ TESTS
// describe('Basic Test', () => {
//   it('Hello World!', () => {
//     promiseHelloWorld().then(response => Test.assertEquals(response, 'Hello World!', 'Simple Single call test'));
//   });
// });


// ✅ SOLUTION
export const promiseHelloWorld = () => Promise.resolve('Hello World!');

promiseHelloWorld()
  .then(data => {
    return data;
  })