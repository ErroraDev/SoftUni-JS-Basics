function schoolCamp(input) {
    let season = input[0];
    let typeGroup = input[1];
    let studentNumber = Number(input[2]);
    let overnight = Number(input[3]);

    let overnightPriceZm = 9.60;
    let overnightPriceProletnaMm = 7.20;
    let overnightLqtnaMm = 15;
    let zimnaSmesena = 10;
    let proletnaSmesena = 9.50;
    let lqtnaSmesena = 20;

    let price = 0;
    let sport = '';

    if (season === 'Winter') {
        if (typeGroup === 'boys') {
            price = overnightPriceZm;
            sport = 'Judo'
        } else if (typeGroup === 'girls') {
            price = overnightPriceZm;
            sport = 'Gymnastics';
        } else if (typeGroup === 'mixed') {
            price = zimnaSmesena;
            sport = 'Ski';
        }
    } 
    if (season === 'Spring') {
        if (typeGroup === 'boys') {
            price = overnightPriceProletnaMm;
            sport = 'Tennis';
        } else if (typeGroup === 'girls') {
            price = overnightPriceProletnaMm;
            sport = 'Athletics';
        } else if (typeGroup === 'mixed') {
            price = proletnaSmesena;
            sport = 'Cycling';
        }
    } 
    if (season === 'Summer') {
        if (typeGroup === 'boys') {
            price = overnightLqtnaMm;
            sport = 'Football';
        } else if (typeGroup === 'girls') {
            price = overnightLqtnaMm;
            sport = 'Volleyball';
        } else if (typeGroup === 'mixed') {
            price = lqtnaSmesena;
            sport = 'Swimming';
        }
    }
    let cenaNaNoshtuvkite = studentNumber * overnight * price;

    if (studentNumber >= 50) {
        cenaNaNoshtuvkite *= 0.50;
    } else if (studentNumber >= 20 && studentNumber < 50) {
        cenaNaNoshtuvkite *= 0.85;
    } else if (studentNumber >= 10 && studentNumber < 20) {
        cenaNaNoshtuvkite *= 0.95;
    }
    console.log(`${sport} ${cenaNaNoshtuvkite.toFixed(2)} lv.`);
}