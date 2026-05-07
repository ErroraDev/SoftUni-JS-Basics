function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let numOfFans = Number(input[2]);

    let transport = 0;

    if (numOfFans >= 1 && numOfFans <= 4) {
        transport = budget * 0.75;
    } else if (numOfFans >= 5 && numOfFans <= 9) {
        transport = budget * 0.60;
    } else if (numOfFans >= 10 && numOfFans <= 24) {
        transport = budget * 0.50;
    } else if (numOfFans >= 25 && numOfFans <= 49) {
        transport = budget * 0.40;
    } else {
        transport = budget * 0.25;
    }

    let moneyLeft = budget - transport;
    let ticket = category == 'VIP' ? 499.99 : 249.99;
    let moneyForTickets = ticket * numOfFans;
    let left = Math.abs(moneyLeft - moneyForTickets);

    if (moneyForTickets < moneyLeft) {
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${left.toFixed(2)} leva.`);
    }

}