function grade(input) {
    let numberOfStudents = Number(input[0]);

    let topStudents = 0;
    let betweenFourAndFive = 0;
    let betweenThreeAndFour = 0;
    let underThree = 0;
    let totalSum = 0;

    for (let i = 1; i <= numberOfStudents; i++) {
        let testGrade = Number(input[i]);

        if (testGrade >= 2.00 && testGrade <= 2.99) {
            underThree++;
        } 
        if (testGrade >= 3.00 && testGrade <= 3.99) {
            betweenThreeAndFour++;
        }
        if (testGrade >= 4.00 && testGrade <= 4.99) {
            betweenFourAndFive++;
        }
        if (testGrade >= 5.00) {
            topStudents++;
        }
        totalSum += testGrade;
    }
    
    let percentTopStudents = ((topStudents / numberOfStudents) * 100);
    let percentBetweenFourAndFive = ((betweenFourAndFive / numberOfStudents) * 100);
    let percentBetweenThreeAndFour = ((betweenThreeAndFour / numberOfStudents) * 100);
    let percentUnderThree = ((underThree / numberOfStudents) * 100);
    let average = totalSum / numberOfStudents;

    console.log(`Top students: ${percentTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentBetweenFourAndFive.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentBetweenThreeAndFour.toFixed(2)}%`);
    console.log(`Fail: ${percentUnderThree.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);

}