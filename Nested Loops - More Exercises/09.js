function solve(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNumber = Number(input[2]);

    let count = 0;
    let sum;

    for(let i = startNum; i <= endNum; i++) {
        for(let j = startNum; j <= endNum; j++) {
            sum = i+j;
            count++;
            if(sum === magicNumber) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }
    console.log(`${count} combinations - neither equals ${magicNumber}`);
}