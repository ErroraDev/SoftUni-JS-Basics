function worldSimingRecord(input) {
    let recordInS = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeInS = Number(input[2]);

    let slowdown = Math.floor(distanceInM / 15) * 12.5;
    let timeTaken = distanceInM * timeInS + slowdown;
    let = missingTime = timeTaken - recordInS;

    if (timeTaken < recordInS) {
        console.log(`Yes, he succeeded! The new world record is ${timeTaken.toFixed(2)} seconds.`);
    } else if 
        (timeTaken >= recordInS) {
            console.log(`No, he failed! He was ${missingTime.toFixed(2)} seconds slower.`);
        }
    
}