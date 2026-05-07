function calculate(input) {
    let index = 0;
    let sum = 0;
    let number = Number(input[index++]);

    while (index <= number) {
        let currNumber = Number(input[index++]);
        sum += currNumber;
    }
    let average = sum / number;
    console.log(average.toFixed(2));
}