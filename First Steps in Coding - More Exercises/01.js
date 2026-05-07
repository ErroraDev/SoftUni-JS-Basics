function trapezionArea(input) {
    let basic1 = Number(input[0]);
    let basic2 = Number(input[1]);
    let height = Number(input[2]);


    let theTrapezionFaceFormula = ((basic1 + basic2) * height /2).toFixed(2);

    let totalResult = theTrapezionFaceFormula

    console.log(theTrapezionFaceFormula);
}