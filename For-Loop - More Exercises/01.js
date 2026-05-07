function backToThePast(input) {
    let index = 0;
    let money = Number(input[index++]);
    let year = Number(input[index++]);
    let age = 17;

    for (let b = 1800; b <= year; b++) {
        if (b % 2 === 0) {
            age ++;
            money -= 12000;
        } else {
            age ++;
            money -= 12000 + age * 50;
        }
    }
    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }
}