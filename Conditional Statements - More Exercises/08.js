function fuelTank2([fuelType,fuelAmount,clubCard]) {
    let price = 0;

    if (fuelType === 'Gasoline') {
        price = 2.22;
        if (clubCard === 'Yes') {
            price -= 0.18;
        } else {
            price = 2.22;
        }
    } else if (fuelType === 'Diesel') {
        price = 2.33;
        if (clubCard === 'Yes') {
            price -= 0.12;
        } else {
            price = 2.33;
        }
    } else if (fuelType === 'Gas') {
        price = 0.93;
        if (clubCard === 'Yes') {
        price -= 0.08;
        } else {
        price = 0.93;
        }
    }
    let totalPrice = fuelAmount * price;

    if (fuelAmount >= 20 && fuelAmount <= 25) {
        totalPrice *= 0.92;
    } else if (fuelAmount > 25) {
        totalPrice *= 0.90;
    } else {
        totalPrice;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`);
}