function skiVacation(input) {
    let daysForPrestoi = Number(input[0]);
    let typeOfRoom = input[1];
    let evaluation = input[2];

    let totalPrice = 0;
    let nightsCount = daysForPrestoi - 1;

    switch(typeOfRoom) {
        case 'room for one person':
            totalPrice = nightsCount * 18.00;
        break;
        case 'apartment':
            totalPrice = nightsCount * 25.00;
            if (daysForPrestoi < 10) {
                totalPrice *= 0.70;
            } else if (daysForPrestoi <= 15) {
                totalPrice *= 0.65;
            } else {
                totalPrice *= 0.50;
            }
        break;
        case 'president apartment':
            totalPrice = nightsCount * 35.00;
        if (daysForPrestoi < 10) {
            totalPrice *= 0.90;
        } else if (daysForPrestoi <= 15) {
            totalPrice *= 0.85;
        } else {
            totalPrice *= 0.80;
        }  
    }
     switch(evaluation) {
        case 'positive':
        totalPrice *= 1.25;
        break;
        case 'negative':
        totalPrice *= 0.90;
        break;
     }
    console.log(totalPrice.toFixed(2));
}