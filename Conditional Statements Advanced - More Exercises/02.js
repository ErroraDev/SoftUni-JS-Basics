function bikeRace(input) {
    let fee = 0;
    let juniorsParticipants = Number(input[0]);
    let seniorParticipants = Number(input[1]);
    let trace = input[2];

    switch (trace) {
        case 'trail':
            fee = juniorsParticipants * 5.50 + seniorParticipants * 7;
            break;
        case 'cross-country':
            fee = juniorsParticipants * 8 + seniorParticipants * 9.50;

            if ((juniorsParticipants+seniorParticipants) >= 50) {
                fee *= 0.75;
            }
            break;
        case 'downhill':
            fee = juniorsParticipants * 12.25 + seniorParticipants * 13.75;
            break;
        case 'road':
            fee = juniorsParticipants * 20 + seniorParticipants* 21.50;
            break;
    }
    let feeWithexpenses = fee * 0.95;
    console.log(feeWithexpenses.toFixed(2));
}