function fruitOrVegetable(input) {
    let productName = input[0];

    switch (productName) {
        case "banana":
        case "apple":
        case "kiwi":          
        case "lemon":
        case "grapes":
        case "cherry":
        console.log("fruit");
        break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
        console.log("vegetable");
        break;
        default: 
        console.log("unknown")
        break;
    }

}