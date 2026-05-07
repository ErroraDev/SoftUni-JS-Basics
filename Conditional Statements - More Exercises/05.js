function pets([days,foodInKg,foodForDogInOneDayKg,foodForCatInOneDayInKg,foodForTurtleInOneDayInGr]) {
    let foodForDog = days * foodForDogInOneDayKg;
    let foodForCat = days * foodForCatInOneDayInKg;
    let foodForTurtle = days * foodForTurtleInOneDayInGr / 1000;
    let totalFood = foodForDog + foodForCat + foodForTurtle;
    
    if (foodInKg >= totalFood) {
        console.log(`${(Math.floor(foodInKg-totalFood))} kilos of food left.`);
    } else {
        console.log(`${(Math.abs)((Math.ceil)(totalFood-foodInKg))} more kilos of food are needed.`);
    }
}