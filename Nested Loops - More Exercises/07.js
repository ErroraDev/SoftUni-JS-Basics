function passGenerator(input) {
    let [limit1,limit2,maxAmount,] = [...input.map((x) => Number(x))];
    let passwordList = [];

    let a = 35;
    let b = 64;
    let x = 1;
    let y = 1;

    while(x <= limit1 && y <= limit2) {
        let A = String.fromCharCode(a);
        let B = String.fromCharCode(b);

        let curPass = `${A}${B}${x}${y}${B}${A}`;
        passwordList.push(curPass);
        maxAmount--;

        if(maxAmount === 0) {
            break;
        }

        a++;
        b++;

        if(a > 55) {
            a = 35;
        }
        if(b > 96) {
            b = 64;
        }
        y++;

        if(y > limit2 && x !== limit1) {
            x++;
            y = 1;
        }
    }
    console.log(passwordList.join('|') + '|');
}