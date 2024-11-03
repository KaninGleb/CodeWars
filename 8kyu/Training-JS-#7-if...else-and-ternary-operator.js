// ❓DESCRIPTION
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	            100
// n >= 5 and n < 10	95
// n >= 10	            90


// ⚙️ TESTS
// assert.strictEqual(saleHotdogs(1), 100);
// assert.strictEqual(saleHotdogs(4), 400);
// assert.strictEqual(saleHotdogs(5), 475);
// assert.strictEqual(saleHotdogs(9), 855);
// assert.strictEqual(saleHotdogs(10), 900);
// assert.strictEqual(saleHotdogs(100), 9000);


// ✅ SOLUTION
function saleHotdogs(n) {
    const pricePerUnit = n < 5 ? 100 : n < 10 ? 95 : 90;
    return n * pricePerUnit;
}


// ✅ Checking
console.log(saleHotdogs(1) === 100);
console.log(saleHotdogs(4) === 400);
console.log(saleHotdogs(5) === 475);
console.log(saleHotdogs(9) === 855);
console.log(saleHotdogs(10) === 900);
console.log(saleHotdogs(100) === 9000);