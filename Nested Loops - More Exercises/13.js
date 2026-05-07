function primePairs([valueCoupleOne, valueCoupleTwo, differenceCoupleOne, differenceCoupleTwo]) {
    valueCoupleOne = Number(valueCoupleOne);
    valueCoupleTwo = Number(valueCoupleTwo);

    differenceCoupleOne = Number(differenceCoupleOne);
    differenceCoupleTwo = Number(differenceCoupleTwo);

    const totalValueOne = valueCoupleOne + differenceCoupleOne;
    const totalValueTwo = valueCoupleTwo + differenceCoupleTwo;

    for (let i = valueCoupleOne; i <= totalValueOne; i++) {
        for (let j = valueCoupleTwo; j <= totalValueTwo; j++) {
            let firstNumPrime = true;
            let secondNumPrime = true;
            for (let k = 2; k <= Math.sqrt(i); k++) {
                if (i % k === 0) {
                    firstNumPrime = false;
                    break;
                }
            }
            for (let k = 2; k <= Math.sqrt(j); k++) {
                if (j % k === 0) {
                    secondNumPrime = false;
                    break;
                }
            }
            if (firstNumPrime && secondNumPrime) {
                console.log(`${i}${j}`);
            }
        }
    }
}