function specialNumbers(input) {
    let n = Number(input[0]);
    let output = '';
    
    for (let i = 1111; i <= 9999; i++) {
        let numberAsString = i.toString();
        let isSpecial = true;
        for (let index = 0; index < numberAsString.length; index++) {
            if (n % numberAsString[index] !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            output += i + " ";
        }
      }
            
    output = output.slice();
    console.log(output);
}