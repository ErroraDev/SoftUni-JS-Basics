function bills(input) {
    let months = Number(input[0]);

    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;

    let waterBill = 20;
    let internetBill = 15;
    let othersBills = 0;

    for (let i = 1; i <= months; i++) {
        let electricityBill = Number(input[i]);
        
        electricity += electricityBill;
        water += waterBill;
        internet += internetBill;

        othersBills = (electricityBill + waterBill + internetBill) * 1.2;
        
        other += othersBills;
    }
    let average = (electricity + water + internet + other) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}