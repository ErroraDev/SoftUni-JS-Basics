function secretDoor([case1,case2,case3]) {
    for(let num1 = 2; num1 <= case1; num1+=2) {
        for(let num2 = 2; num2 <= case2; num2++) {
            if(num2 == 2 || num2 == 3 || num2 == 5 || num2 == 7) {
                for(let num3 = 2; num3 <= case3; num3+=2) {
                    console.log(`${num1} ${num2} ${num3}`);
                }
            }
        }
    }
}