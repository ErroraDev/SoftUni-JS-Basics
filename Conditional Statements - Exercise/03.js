function timeMin(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    let totalMins = hours * 60 + minutes;

    let totalH = Math.floor(totalMins / 60);
    let totalM = totalMins % 60;

    if (totalH === 24) {
        totalH = 0;
    } else if (totalM === 60) {
        totalM = 0;
    }


    if (totalM < 10) {
        console.log(`${totalH}:0${totalM}`)
    } else {
        console.log(`${totalH}:${totalM}`) 
    }
    
}