function generateHouse([arg]) {
    let n = Number(arg);
    let starsCount = 0;


    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
        if (n % 2 == 0)
            starsCount = 2 * (i + 1);
        else
            starsCount = 2 * i + 1;
        console.log("-".repeat((n - starsCount) / 2) +
            "*".repeat(starsCount) +
            "-".repeat((n - starsCount) / 2));

        starsCount += 2;
    }

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let line = '|' + '*'.repeat(n - 2) + '|';
        console.log(line);
    }

}