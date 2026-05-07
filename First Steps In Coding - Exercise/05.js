function suppliesForSchool(input) {
    let packetsChemicals = Number(input[0]);
    let packetsMarkers = Number(input[1]);
    let packetsLPreparat = Number(input[2]);
    let percentageReduction = Number(input[3]) / 100;

    let priceOnPacketsChemicals = packetsChemicals * 5.80;
    let priceOnPacketsMarkers = packetsMarkers * 7.20;
    let priceOnPacketPreparat = packetsLPreparat * 1.20;

    let totalPrice = priceOnPacketsChemicals + priceOnPacketsMarkers + priceOnPacketPreparat;
    
    let totalPriceWithReduction = totalPrice - (totalPrice * percentageReduction);
    console.log(totalPriceWithReduction);


}