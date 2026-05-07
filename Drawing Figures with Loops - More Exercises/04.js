function triangle$(number) {
    for (let row = 1; row <= number; row++) {
        let dollars = '$';

        for (let col = 1; col < row; col++) {
            dollars += ' $';
        }
        console.log(dollars);
    }
}