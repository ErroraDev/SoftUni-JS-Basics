function reportSystem(input) {
    let expectedSum = Number(input[0]);
    let payCash = 0;
    let payCard = 0;
    let totalCashT = 0;
    let totalCardT = 0;
    let action = 0;
    let sum = 0;

    let i = 1;
    let currI = input[i];


    while (i < input.length) {
        if (currI === 'End') {
            console.log(`Failed to collect required money for charity.`);
            break;
        }
        action += 1;
        currI = Number(input[i]);

        if (action % 2 !== 0) {
            if (currI > 100) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`)
                payCash += currI;
                sum += currI;
                totalCashT += 1;
            }
        } else {
            if (currI < 10) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                payCard += currI;
                sum += currI;
                totalCardT += 1;
            }
        }
        if (sum >= expectedSum) {
            console.log(`Average CS: ${(payCash / totalCashT).toFixed(2)}`);
            console.log(`Average CC: ${(payCard / totalCardT).toFixed(2)}`);
            break;
        }
        i++;
        currI = input[i];
    }
}