function oscars(input) {
  let actorName = input[0];
  let pointsFromAcademy = Number(input[1]);
  let numEvaluators = Number(input[2]);

  let totalPoints = pointsFromAcademy * 1;

  let judgeNameIndex = 3;
  let judgeScoreIndex = 4;

  for (let i = 0; i < numEvaluators; i++) {
    let evaluatorName = input[judgeNameIndex];
    let evaluatorPoints = Number(input[judgeScoreIndex]);
    totalPoints += (evaluatorName.length * evaluatorPoints) / 2;
    if (totalPoints > 1250.5) {
      break;
    }
    judgeNameIndex += 2;
    judgeScoreIndex += 2;
  }
  if (totalPoints > 1250.5) {
    console.log(
      `Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(
        1
      )}!`
    );
  } else {
    let pointsNedded = 1250.5 - totalPoints;
    console.log(
      `Sorry, ${actorName} you need ${pointsNedded.toFixed(1)} more!`
    );
  }
}
