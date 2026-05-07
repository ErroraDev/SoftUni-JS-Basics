function calculateProfit(input) {
    let excursionPrice = Number(input[0]);
    let numPuzzles = Number(input[1]);
    let numTalkingDolls = Number(input[2]);
    let numTeddyBears = Number(input[3]);
    let numMinions = Number(input[4]);
    let numTrucks = Number(input[5]);
    
    let totalCost = (numPuzzles * 2.60) + (numTalkingDolls * 3) + (numTeddyBears * 4.10) + (numMinions * 8.20) + (numTrucks * 2);
    
    let numToys = numPuzzles + numTalkingDolls + numTeddyBears + numMinions + numTrucks;
    if (numToys >= 50) {
      totalCost = totalCost - (totalCost * 0.25);
    }
    
    totalCost = totalCost - (totalCost * 0.1);
    
    let remainingMoney = totalCost - excursionPrice;
    
    if (remainingMoney >= 0) {
      console.log(`Yes! ${remainingMoney.toFixed(2)} lv left.`);
    } else {
      console.log(`Not enough money! ${Math.abs(remainingMoney).toFixed(2)} lv needed.`);
    }
  }