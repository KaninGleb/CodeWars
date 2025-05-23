// ❓DESCRIPTION
// I've invited some kids for my son's birthday, during which I will give to each kid some amount of candies.
//
// Every kid hates receiving less amount of candies than any other kids,
// and I don't want to have any candies left - giving it to my kid would be bad for his teeth.
//
// However, not every kid invited will come to my birthday party.
//
// What is the minimum amount of candies I have to buy, so that no matter how many kids come to the party in the end,
// I can still ensure that each kid can receive the same amount of candies, while leaving no candies left?
//
// It's ensured that at least one kid will participate in the party.


// ⚙️ TESTS
// Test.assertEquals(candiesToBuy(1),1)
// Test.assertEquals(candiesToBuy(2),2)
// Test.assertEquals(candiesToBuy(3),6)
// Test.assertEquals(candiesToBuy(4),12)
// Test.assertEquals(candiesToBuy(5),60)
// Test.assertEquals(candiesToBuy(10),2520)
// Test.assertEquals(candiesToBuy(11),27720)
// Test.assertEquals(candiesToBuy(12),27720)
// Test.assertEquals(candiesToBuy(20),232792560)


// ✅ SOLUTION
export const candiesToBuy = (kids: number): number => {
  let total = 1
  let lastTotal = 1

  for (let i = kids; i > 1; i--) {
    while (total % i !== 0) {
      total += lastTotal
    }
    lastTotal = total
  }

  return total
}
