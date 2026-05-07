function readIntegers(arr) {
  let target = parseInt(arr.shift());
  let sum = 0;
  let numbers = [];

  while (sum < target) {
    let num = parseInt(arr.shift());
    sum += num;
    numbers.push(num);
  }

  console.log(sum);
}
