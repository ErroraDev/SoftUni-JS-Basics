function transportPrice(input) {
    let km = Number(input[0]);
    let trip = input[1];

    let taxiInitialTax = 0.70;
    let taxiDayTariff = 0.79;
    let taxiNightTariff = 0.90;
    let bus = 0.09;
    let train = 0.06;

    let totalTransportPrice = 0;

    if (km >= 100) {
        totalTransportPrice = train * km;
    } else if (km >= 20) {
        totalTransportPrice = bus * km;
    } else {
        if (trip === 'day') {
            totalTransportPrice = taxiDayTariff * km + taxiInitialTax;
        } else {
            totalTransportPrice = taxiNightTariff * km + taxiInitialTax;
        }
    }
    console.log(totalTransportPrice.toFixed(2));
} 