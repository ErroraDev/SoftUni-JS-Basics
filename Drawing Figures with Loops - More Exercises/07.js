function drawing(number) {
    for (let i = 0; i <= number; i++) {
        let stars = '*'.repeat(i);
        let spaces = ' '.repeat(number-i);
        let body = ' | ';
        let row = spaces + stars + body + stars + spaces;

        console.log(row);
    }
}