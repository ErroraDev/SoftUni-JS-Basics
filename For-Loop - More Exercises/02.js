function hospital(arg) {
    let period = Number(arg[0]);
    let treatedPatients = 0;
    let unTreatedPatients = 0;
    let doctors = 7;

    for (let day = 1; day <= period; day++) {
        let currentPatients = Number(arg[day]);
        if (day % 3 === 0 && unTreatedPatients > treatedPatients) {
            doctors++;
        }
        if (currentPatients > doctors) {
            treatedPatients += doctors;
            unTreatedPatients += currentPatients - doctors;
        }
        else {
            treatedPatients += currentPatients;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${unTreatedPatients}.`);
}