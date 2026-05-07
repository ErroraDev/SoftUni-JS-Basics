function workingHours(input) {
    let time = Number(input[0]);
    let partOfDay = input[1];

    if (time >= 10 && time < 18) {
        switch(partOfDay) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            case "Sunday":
            default:
                console.log("closed")
                break;
        }
    
}  else {
    console.log("closed");
}
}