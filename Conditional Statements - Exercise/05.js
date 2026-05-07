function godzillaKongFilm(input) {
    let budgetForFilm = Number(input[0]);
    let numberOnStatists = Number(input[1]);
    let priceForFashionForOneStatist = Number(input[2]);
    let sumForFashion = Number(numberOnStatists * priceForFashionForOneStatist);
    let decorForFilm = budgetForFilm * 0.1;
    
    if (numberOnStatists >= 150) {
        sumForFashion = sumForFashion * 0.9;
    } 
    if (decorForFilm + sumForFashion > budgetForFilm) {
        let notEnough = (decorForFilm + sumForFashion) - budgetForFilm;
        console.log("Not enough money!");
        console.log(`Wingard needs ${notEnough.toFixed(2)} leva more.`);

    } else if (decorForFilm + sumForFashion <= budgetForFilm) {
        let enoughMoney = budgetForFilm - (decorForFilm + sumForFashion);
        console.log("Action!");
        console.log(`Wingard starts filming with ${enoughMoney.toFixed(2)} leva left.`);
    }
}