function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let sideWallArea = x * y;
    let windowArea = 1.5 * 1.5;
    
    let twoSidesTotal = 2*sideWallArea - 2*windowArea;

    let sideWall = x * x;
    let door = 1.2 * 2;

    let totalSides = 2 * sideWall - door;

    let totalArea = twoSidesTotal + totalSides;
    let greenPaint = totalArea / 3.4;
    console.log(`${greenPaint.toFixed(2)}`);

    let rectangles = 2 * (x * y);
    let triangles = 2 * (x * h / 2);
    let totalArea2 = rectangles + triangles;
    let redPaint = totalArea2 / 4.3;
    console.log(`${redPaint.toFixed(2)}`);
}