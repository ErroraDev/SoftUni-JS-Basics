function happyCat(input) {
  let days = Number(input[0]);
  let hours = Number(input[1]);
  let totalFee = 0;

  for (let day = 1; day <= days; day++) {
    let dayliFee = 0;
    for (let hour = 1; hour <= hours; hour++) {
      let hourFee = 1;
      if (day % 2 === 0 && hour % 2 !== 0) {
        hourFee = 2.5;
      } else if (day % 2 !== 0 && hour % 2 === 0) {
        hourFee = 1.25;
      }
      dayliFee += hourFee;
    }
    console.log(`Day: ${day} - ${dayliFee.toFixed(2)} leva`);
    totalFee += dayliFee;
  }
  console.log(`Total: ${totalFee.toFixed(2)} leva`);
}
