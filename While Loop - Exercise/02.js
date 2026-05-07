function examPreparation(input) {
    let index = 0;
    let numberOfUnsatisfactoryGrades = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let poorsGradeCounter = 0;
    let gradesCounter = 0;
    let gradesSum = 0;
    let lastName = '';

    while (command !== 'Enough') {
        lastName = command;
        if  (grade <= 4) {
           poorsGradeCounter++;
        }

        if (poorsGradeCounter === numberOfUnsatisfactoryGrades) {
            console.log(`You need a break, ${poorsGradeCounter} poor grades.`);
            return;
        }

        gradesCounter++
        gradesSum += grade; 

        command = input[index];
        index++;

        grade = Number(input[index]);
        index++;
    }
      let avgGrade = gradesSum / gradesCounter;
      console.log(`Average score: ${avgGrade.toFixed(2)}`);
      console.log(`Number of problems: ${gradesCounter}`);
      console.log(`Last problem: ${lastName}`);

}