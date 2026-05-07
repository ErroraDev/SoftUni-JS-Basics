function oddEven(input) {
    let oddCalculate = 0;
    let evenCalculate = 0;

    let oddMax = -1000000000.0;
    let oddMin =  1000000000.0;

    let evenMax = -1000000000.0;
    let evenMin = 1000000000.0;

    for (let i = 1; i < input.length; i++) {
        if (i % 2 === 0) {
            evenCalculate += Number(input[i]);
            let num = Number(input[i]);

            if (num < evenMin) {
                evenMin = num;
            }
            if (num > evenMax) {
                evenMax = num;
            }
        }
        if (i % 2 !== 0) {
            oddCalculate += Number(input[i]);
            let num = Number(input[i]);

            if (num < oddMin) {
                oddMin = num;
            }
            if (num > oddMax) {
                oddMax = num;
            }
        }
    }
    if (oddCalculate == 0) {
        let zero = 0;
        console.log(`OddSum=${zero.toFixed(2)},`);
        console.log('OddMin=No,');
        console.log('OddMax=No,');
    } else {
        console.log(`OddSum=${oddCalculate.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    
    if (evenCalculate == 0) {
        let zero = 0;
        console.log(`EvenSum=${zero.toFixed(2)},`);
        console.log('EvenMin=No,');
        console.log('EvenMax=No');
    } else {
        console.log(`EvenSum=${evenCalculate.toFixed(2)},`);
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}