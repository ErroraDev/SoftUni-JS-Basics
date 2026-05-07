function squareFrame(integer) {
    let row1 = '+';

    for (let top = 0; top < integer - 2; top++) {
        row1 += ' -';
    }

    row1 += ' +';
    console.log(row1);

    for (let mid = 0; mid < integer - 2; mid++) {
        let row2 = '|';
        for (let j = 0; j < integer - 2; j++) {
            row2 += ' -';
        }
        row2 += ' |';
        console.log(row2);
    }

    let row3 = '+';
    for (let bot = 0; bot < integer - 2; bot++) {
        row3 += ' -';
    }
    row3 += ' +';
    console.log(row3);
}