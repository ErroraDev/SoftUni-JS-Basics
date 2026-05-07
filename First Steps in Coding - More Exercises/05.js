function trainingLab(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let rows = Math.floor(((length*100) - 100) / 70);
    let places = Math.floor(width*100 / 120);

    let workplaces = rows * places - 3;

    console.log(`${workplaces}`);
}