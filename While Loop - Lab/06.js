function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let myMaxNumber = Number.MIN_SAFE_INTEGER;

    while (command !== 'Stop') {
        let num = Number(command);

        if (myMaxNumber < num) {
            myMaxNumber = num;
        }

        command = input[index]
        index++
    }
    console.log(myMaxNumber);
}