function areaOfFigures(input) {
  let type = input[0];

  if (type === "square") {
    let side = Number(input[1]);
    let result = side * side;
    console.log(result.toFixed(3));
  } else if (type === "rectangle") {
    let side1 = Number(input[1]);
    let side2 = Number(input[2]);
    let result = side1 * side2;
    console.log(result.toFixed(3));
  } else if (type === "circle") {
    let r = Number(input[1]);
    let result = Math.PI * Math.pow(r, 2);
    console.log(result.toFixed(3));
  } else if (type === "triangle") {
    let lenght = Number(input[1]);
    let h = Number(input[2]);
    let result = (lenght * h) / 2;
    console.log(result.toFixed(3));
  }
}
