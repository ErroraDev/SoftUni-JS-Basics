function weatherForecast2(input) {
    let graduses = Number(input[0]);

    if (graduses >= 26.00 && graduses <= 35.00) {
        console.log("Hot");
    } else if (graduses >= 20.1 && graduses <= 25.9) {
        console.log("Warm");
    } else if (graduses >= 15.00 && graduses <= 20.00) {
        console.log("Mild");
    } else if (graduses >= 12.00 && graduses <= 14.9) {
        console.log("Cool");
    } else if (graduses >= 5.00 && graduses <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}