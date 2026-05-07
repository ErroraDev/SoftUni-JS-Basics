function number100To200(input) {
    let numbeR = Number(input[0]);

    if (numbeR < 100) {
        console.log("Less than 100");
    } else if (numbeR <= 200) {
        console.log("Between 100 and 200");
    } else if (numbeR > 200) {
        console.log("Greater than 200");
    }

}