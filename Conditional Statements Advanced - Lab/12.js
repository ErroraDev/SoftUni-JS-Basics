function tradingCommissions(input) {
    let town = (input[0].toLowerCase());
    let sells = Number(input[1]);
    let commission = -1;

    if (town === "sofia") {
        if (sells >= 0 && sells <= 500) commission = 0.05;
        else if (sells > 500 && sells <= 1000) commission = 0.07;
        else if (sells > 1000 && sells <= 10000) commission = 0.08;
        else if (sells > 10000) commission = 0.12;
    }
        else if (town === "varna") {
        if (sells >= 0 && sells <= 500) commission = 0.045;
        else if (sells > 500 && sells <= 1000) commission = 0.075;
        else if (sells > 1000 && sells <= 10000) commission = 0.10;
        else if (sells > 10000) commission = 0.13;
    }
        else if (town === "plovdiv") {
        if (sells >= 0 && sells <= 500) commission = 0.055;
        else if (sells > 500 && sells <= 1000) commission = 0.08;
        else if (sells > 1000 && sells <= 10000) commission = 0.12;
        else if (sells > 10000) commission = 0.145;
    }
       if (commission >= 0) {
        commission = sells * commission;
        console.log(commission.toFixed(2));
    } else console.log("error");

}