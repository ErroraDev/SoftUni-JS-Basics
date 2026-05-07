function vacation(input) {
    let index = 0;
    let tripMoney = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;

    let days = 0;
    let daysSpendingOnly = 0;

    while (true) {
        transaction = input[index];
        index++;

        moneySum = Number(input[index]);
        index++;

        days += 1;

        if (transaction == 'spend') {
            daysSpendingOnly += 1;
        if (availableMoney <= moneySum) {
            availableMoney = 0;
        }
        else {
            availableMoney -= moneySum;
        }
    } 
        if (transaction == 'save') {
            availableMoney += moneySum;
            daysSpendingOnly = 0;
        }
        if (daysSpendingOnly == 5) {
            console.log("You can't save the money.");
            console.log(`${days}`);
            break;
        }
        if (availableMoney >= tripMoney) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
    }
}