function truckDriver(input) {
    let season = input[0];
    let kmOfMonth = Number(input[1]);

    let sum1 = 0.75;
    let sum2 = 0.95;
    let sum3 = 0.90;
    let sum4 = 1.10;
    let sum5 = 1.05;
    let sum6 = 1.25;
    let sum7 = 1.45;

    let salary = 0;

    if (kmOfMonth <= 5000) {
        if (season === 'Spring') {
            salary = sum1;
        } else if (season === 'Autumn') {
            salary = sum1;
        } else if (season === 'Summer') {
            salary = sum3;
        } else if (season === 'Winter') {
            salary = sum5;
        }
    } 
    if (kmOfMonth > 5000 && kmOfMonth <= 10000) {
        if (season === 'Spring') {
            salary = sum2;
        } else if (season === 'Autumn') {
            salary = sum2;
        } else if (season === 'Summer') {
            salary = sum4;
        } else if (season === 'Winter') {
            salary = sum6;
        }
    }
    if (kmOfMonth > 10000 && kmOfMonth <= 20000) {
        if (season === 'Spring' || season === 'Autumn' || season === 'Summer' || season === 'Winter') {
            salary = sum7;
        }
    }
    let totalSalary = kmOfMonth * salary * 4;
    totalSalary *= 0.90;

    console.log(`${totalSalary.toFixed(2)}`);
}