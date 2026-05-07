function newHouse (input) {
    let flowerType = input[0];
    let numFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;

    switch (flowerType) {
       case 'Roses':
       totalPrice = numFlowers * 5;
       break;

       case 'Dahlias':
       totalPrice = numFlowers * 3.80;
       break;

       case 'Tulips':
       totalPrice = numFlowers * 2.80;
       break;

       case 'Narcissus':
       totalPrice = numFlowers * 3;
       break;

       case 'Gladiolus':
        totalPrice = numFlowers * 2.50;
        break;
    }

    if (flowerType === 'Roses' && numFlowers > 80) {
        totalPrice *= 0.90;
    }
    else if (flowerType === 'Dahlias' && numFlowers > 90) {
        totalPrice *= 0.85;
    }
    else if (flowerType === 'Tulips' && numFlowers > 80) {
        totalPrice *= 0.85;
    }
    else if (flowerType === 'Narcissus' && numFlowers < 120) {
        totalPrice *= 1.15;
    }
    else if (flowerType === 'Gladiolus' && numFlowers < 80) {
        totalPrice *= 1.20;
    } 
    if (budget >= totalPrice) {
        let remainingAmount = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${numFlowers} ${flowerType} and ${remainingAmount.toFixed(2)} leva left.`);
    } else {
        let sumNeeded = totalPrice - budget;
        console.log(`Not enough money, you need ${sumNeeded.toFixed(2)} leva more.`);
    }

}