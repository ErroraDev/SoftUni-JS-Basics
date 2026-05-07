function onTimeForTheExam(input) {
    let examHours = Number(input[0]);
    let minuteOfTheExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);

    let late = 'Late';
    let onTime = 'On time';
    let early = 'Early';

    let examTime = (examHours * 60) + minuteOfTheExam;
    let arrivalTime = (hourOfArrival * 60) + minuteOfArrival;
    
    let totalMinutesDifference = arrivalTime - examTime;

    let studentArrival = late;
    if (totalMinutesDifference < -30) {
        studentArrival = early;
    } else if (totalMinutesDifference <= 0 ) {
        studentArrival = onTime;
    }
    let result = '';
    if (totalMinutesDifference != 0) {
        let hoursDifference = Math.abs(~~(totalMinutesDifference / 60));
        let minutesDifference = Math.abs(totalMinutesDifference % 60);
        if (hoursDifference > 0) {
            result = hoursDifference + ":" + (minutesDifference > 9 ? minutesDifference : "0" + minutesDifference) + "hours";

        } else {
        result = minutesDifference + " " + "minutes";
    } 
    if (totalMinutesDifference < 0) {
        result += " " + "before the start";
    } else {
        result += " " + "after the start";
    }
}
    console.log(studentArrival);
    if (result) {
        console.log(result);
    }
}