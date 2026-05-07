function carToGo([budget,season]) {
    let price;
    let type;
    let classOnCar;

    if (budget <= 100) {
        classOnCar = 'Economy class';
        if (season === 'Summer') {
            type = 'Cabrio';
            price = budget * 0.35;
        } else {
            type = 'Jeep';
            price = budget * 0.65;
        }
    }
    if (budget > 100 && budget <= 500) {
        classOnCar = 'Compact class';
        if (season === 'Summer') {
            type = 'Cabrio';
            price = budget * 0.45;
        } else {
            type = 'Jeep';
            price = budget * 0.80;
        }
    }
    if (budget > 500) {
        classOnCar = 'Luxury class';
        if (season === 'Summer' || season === 'Winter') {
            type = 'Jeep';
            price = budget * 0.90;
        } 
    }
    console.log(`${classOnCar}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}