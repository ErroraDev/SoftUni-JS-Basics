function minNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let myMinNumber = Number.MAX_SAFE_INTEGER;

    while (command !== 'Stop') {
        let num = Number(command);
        if (myMinNumber > num) {
            myMinNumber = num;
        }
        command = input[index];
        index++;
    }
    console.log(myMinNumber);
     
}