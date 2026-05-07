function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = '';
    let type = '';
    let price = 0;
    

    if (budget <= 100) {
        destination = 'Bulgaria';
    } else if (budget <= 1000) {
        destination = 'Balkans'
    } else {
        destination = 'Europe';
    }

    if (season === 'summer') {
        type = 'Camp';
    } else {
        type = 'Hotel';
    }
    if (destination === 'Bulgaria') {
        if (season === 'summer') {
            price = 0.30 * budget;
        } else {
            price = 0.70 * budget;
        }
    } else if (destination === 'Balkans') {
        if (season === 'summer') {
            price = 0.40 * budget;
        } else {
            price = 0.80 * budget;
        }
    } else {
        price = 0.90 * budget;
        type = 'Hotel';
    }
      console.log(`Somewhere in ${destination}`);
      console.log(`${type} - ${price.toFixed(2)}`)
}