function vacation([budget,season]) {
    let location;
    let accommodation;
    let price;

    if (budget <= 1000) {
        accommodation = 'Camp';
        if (season === 'Summer') {
            location = 'Alaska';
            price = budget * 0.65;
        } else {
            location = 'Morocco';
            price = budget * 0.45;
        }
    } 
    else if (budget > 1000 && budget <= 3000) {
        accommodation = 'Hut';
        if (season === 'Summer') {
            location = 'Alaska';
            price = budget * 0.80;
        } else {
            location = 'Morocco';
            price = budget * 0.60;
        }
    }
    else if (budget > 3000) {
        accommodation = 'Hotel';
        if (season === 'Summer') {
            location = 'Alaska';
        } else {
            location = 'Morocco';
        }
        price = budget * 0.90;
    }

    return console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`);

}