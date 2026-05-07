function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numFishHunters = Number(input[2]);
    let totalPrice = 0;

    if (season === 'Spring') {
        totalPrice = 3000;
    }
    else if (season === 'Summer' || season === 'Autumn') {
        totalPrice = 4200;
    }
    else if
        (season === 'Winter') {
            totalPrice = 2600;
    }
    if (numFishHunters <= 6) {
        totalPrice *= 0.90;
    }
    else if (numFishHunters >= 7 && numFishHunters <= 11) {
        totalPrice *= 0.85;
    } else {
        totalPrice *= 0.75;
    }

    if (season !== "Autumn" && numFishHunters % 2 === 0) {
        totalPrice *= 0.95;
    }
    
    if (budget >= totalPrice) {
        let remainingMoney = budget - totalPrice;
        console.log(`Yes! You have ${remainingMoney.toFixed(2)} leva left.`);
    } else if (budget <= totalPrice) {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }

}