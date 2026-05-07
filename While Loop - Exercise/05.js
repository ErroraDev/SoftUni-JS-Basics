function coins(input) {
    let index = 0;
    let change = Number(input[index]);
    index++;
    
    let stotinkiConvert = change * 100;
    let countOfCoins = 0;

    while (stotinkiConvert > 0) {
        if (stotinkiConvert >= 200) {
            countOfCoins++;
            stotinkiConvert -= 200;
        }
        else if (stotinkiConvert >= 100) {
            countOfCoins++;
            stotinkiConvert -= 100;
        }
        else if (stotinkiConvert >= 50) {
            countOfCoins++;
            stotinkiConvert -= 50;
        }
        else if (stotinkiConvert >= 20) {
            countOfCoins++;
            stotinkiConvert -= 20;
        }
        else if (stotinkiConvert >= 10) {
            countOfCoins++;
            stotinkiConvert -= 10;
        }
        else if (stotinkiConvert >= 5) {
            countOfCoins++;
            stotinkiConvert -= 5;
        }
        else if (stotinkiConvert >= 2) {
            countOfCoins++;
            stotinkiConvert -= 2;
        }
        else if (stotinkiConvert >= 1) {
            countOfCoins++;
            stotinkiConvert -= 1;
        } 
        else {
            break;
        }
    }  console.log(countOfCoins);
}