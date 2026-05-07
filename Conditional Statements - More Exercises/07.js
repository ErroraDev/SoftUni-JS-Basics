function fuelTank([fuelType, litres]) {
    let result = '';

    if (fuelType !== 'Diesel' && fuelType !== 'Gas' && fuelType !== 'Gasoline') {
        result = 'Invalid fuel!';
    } else if (litres < 25) {
        result = `Fill your tank with ${fuelType.toLowerCase()}!`;
    } else if (litres >= 25) {
        result = `You have enough ${fuelType.toLowerCase()}.`;
    }
        console.log(result);
}