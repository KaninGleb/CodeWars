// ❓DESCRIPTION
// As you know, a promise is in one of these states: pending, fulfilled, rejected.
//
// Implement the async function getState that determines a state of a promise.
//
// const p = Promise.resolve();
// const state = await getState(p); // === "fulfilled"
//
// const p = Promise.reject();
// const state = await getState(p); // === "rejected"
//
// const p = new Promise(() => {});
// const state = await getState(p); // === "pending"


// ⚙️ TESTS
// const { assert } = require('chai');
//
// function withNoResult(promise) {
//   const noResult = new Promise(r => setTimeout(r, 50, "NO_RESULT"));
//   return Promise.race([promise, noResult])
// }
//
// it("fulfilled", async () => {
//   const p = Promise.resolve();
//   const state = await withNoResult(getState(p));
//
//   assert.equal(state, "fulfilled");
// })
//
// it("rejected", async () => {
//   const p = Promise.reject();
//   const state = await withNoResult(getState(p));
//
//   assert.equal(state, "rejected");
// })
//
// it("pending", async () => {
//   const p = new Promise(() => {});
//   const state = await withNoResult(getState(p));
//
//   assert.equal(state, "pending");
// })


// ✅ SOLUTION
export const getState = (promise: Promise<any>): Promise<string> =>
  Promise.race([promise, 'pending'])
    .then( data => data === 'pending' ? 'pending' : 'fulfilled' )
    .catch( () => 'rejected' );