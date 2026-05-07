function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let result = "";

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            for (let c = 1; c <= l; c++) {
                for (let d = 1; d <= l; d++) {
                    for (let e = 1; e <= n; e++) {
                        let symbolA = Number(a);
                        let symbolB = Number(b);
                        let symbolC = String.fromCharCode(96 + c);
                        let symbolD = String.fromCharCode(96 + d);
                        let symbolE = Number(e);
                        if (symbolE > symbolA && symbolE > symbolB) {
                            result += `${symbolA}${symbolB}${symbolC}${symbolD}${symbolE} `;
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}