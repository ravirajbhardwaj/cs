// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  let giftGiven = 0;
  for (let i = 1; i <= friends; i++) {
    if (totalGifts > 0) {
      giftGiven++
      totalGifts--
    }
  }
  return giftGiven
}
console.log(distributeGifts(10, 5));
console.log(distributeGifts(2, 4));
