function graduation(input) {
  let name = input[0];
  let sumOfGrades = 0;
  let index = 1;
  let counter = 1;
  let isExcludet = false;

  while (counter < input.length) {
    let grade = Number(input[index]);
    if (grade >= 4) {
      sumOfGrades += grade;
      index++;
      counter++;
    } else {
      if (input[index + 1] < 4) {
        console.log(`${name} has been excluded at ${counter} grade`);
        isExcludet = true;
        break;
      } else {
        counter++;
        index++;
        sumOfGrades += grade;
      }
    }
  }
  let average = (sumOfGrades / (counter - 1)).toFixed(2);

  if (!isExcludet) {
    console.log(`${name} graduated. Average grade: ${average}`);
  }
}
