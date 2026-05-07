function ozelenqvane(input){
    let edinKv = 7.61;
    let otstypka = 18 / 100;
    let neobhodimi = Number(input[0]);
    let sum1 = edinKv * neobhodimi;
    let sum2 = sum1 * otstypka;
    let sum3 = sum1 - sum2;
    console.log("The final price is: " + sum3 + " lv.");
    console.log("The discount is: " + sum2 + " lv.");
}