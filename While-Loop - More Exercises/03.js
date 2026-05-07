function streamOfLetters(input) {
    let letter = input.shift();

    let riverAppeared = false;
    let riverAppeared1 = false;
    let riverAppeared2 = false;
    let printLine = '';
    let word = '';

    while (letter !== 'End') {
        let firstCon = letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
        let secondCon = letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;

        if (firstCon || secondCon) {
            if (letter === 'n') {
                if (riverAppeared) {
                    word += letter;
                }
                riverAppeared = true;
            } else if (letter === 'c') {
                if (riverAppeared1) {
                    word += letter;
                }
                riverAppeared1 = true;
            } else if (letter === 'o') {
                if (riverAppeared2) {
                    word += letter;
                }
                riverAppeared2 = true;
            } else {
                word += letter;
            }
            if (riverAppeared && riverAppeared1 && riverAppeared2) {
                printLine += `${word} `;
                word = '';
                riverAppeared = false;
                riverAppeared1 = false;
                riverAppeared2 = false;
            }
        }
        letter = input.shift();
    }
    console.log(printLine);
}