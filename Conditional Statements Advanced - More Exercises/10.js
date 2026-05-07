function multiply(input) {
    let i = 0;

    let counter = Number(input[i]);
    i++;

    let result = 0;

    while(counter >= 0) {
        result = counter * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        counter = Number(input[i]);
        i++;

    }
    if (counter < 0) {
    console.log('Negative number!');
    }

}