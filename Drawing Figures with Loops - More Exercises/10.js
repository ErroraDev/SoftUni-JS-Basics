function diamond(arg) {
    let n = Number(arg);
    if (n % 2 == 0) {

        for (let i = 0; i < Math.floor(n / 2); i++) {
            console.log(
                "-".repeat(Math.floor((n - 1) / 2) - i) +
                "*" +
                "-".repeat(2 * i) +
                "*" +
                "-".repeat(Math.floor((n - 1) / 2) - i));
        }

        for (let i = Math.floor((n - 1) / 2) - 1; i >= 0; i--) {
            console.log(
                "-".repeat(Math.floor((n - 1) / 2) - i) +
                "*" +
                "-".repeat(2 * i) +
                "*" +
                "-".repeat(Math.floor((n - 1) / 2) - i));
        }
    }

    if (n % 2 !== 0) {
        let half = Math.floor(n / 2);

        for (let i = 0; i <= half; i++) {
            let line = '-'.repeat(half - i);
            line += '*';
            if (i > 0) {
                line += '-'.repeat(2 * i - 1);
                line += '*';
            }
            line += '-'.repeat(half - i);
            console.log(line);
        }

        for (let i = half - 1; i >= 0; i--) {
            let line = "-".repeat(half - i);
            line += "*";
            if (i > 0) {
                line += "-".repeat(2 * i - 1);
                line += "*";
            }
            line += "-".repeat(half - i);
            console.log(line);
        }

    }
}