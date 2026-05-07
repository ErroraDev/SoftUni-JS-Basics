function trainTheTrainers(input) {
    let index = 0;
    
    let gradesCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalGradesSum = 0;
    let presentationCount = 0;

    while (command !== 'Finish') {
        let presentationName = command;
        let gradesSum = 0;
        for (let currentGradeCount = 1; currentGradeCount <= gradesCount; currentGradeCount++) {
            let currentGrade = Number(input[index]);
            index++;
            gradesSum += currentGrade;
        }
        let averageGrade = gradesSum / gradesCount;
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);

        totalGradesSum += averageGrade;
        presentationCount++;

        command = input[index];
        index++;
    }
    let totalAverageGrade = totalGradesSum / presentationCount;
    console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`);
}