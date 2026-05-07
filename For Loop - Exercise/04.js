function cleverLily(input) {
    let ageLili = Number(input[0]);
    let priceOnPeralnq = Number(input[1]);
    let priceOnToy = Number(input[2]);

    let totalMoneyWon = 0;
    let birthdayWon = 10;

    for (let i = 1; i <= ageLili; i++ ) {
        if (i % 2 === 0) {
            totalMoneyWon += birthdayWon;
            totalMoneyWon -= 1;
            birthdayWon += 10;
        } else {
            totalMoneyWon += priceOnToy;
        }
    }
    if (totalMoneyWon >= priceOnPeralnq) {
        let moneyLeft = totalMoneyWon - priceOnPeralnq;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    } else {
        let moneyNedeed = priceOnPeralnq - totalMoneyWon;
        console.log(`No! ${moneyNedeed.toFixed(2)}`);
    }
}