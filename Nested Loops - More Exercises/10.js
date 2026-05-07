function profit(input) {
    let coins1 = Number(input[0]);
    let coins2 = Number(input[1]);
    let coins5 = Number(input[2]);
    let sum = Number(input[3]);
    let counter = 0;

    for(let i = 0; i <= coins1; i++) {
        for(let j = 0; j <= coins2; j++) {
            for(let k = 0; k <= coins5; k++) {
                let total = i * 1 + j * 2 + k * 5;
                if (total === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                    counter++;
                }
            }
        }
    }
}