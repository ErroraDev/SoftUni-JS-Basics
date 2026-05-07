function fishMarket(input) {
    let makerelPriceKg = Number(input[0]);
    let cacaPriceKg = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let horseMakerelKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitoPriceKg = makerelPriceKg * 1.6;
    let horseMakerelPriceKg = cacaPriceKg * 1.8;
    let musselsPriceKg = 7.5;

    let bonitoSum = bonitoKg * bonitoPriceKg;
    let horseMakerelSum = horseMakerelKg * horseMakerelPriceKg;
    let musselsSum = musselsKg * musselsPriceKg;

    let totalSum = bonitoSum + horseMakerelSum + musselsSum;

    console.log(totalSum.toFixed(2));
}