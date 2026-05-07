function footballLeague(input) {
    let capacity = Number(input[0]);
    let numbersOfFans = Number(input[1]);

    let fansSectorA = 0;
    let fansSectorB = 0;
    let fansSectorV = 0;
    let fansSectorG = 0;

    for (let i = 1; i <= numbersOfFans; i++) {

        let sector = input[i+1];

        if (sector === 'A') {
            fansSectorA++;
        } if (sector === 'B') {
            fansSectorB++;
        } if (sector === 'V') {
            fansSectorV++;
        } if (sector === 'G') {
            fansSectorG++;
        }
    }
    let percentFansSectorA = ((fansSectorA / numbersOfFans) * 100);
    let percentFansSectorB = ((fansSectorB / numbersOfFans) * 100);
    let percentFansSectorV = ((fansSectorV / numbersOfFans) * 100);
    let percentFansSectorG = ((fansSectorG / numbersOfFans) * 100);
    let perecentOfAllFans = ((numbersOfFans / capacity) * 100);

    console.log(`${percentFansSectorA.toFixed(2)}%`);
    console.log(`${percentFansSectorB.toFixed(2)}%`);
    console.log(`${percentFansSectorV.toFixed(2)}%`);
    console.log(`${percentFansSectorG.toFixed(2)}%`);
    console.log(`${perecentOfAllFans.toFixed(2)}%`);
    
}