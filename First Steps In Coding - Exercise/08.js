function basketballEquipment(input) {

    let annualTrainingFee = Number(input[0]);
    let priceDiffFeeSneakres = 0.4 * annualTrainingFee;
    let sneakersPrice = annualTrainingFee - priceDiffFeeSneakres;

    let priceDiffSneakersOutfit = 0.2 * sneakersPrice;
    let outfitPrice = sneakersPrice - priceDiffSneakersOutfit;
    
    let ballPrice = (1 / 4) * outfitPrice;
    
    let basketballAccessories = (1 / 5) * ballPrice;
    
    let totalPrice = annualTrainingFee + sneakersPrice + outfitPrice + ballPrice + basketballAccessories;
    console.log(totalPrice);



}