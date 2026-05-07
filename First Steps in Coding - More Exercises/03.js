function consoleConvertorCtoF(input) {
    let gradusC = Number(input[0]);

    let sumFormula = (gradusC * 1.8 + 32).toFixed(2);
    console.log(sumFormula);

}