function deliveryOnFood(input) {
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetariansMenu = Number(input[2]);

    let priceForChikenMenus = chikenMenu * 10.35;
    let priceForFishMenus = fishMenu * 12.40;
    let priceForVegetariansMenus = vegetariansMenu * 8.15;

    let totalPriceOnMenus = priceForChikenMenus + priceForFishMenus + priceForVegetariansMenus;

    let totalPercentOnMenu = 20 / 100;

    let desertPrice = totalPercentOnMenu * totalPriceOnMenus;

    let priceOnOrder = totalPriceOnMenus + desertPrice + 2.50;
    console.log(priceOnOrder);


}