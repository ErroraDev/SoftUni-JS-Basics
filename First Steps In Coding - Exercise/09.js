function fishTank(input) {
    let lenght = Number(input[0]);
    let width= Number(input[1]); 
    let height = Number(input[2]);
    let percentTaken = Number(input[3]) / 100;

    let totalVolumeInCm = lenght * width * height;
    let totalVolumeInL = totalVolumeInCm / 1000;
    let volumeTaken = percentTaken * totalVolumeInL;
    let volumeLeft = totalVolumeInL - volumeTaken;
    console.log(volumeLeft);

}