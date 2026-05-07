function walking(input) {
  let goal = 10000;
  let index = 0;
  let command = input[index];
  index++;
  let sumSteps = 0;

  while (command !== "Going home") {
    let curSteps = Number(command);
    sumSteps += curSteps;
    if (sumSteps >= goal) {
      console.log("Goal reached! Good job!");
      let stepsOverTheGoal = sumSteps - goal;
      console.log(`${stepsOverTheGoal} steps over the goal!`);
      break;
    }

    command = input[index];
    index++;
  }
  if (command === "Going home") {
    let stepsToHome = Number(input[index]);
    sumSteps += stepsToHome;

    if (sumSteps >= goal) {
      let stepsToReach = sumSteps - goal;
      console.log("Goal reached! Good job!");
      console.log(`${stepsToReach} steps over the goal!`);
    } else {
      let stepsNeeded = goal - sumSteps;
      console.log(`${stepsNeeded} more steps to reach goal.`);
    }
  }
}
