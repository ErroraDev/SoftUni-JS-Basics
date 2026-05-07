function sleepyTom(input) {
    let holidays = Number(input[0]);

    let workingDays = (365 - holidays) * 63;
    let holidayDays = holidays * 127;
    
    let totalMinutes = workingDays + holidayDays;
    
    if (30000 >= totalMinutes) {
        console.log('Tom sleeps well');
        console.log(`${Math.floor((30000 - totalMinutes) / 60)} hours and ${(30000 - totalMinutes) % 60} minutes less for play`);
    } else {
        console.log('Tom will run away');
        console.log(`${Math.floor((totalMinutes - 30000) / 60)} hours and ${(totalMinutes - 30000) % 60} minutes more for play`);
    }
}