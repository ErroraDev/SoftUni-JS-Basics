function luckyNumbers(input) {
    let number = Number(input);
    let string = '';

    for(let i = 1; i <= 9; i++) {
        for(let j = 1; j <= 9; j++) {
            for(let m = 1; m <= 9; m++) {
                for(let n = 1; n <= 9; n++) {
                    if(((i + j) === (m + n)) && (number % (i + j) === 0)) {
                        string += `${i}${j}${m}${n}` + ' ';
                    }
                }
            }
        }
    }
    console.log(string);
}