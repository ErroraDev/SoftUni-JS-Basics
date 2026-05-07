function shopping(input) {
  let budgetOfPetar = Number(input[0]);
  let numberVideoCards = Number(input[1]);
  let numberProcesors = Number(input[2]);
  let numberRamPamet = Number(input[3]);

  let priceOnvideoCard = numberVideoCards * 250;
  let priceOnProcessor = priceOnvideoCard * 0.35 * numberProcesors;
  let priceOnRam = priceOnvideoCard * 0.1 * numberRamPamet;
  let discount = 0;

  let totalSum = priceOnvideoCard + priceOnProcessor + priceOnRam;

  if (numberVideoCards > numberProcesors) {
    discount = totalSum * 0.15;
  }

  let finalSum = totalSum - discount;

  if (finalSum > budgetOfPetar) {
    let neededMore = finalSum - budgetOfPetar;
    console.log(
      `Not enough money! You need ${neededMore.toFixed(2)} leva more!`
    );
  } else {
    let MoneyLeft = budgetOfPetar - finalSum;
    console.log(`You have ${MoneyLeft.toFixed(2)} leva left!`);
  }
}
