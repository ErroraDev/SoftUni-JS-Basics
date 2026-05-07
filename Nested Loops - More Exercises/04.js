function carNumber(input) {
    let beginig = Number(input[0]);
    let end = Number(input[1]);
    let combinations = '';

    for(let i = beginig; i <= end; i++) {
        for(let j = beginig; j <= end; j++) {
            for(let k = beginig; k <= end; k++) {
                for(let b = beginig; b <= end; b++) {
                    if(i > b && (j+k) % 2 === 0) {
                        if(i % 2 === 0 && b % 2 !== 0) {
                            combinations += `${i}${j}${k}${b} `;
                        } else if (i % 2 !== 0 && b % 2 === 0) {
                            combinations += `${i}${j}${k}${b} `;
                        }
                    }
                }
            }
        }
    }
    console.log(combinations);
}