function wedding(input) {
    let mans = Number(input[0]);
    let womens  = Number(input[1]);
    let numTables = Number(input[2]);
    let counter = 0;
    let couples = '';

    for(let i = 1; i <= mans; i++) {
        for(let j = 1; j <= womens; j++) {
            counter++;
            couples += `(${i} <-> ${j}) `;
            if(counter == numTables) {
                console.log(couples);
                return;
            }
        }
    }
    console.log(couples);
}