function tennisRnglist(input) {
    let tournamentNumber = Number(input[0]);
    let startingPoints = Number(input[1]);
    let pointsWon = 0;
    let tournamentWon = 0;

    for (let i = 2; i < input.length; i++) {
        let currenResult = input[i];
        if (currenResult === 'W') {
            pointsWon += 2000;
            tournamentWon++;
        } else if (currenResult === 'F') {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }
    }
    let totalPoints = startingPoints + pointsWon;
    console.log(`Final points: ${totalPoints}`);

    let averagePoints = Math.floor (pointsWon / tournamentNumber);
    console.log(`Average points: ${averagePoints}`);

    let tournamentsWonPercent = (tournamentWon / tournamentNumber) *  100;
    console.log(`${tournamentsWonPercent.toFixed(2)}%`);

}