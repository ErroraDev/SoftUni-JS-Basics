function flowers([chrysanthemums,roses,tulip,season,counter]) {
    let price1;
    let price2;
    let price3;
    let totalPrice;
    let discount;

    switch(season) {
        case 'Spring':
        case 'Summer':

        price1 = 2.00;
        price2 = 4.1;
        price3 = 2.5;
        break;

        case 'Autumn':
        case 'Winter':

        price1 = 3.75;
        price2 = 4.50;
        price3 = 4.15;
        break;
    }
    totalPrice = (chrysanthemums * price1) + (roses * price2) + (tulip * price3);

    if (counter === 'Y') {
        totalPrice *= 1.15;
    }

    if (season === 'Spring' && tulip > 7) {
        discount = 5;
        totalPrice = totalPrice - ((totalPrice * discount) / 100);
    }
    if (season === 'Winter' && roses >= 10) {
        discount = 10;
        totalPrice = totalPrice - ((totalPrice * discount) / 100);
    }
    if (chrysanthemums,roses,tulip > 20) {
        discount = 20;
        totalPrice = totalPrice - ((totalPrice * discount) / 100);
    }
    totalPrice += 2;
    
    console.log(totalPrice.toFixed(2));

}