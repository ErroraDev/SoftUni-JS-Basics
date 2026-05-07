function game(input) {
    let moves = Number(input[0]);

    let totalResult = 0;
    let fromZeroToNine = 0;
    let fromTenToNineteen = 0;
    let fromTwentyToTwentyNine = 0;
    let fromThirtyToThirtyNine = 0;
    let fromFourthyToFifthy = 0;
    let invalidNumbers = 0;

    for (let i = 1; i <= moves; i++) {
        let counter = Number(input[i]);

        if (counter >= 0 && counter <= 9) {
            counter *= 0.2;
            totalResult += counter;
            fromZeroToNine++;
        }
        else if (counter >= 10 && counter <= 19) {
            counter *= 0.3;
            totalResult += counter;
            fromTenToNineteen++;
        }
        else if (counter >= 20 && counter <= 29) {
            counter *= 0.4;
            totalResult += counter;
            fromTwentyToTwentyNine++;
        }
        else if (counter >= 30 && counter <= 39) {
            counter = 50;
            totalResult += counter;
            fromThirtyToThirtyNine++;
        }
        else if (counter >= 40 && counter <= 50) {
            counter = 100;
            totalResult += counter;
            fromFourthyToFifthy++;
        } 
        else {
            totalResult = totalResult / 2;
            invalidNumbers++;
        }
    } 

    let percentFromZeroToNine = ((fromZeroToNine / moves) * 100);
    let percentFromTenToNineteen = ((fromTenToNineteen / moves) * 100);
    let percentFromTwentyToTwentyNine = ((fromTwentyToTwentyNine / moves) * 100);
    let percentFromThirtyToThirtyNine = ((fromThirtyToThirtyNine / moves) * 100);
    let percentFromFourthyToFifthy = ((fromFourthyToFifthy / moves) * 100);
    let percentInvalidNumbers = ((invalidNumbers / moves) * 100);

    console.log(`${totalResult.toFixed(2)}`);
    console.log(`From 0 to 9: ${percentFromZeroToNine.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentFromTenToNineteen.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentFromTwentyToTwentyNine.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentFromThirtyToThirtyNine.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentFromFourthyToFifthy.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentInvalidNumbers.toFixed(2)}%`);
}