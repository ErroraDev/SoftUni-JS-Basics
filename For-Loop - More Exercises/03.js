function logistics(input) {

    let numberCargo = Number(input[0]);

    let priceMiniBus = 0;
    let priceTruck = 0;
    let priceTrain = 0;
    
    let sumCargoMiniBus = 0;
    let sumCargoTruck = 0;
    let sumCargoTrain = 0;
    let sumCargo = 0;

    for (let i = 1; i <= numberCargo; i++) {
        let tonnageCargo = Number(input[i]);
        sumCargo += tonnageCargo;
        if (tonnageCargo <= 3) {
            sumCargoMiniBus += tonnageCargo;
            priceMiniBus += tonnageCargo * 200;
        } else if (tonnageCargo > 3 && tonnageCargo <= 11) {
            sumCargoTruck += tonnageCargo;
            priceTruck += tonnageCargo * 175;
        } else if (tonnageCargo >= 12) {
            sumCargoTrain += tonnageCargo;
            priceTrain += tonnageCargo * 120;
        }
    }
    let totalSum = (priceMiniBus + priceTruck + priceTrain) / sumCargo;
    let percentCargoMiniBus = sumCargoMiniBus / sumCargo * 100; 
    let percentCargoTruck = sumCargoTruck / sumCargo * 100;
    let percentCargoTrain = sumCargoTrain / sumCargo * 100;

    console.log(`${totalSum.toFixed(2)}`);
    console.log(`${percentCargoMiniBus.toFixed(2)}%`);
    console.log(`${percentCargoTruck.toFixed(2)}%`);
    console.log(`${percentCargoTrain.toFixed(2)}%`);
}