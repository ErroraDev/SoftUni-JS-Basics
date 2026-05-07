function harvest(input) {
    let area = Number(input[0]);
    let grape = Number(input[1]);
    let quantity = Number(input[2]);
    let workers = Number(input[3]);

    let litter = (area * grape) * 0.4 / 2.5;
    let diff = quantity - litter;

    if (litter < quantity) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);

    } else {
        let hello = Math.ceil(litter - quantity);
        let person = Math.ceil(hello / workers);

        console.log(`Good harvest this year! Total wine: ${Math.floor(litter)} liters.`);
        console.log(`${hello} liters left -> ${person} liters per person.`);
    }
}