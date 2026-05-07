function perimeterAndFace(input) {
    let r = Number(input[0]);
    let perimeter = 2 * Math.PI * r;
    let number2 = Math.pow(r,2);
    let calculatinArea = Math.PI * number2;

    console.log(`${calculatinArea.toFixed(2)}`);
    console.log(`${perimeter.toFixed(2)}`);
}