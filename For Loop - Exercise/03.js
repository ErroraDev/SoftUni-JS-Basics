function histogram(input) {
  let n = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= n; i++) {
    let curNum = Number(input[i]);

    if (curNum < 200) {
      p1++;
    } else if (curNum <= 399) {
      p2++;
    } else if (curNum <= 599) {
      p3++;
    } else if (curNum <= 799) {
      p4++;
    } else {
      p5++;
    }
  }
  let p1Percent = (p1 / n) * 100;
  let p2Percent = (p2 / n) * 100;
  let p3Percent = (p3 / n) * 100;
  let p4Percent = (p4 / n) * 100;
  let p5Percent = (p5 / n) * 100;

  console.log(`${p1Percent.toFixed(2)}%`);
  console.log(`${p2Percent.toFixed(2)}%`);
  console.log(`${p3Percent.toFixed(2)}%`);
  console.log(`${p4Percent.toFixed(2)}%`);
  console.log(`${p5Percent.toFixed(2)}%`);
}
