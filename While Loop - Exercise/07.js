function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let heigth = Number(input[index]);
    index++;
    let volume = width * length * heigth;
    let command = input[index];
    index++;

    while (command !== 'Done') {
        command = Number(command);

        volume -= command;
        if (volume <= 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
       if (command === 'Done') {
        console.log(`${volume} Cubic meters left.`);
       }
}S