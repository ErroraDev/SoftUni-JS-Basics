function solve(input) {
    let lastSector = input.shift();
    let counter = Number(input.shift());
    let seatCounter = Number(input.shift());
    let firstCharNum = 'a'.charCodeAt(0);
    let totalSeats = 0;

    let firstChar = 'A';
    let string = input;

    for (let index = firstChar.charCodeAt(0); index <= lastSector.charCodeAt(0); index++) {
        for (let row = 1; row <= counter; row++) {
            if (row % 2 !== 0) {
                for (let j = firstCharNum; j < firstCharNum + seatCounter; j++) {
                    let currentLetter = String.fromCharCode(index);
                    let currentSmallLetter = String.fromCharCode(j);
                    console.log(`${currentLetter}${row}${currentSmallLetter}`);
                    totalSeats++;
                }
            } else {
                for (let j = firstCharNum; j < firstCharNum + seatCounter + 2; j++) {
                    let currentLetter = String.fromCharCode(index);
                    let currentSmallLetter = String.fromCharCode(j);
                    console.log(`${currentLetter}${row}${currentSmallLetter}`);
                    totalSeats++;
                }
            }
        }

        counter++;

    }
    console.log(totalSeats);
}