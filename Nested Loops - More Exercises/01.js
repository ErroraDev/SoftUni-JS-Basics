function pinCodes([upperLimitOne,upperLimitTwo,upperLimitThree]) {

    for(let num1 = 2; num1 <= upperLimitOne; num1+=2) {
        for(let num2 = 2; num2 <= upperLimitTwo; num2++) {
            if (num2 == 2 || num2 == 3 || num2 == 5 || num2 == 7) {
                for(let num3 = 2; num3 <= upperLimitThree; num3+=2) {
                    console.log(`${num1} ${num2} ${num3}`);
                }
            }
        }
    }
}