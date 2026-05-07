function vegetableMarket(input) {
    let priceOnKgVegetable = Number(input[0]);
    let priceOnKgFruits = Number(input[1]);
    let totalKgOnVegetables = Number(input[2]);
    let totalKgOnFruits = Number(input[3]);

    let totalVegetables = priceOnKgVegetable * totalKgOnVegetables;
    let totalFruits = priceOnKgFruits * totalKgOnFruits;

    let totalSum = totalVegetables + totalFruits;

    let bgn = totalSum;
    let euro = (bgn / 1.94).toFixed(2);

    console.log(euro);

}