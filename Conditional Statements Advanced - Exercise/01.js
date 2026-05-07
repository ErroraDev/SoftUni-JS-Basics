function cinema(input) {
    let typeProjection = input[0];
    let numberOfRows = Number(input[1]);
    let numberOfColumns = Number(input[2]);
    let income = 0;

    if (typeProjection === "Premiere") {
        income = numberOfRows * numberOfColumns * 12.00;
    }
    else if (typeProjection === "Normal") {
        income = numberOfRows * numberOfColumns * 7.50;
    }
    else if (typeProjection === "Discount") {
        income = numberOfRows * numberOfColumns * 5.00;
    }  console.log(`${income.toFixed(2)} leva`);

}