function solve(input) {
    let n = Number(input[0]);
    let counter = 0;

    for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {
            for (let c = 0; c <= n; c++) {
                        let combination = a + b + c;
                        if (combination === n) {
                            counter++
                        }
                    }
                }
            }
  console.log(counter);
}