function flowerShop([magnolii,zumbuli,rozi,kaktusi,cenaNaPodaraka]) {

    let sumMagnolii = magnolii * 3.25;
    let sumZumbuli = zumbuli * 4;
    let sumRozi = rozi * 3.50;
    let sumKaktusi = kaktusi * 8;
    let totalPrice = sumMagnolii + sumZumbuli + sumRozi + sumKaktusi;
    let danuk = totalPrice * 5 / 100;
    let totalSum = totalPrice - danuk;
    let money = 0;
    let totalProfit = money - totalSum;
    
    if (totalSum >= cenaNaPodaraka) {
        console.log(`She is left with ${(Math.floor)(totalSum-cenaNaPodaraka)} leva.`);
    } else {
        console.log(`She will have to borrow ${(Math.abs)((Math.ceil)(cenaNaPodaraka-totalSum))} leva.`);
    }
    
}