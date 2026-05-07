function evenOddsPosition(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let result = '';

    for (let i = firstNum; i <= secondNum; i++) {
        let oddSum = 0;
        let evenSum = 0;
        let currentNumber = i.toString();

        for (let j = 0; j < currentNumber.length; j++) {
            let curDigit = Number(currentNumber[j]);

            let possition = j + 1;

            if (possition % 2 === 0) {
                evenSum += curDigit;
            }
             else {
                oddSum += curDigit;
             }
        }
        if (oddSum === evenSum) {
            result += currentNumber + ' ';
    }
}
         console.log(result);
}