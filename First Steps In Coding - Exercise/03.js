function depositCalculator(input) {
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualIncreasePercent = Number(input[2]);

    let annualIncreaseDecimal = annualIncreasePercent / 100;

    let finalSum = depositedSum + depositPeriod * ((depositedSum * annualIncreaseDecimal) / 12);

    console.log(finalSum);
}